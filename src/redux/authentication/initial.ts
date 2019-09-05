import { AppState } from '../store/app-state';

export const AuthInitial: AppState['auth'] = {
    user: undefined,
    isRegister: false,
    completeProgress: false
}
