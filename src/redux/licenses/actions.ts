const moment = require('moment');

// import { API } from '../../api';
import { ActionTypes } from './action-types';

/* ADMIN LICENSE ACTIONS */
export const addAnswer = (id: any, quizIndex: any) => ({ type: ActionTypes.ADD_ANSWER, payload: { id, quizIndex }});
export const addField = (fieldName: string, fieldValue: string) => ({ type: ActionTypes.ADD_FIELDS, payload: { fieldName, fieldValue }});
export const addImages = (id: any, fieldName: any, fieldValue: any) => ({ type: ActionTypes.ADD_IMAGE, payload: { id, fieldName, fieldValue }});
export const addQuestion = (id: any, questionID: any) => ({ type: ActionTypes.ADD_QUESTION, payload: { id, questionID }});
export const addSection = () => ({ type: ActionTypes.ADD_SECTION });
export const deleteAnswer = (id: any, quizIndex: any, answerIndex: any) => ({ type: ActionTypes.DELETE_ANSWER, payload: { id, quizIndex, answerIndex }});
export const deleteImage = (id: any, slideIndex: any) => ({ type: ActionTypes.DELETE_IMAGE, payload: { id, slideIndex }});
export const deleteQuestion = (id: any, quizIndex: any) => ({ type: ActionTypes.DELETE_QUESTION, payload: { id, quizIndex }});
export const deleteSection = (id: any) => ({ type: ActionTypes.DELETE_SECTION, payload: id });
export const deleteSlideProp = (id: any, slideIndex: any, delKey: any, delVal: any) => ({ type: ActionTypes.DELETE_SLIDE_PROP, payload: { id, slideIndex, delKey, delVal }});
export const editAnswer = (id: any, quizIndex: any, answerIndex: any, answerValue: any) => ({ type: ActionTypes.EDIT_ANSWER, payload: { id, quizIndex, answerIndex, answerValue }});
export const editQuestion = (id: any, quizIndex: any, name: any, value: any) => ({ type: ActionTypes.EDIT_QUESTION, payload: { id, quizIndex, name, value }});
export const editSection = (id: any, fieldName: any, fieldValue: any) => ({ type: ActionTypes.EDIT_SECTION, payload: { id, fieldName, fieldValue }});
export const getSearchLicense = (searchedLicense: any) => ({ type: ActionTypes.GET_SEARCH_LICENSE, payload: searchedLicense });
export const resetState = (resetedState: any) => ({ type: ActionTypes.RESET_ADMIN_LICENSE_STATE, payload: resetedState });
export const setStripeError = (getLicenseError: any) => ({ type: ActionTypes.SET_GET_LICENSE_ERROR, payload: getLicenseError });

/* LICENSE ACTIONS */

// export const createLicence = (type: any, amountPaid: any) => {
//     const expirationDate = moment().format("YYYY-MM-DD[T]HH:mm:ss");
//     const { authToken, id: userUid } = localStorage;

//     return async () => {
//         try {
//         await API.post(
//             "license/create",
//             {
//                 type,
//                 expirationDate,
//                 amountPaid,
//                 // rCode,
//                 userUid
//             },
//             {
//                 headers: { Authorization: `Bearer ${authToken}` }
//             }
//         );
//         } catch (e) {
//             console.error(e);
//         }
//     };
// };

// export const deleteLicense = (licenseId: any, token: any) => (
//     async () => {
//       try {
//         await API.delete(`license/${licenseId}`, {
//             headers: {'Authorization': `Bearer ${token}`}
//         });
//       } catch (e) {
//         console.error(e);
//       }
//     }
// );

// export const dispatchLicenses = (licenses: any) => ({ type: ActionTypes.GET_LICENCES, payload: licenses });

//   import dispatchLicenses from "../dispatchLicenses/dispatchLicenses";

// export const fetchLicence = (token: any) => {
//     return async (dispatch: any) => {
//         try {
//             const { data } = await API.get(`license/`, {
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });
//             dispatch(dispatchLicenses(data));
//         } catch (e) {
//             console.error(e);
//         }
//     }
// };

export const startGetLicense = (isStartGetLicense: any) => ({ type: ActionTypes.START_GET_LICENSE, payload: isStartGetLicense });

