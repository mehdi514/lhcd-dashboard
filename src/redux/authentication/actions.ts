import API from '../../api';
import { ActionTypes } from './action-types';
import { User } from './models';
import { navigateTo } from '../navigation/actions';
import { RouteType } from '../navigation/models';

export const createUser = (user: User) => ({
    type: ActionTypes.CREATE_USER,
    payload: user
});

export const loginUser = (email: string, password: string) => {
    return async (dispatch: any) => {
        try {
            const data: { token: any, id: any} = await API.post('authenticate', { email, password });
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("id", data.id);
            dispatch(navigateTo(RouteType.DASHBOARD));
          } catch (error) {
            console.log(error);
          }
    }
};

// export const logoutUser = () => {
//     return async (dispatch: any) => {

//     }
// };
