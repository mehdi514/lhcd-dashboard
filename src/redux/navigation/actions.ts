import { push } from 'connected-react-router';

import { RouteType } from './models';

export const navigateTo = (route: RouteType) => (dispatch: any) => {
    try {
        dispatch(push(route));
    } catch(err) {
        console.log("Cannot navigate:", err);
    }
}
