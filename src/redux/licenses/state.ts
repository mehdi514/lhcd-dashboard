export interface LicensesState {
    licenses: undefined,
    currentLicense: undefined,
    currentSlidePosition: number,
    licenseTransactionId: string,
    currentLicenseName: string,
    isStartGetLicense: boolean,
    isConfirmPay: boolean,
    isStartSlideShow: boolean,
    getLicenseError: { msg: string, isError: boolean },
    isStartQuiz: boolean,
    isOverviewCourse: boolean,
    isCongrats: boolean
}
