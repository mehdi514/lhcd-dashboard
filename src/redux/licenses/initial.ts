import { AppState } from '../store/app-state';

export const LicensesInitial: AppState['licenses'] = {
    currentLicense: undefined,
    currentLicenseName: '',
    currentSlidePosition: 0,
    getLicenseError: { msg: '', isError: false },
    isConfirmPay: false,
    isCongrats: false,
    isOverviewCourse: false,
    isStartGetLicense: false,
    isStartQuiz: false,
    isStartSlideShow: false,
    licenseTransactionId: '',
    licenses: undefined
}
