import { AdminLicensesState } from '../adminLicenses/state';
import { AuthState } from '../authentication/state';
import { LicensesState } from '../licenses/state';

export interface AppState {
  adminLicenses: AdminLicensesState;
  auth: AuthState;
  licenses: LicensesState;
  router: any;
}
