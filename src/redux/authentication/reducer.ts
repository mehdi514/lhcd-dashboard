import { ActionTypes } from './action-types';
import { AuthInitial } from './initial';

export const AuthReducer = (state = AuthInitial, action: any) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return {
                ...state,
                ...action.user
            };
        case ActionTypes.COMPLETE_REG_PROGRESS:
            return {
                ...state,
                ...action.completeProgress
            };
        case ActionTypes.USER_REGISTER:
            return {
                ...state,
                ...action.isRegister
            };
        default:
            return state;
    }
};
