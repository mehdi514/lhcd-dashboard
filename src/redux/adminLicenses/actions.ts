import { ActionTypes } from './action-types';
  
export const getSearchLicense = (searchedLicense: any) => {
    return {
        type: ActionTypes.GET_SEARCH_LICENSE,
        payload: searchedLicense
    };
};

export const setStripeError = (getLicenseError: any) => {
    return {
        type: ActionTypes.SET_GET_LICENSE_ERROR,
        payload: getLicenseError
    };
};

export const addSection = () => ({ type: ActionTypes.ADD_SECTION });

export const addQuestion = (id: number, questionID: number) => {
    return {
        type: ActionTypes.ADD_QUESTION,
        payload: {
            id,
            questionID
        }
    };
};

export const addField = (fieldName: string, fieldValue: string) => {
    return {
        type: ActionTypes.ADD_FIELDS,
        payload: {
            fieldName,
            fieldValue
        }
    };
};

export const addAnswer = (id: number, quizIndex: number) => {
    return {
        type: ActionTypes.ADD_ANSWER,
        payload: {
            id,
            quizIndex
        }
    };
};

export const addImages = (id: number, fieldName: string, fieldValue: string) => {
    return {
        type: ActionTypes.ADD_IMAGE,
        payload: {
            id,
            fieldName,
            fieldValue
        }
    };
};

export const deleteImage = (id: number, slideIndex: number) => {
    return {
        type: ActionTypes.DELETE_IMAGE,
        payload: {
            id,
            slideIndex
        }
    };
};

export const deleteSlideProp = (id: number, slideIndex: number, delKey: any, delVal: string) => {
    return {
        type: ActionTypes.DELETE_SLIDE_PROP,
        payload: {
            id,
            slideIndex,
            delKey,
            delVal
        }
    };
};

export const deleteSection = (id: number) => ({ type: ActionTypes.DELETE_SECTION, payload: id });

export const deleteQuestion = (id: number, quizIndex: number) => {
    return {
        type: ActionTypes.DELETE_QUESTION,
        payload: {
            id,
            quizIndex
        }
    };
};

export const deleteAnswer = (id: number, quizIndex: number, answerIndex: number) => {
    return {
        type: ActionTypes.DELETE_ANSWER,
        payload: {
            id,
            quizIndex,
            answerIndex
        }
    };
};

export const editQuestion = (id: number, quizIndex: number, name: string, value: string) => {
    return {
        type: ActionTypes.EDIT_QUESTION,
        payload: {
            id,
            quizIndex,
            name,
            value
        }
    };
};

export const editAnswer = (id: number, quizIndex: number, answerIndex: number, answerValue: string) => {
    return {
        type: ActionTypes.EDIT_ANSWER,
        payload: {
            id,
            quizIndex,
            answerIndex,
            answerValue
        }
    };
};

export const editSection = (id: number, fieldName: string, fieldValue: string) => {
    return {
        type: ActionTypes.EDIT_SECTION,
        payload: {
            id,
            fieldName,
            fieldValue
        }
    };
};

export const resetState = (resetedState: any) => ({ type: ActionTypes.RESET_ADMIN_LICENSE_STATE, payload: resetedState });
