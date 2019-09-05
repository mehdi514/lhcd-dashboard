import { ActionTypes } from './action-types';
import { LicensesInitial } from './initial';

export const LicensesReducer = (state = LicensesInitial, action: any) => {
    const {
        type,
        licenses,
        isStartGetLicense,
        isConfirmPay,
        isStartSlideShow,
        isOverviewCourse,
        isCongrats,
        currentLicense,
        isStartQuiz,
        currentLicenseName,
        currentSlidePosition,
        getLicenseError,
        licenseTransactionId
    }: any = action;

    switch (type) {
        case ActionTypes.SET_GET_LICENSE_ERROR:
            return {
                ...state,
                getLicenseError
            };
        case ActionTypes.GET_LICENCES:
            return {
                ...state,
                licenses
            };
        case ActionTypes.SET_CURRENT_LICENSE_NAME:
            return {
                ...state,
                currentLicenseName,
                licenseTransactionId
            };
        case ActionTypes.SET_CURRENT_SLIDE_POSITION:
            return {
                ...state,
                currentSlidePosition
            };
        case ActionTypes.START_GET_LICENSE:
            return {
                ...state,
                isStartGetLicense
            };
        case ActionTypes.START_QUIZ:
            return {
                ...state,
                isStartQuiz
            };
        case ActionTypes.CONFIRM_PAYMENT:
            return {
                ...state,
                isConfirmPay
            };
        case ActionTypes.START_SLIDE_SHOW:
            return {
                ...state,
                isStartSlideShow
            };
        case ActionTypes.OVERVIEW_COURSE:
            return {
                ...state,
                isOverviewCourse,
                isCongrats,
                currentLicense
            };
    default:
        return state;
    }
};
