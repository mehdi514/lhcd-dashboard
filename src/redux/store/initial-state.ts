import { AppState } from './app-state';

import { AdminLicensesInitial } from '../adminLicenses/initial';
import { AuthInitial } from '../authentication/initial';
import { LicensesInitial } from '../licenses/initial';

export const InitialState: AppState = {
    adminLicenses: AdminLicensesInitial,
    auth: AuthInitial,
    licenses: LicensesInitial,
    router: undefined
}
