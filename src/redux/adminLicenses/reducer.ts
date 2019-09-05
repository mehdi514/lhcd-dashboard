import { ActionTypes } from './action-types';
import { ActionType } from '../store/models';
import { AdminLicensesInitial } from './initial';
import { Section } from './models';

export const AdminLicensesReducer = (state = AdminLicensesInitial, action: ActionType) => {

    switch (action.type) {

      case ActionTypes.GET_SEARCH_LICENSE:
        return {
          ...state,
          ...action.payload
        };

      case ActionTypes.SET_GET_LICENSE_ERROR:
        return {
          ...state,
          ...action.payload
        }

      case ActionTypes.RESET_ADMIN_LICENSE_STATE:
        return {
          ...state,
          ...action.payload
        };

      case ActionTypes.ADD_FIELDS:
        return {
          ...state,
          [action.payload.fieldName]: action.payload.fieldValue
        };

      case ActionTypes.ADD_SECTION:
        return {
          ...state,
          sections: [
            ...state.sections,
            {
              sectionNumber: state.sections.length + 1,
              quiz: [],
              slides: [],
              section_slides: 0
            }
          ]
        };

      case ActionTypes.EDIT_SECTION:
        const newSection: any[] = [];
  
        state.sections.map((section: Section) => {
          if (section.sectionNumber === action.payload.id) {
            newSection.push({
              ...section,
              [action.payload.fieldName]: action.payload.fieldValue,
              section_slides: section.slides.length
            });
          } else {
            newSection.push(section);
          }
          return newSection;
        });
  
        return {
          ...state,
          sections: newSection
        };
  
      case ActionTypes.ADD_IMAGE:
        const imageSection: any[] = [];
  
        state.sections.map((section: Section) => {
          if (section.sectionNumber === action.payload.id) {
            imageSection.push({
              ...section,
              [action.payload.fieldName]: action.payload.fieldValue,
              section_slides: section.slides.length
            });
          } else {
            imageSection.push(section);
          }
          return imageSection;
        });
  
        return {
          ...state,
          sections: imageSection
        };
  
      case ActionTypes.DELETE_IMAGE:
        const filterSections: any[] = [];
  
        state.sections.map((section: Section) => {
          if (section.sectionNumber === action.payload.id) {
            const slides = section.slides.filter(
              (slide: any, index: number) => index !== action.payload.slideIndex
            );
            filterSections.push({
              ...section,
              slides,
              section_slides: slides.length
            });
          } else {
            filterSections.push(section);
          }
          return filterSections;
        });
  
        return {
          ...state,
          sections: filterSections
        };
  
      case ActionTypes.DELETE_SLIDE_PROP:
        const updSections: any = [];
  
        state.sections.map((section: Section) => {
          if (section.sectionNumber === action.payload.id) {
            const slides = section.slides.map((slide: any, index: number) => {
              if (action.payload.slideIndex === index && slide[action.payload.delKey] === action.payload.delVal) {
                return {
                  ...slide,
                  [action.payload.delKey]: null
                };
              } else {
                return slide;
              }
            });

            updSections.push({
              ...section,
              slides
            });
          } else {
            updSections.push(section);
          }
          return updSections;
        });
  
        return {
          ...state,
          sections: updSections
        };

      case ActionTypes.DELETE_SECTION:
        const filteredSections = state.sections.filter(
          item => item.sectionNumber !== action.payload.id
        );
        const filterIds = filteredSections.map((item, i) => ({
          ...item,
          sectionNumber: i + 1
        }));
  
        return {
          ...state,
          sections: filterIds
        };

      case ActionTypes.DELETE_QUESTION:
        const updtSects: any[] = [];
  
        state.sections.map((section: Section) => {
          if (section.sectionNumber === action.payload.id) {
            const filtQ = section.quiz
              .filter((q: any, i: number) => i !== action.payload.quizIndex)
              .map((fq: any, i: number) => ({
                ...fq,
                id: `${section.sectionNumber}.${i + 1}`
              }));
            updtSects.push({ ...section, quiz: filtQ });
          } else {
            updtSects.push(section);
          }
          return updtSects;
        });
  
        return {
          ...state,
          sections: updtSects
        };

      case ActionTypes.DELETE_ANSWER:
        const upDQuiz: any[] = [];
        const upDSections: any[] = [];
  
        state.sections.map(item => {
          if (item.sectionNumber === action.payload.id) {
            item.quiz.map((q: any, i: number) => {
              if (i === action.payload.quizIndex) {
                const filteredAnswers = q.answers.filter(
                  (answer: any, aIndex: number) => aIndex !== action.payload.answerIndex
                );
  
                upDQuiz.push({ ...q, answers: filteredAnswers });
              } else {
                upDQuiz.push(q);
              }
              return upDQuiz;
            });
            upDSections.push({ ...item, quiz: upDQuiz });
          } else {
            upDSections.push(item);
          }
          return upDSections;
        });
  
        return {
          ...state,
          sections: upDSections
        };

      case ActionTypes.ADD_QUESTION:
        const newSect = state.sections.map(item => {
          if (item.sectionNumber === action.payload.id) {
            return {
              ...item,
              quiz: [
                ...item.quiz,
                {
                  answers: [""],
                  id: `${item.sectionNumber}.${item.quiz.length + 1}`
                }
              ]
            };
          }
          return item;
        });
  
        return {
          ...state,
          sections: newSect
        };

      case ActionTypes.EDIT_QUESTION:
        const newQuiz: any[] = [];
        const updatedSections: any[] = [];
  
        state.sections.map(item => {
          if (item.sectionNumber === action.payload.id) {
            item.quiz.map((q: any, i: number) => {
              const na = action.payload.name === "correctAnswer" ? [action.payload.value] : [];
              return i === action.payload.quizIndex
                ? newQuiz.push({ ...q, [action.payload.name]: action.payload.value, correctAnswer: na })
                : newQuiz.push(q);
            });
            updatedSections.push({ ...item, quiz: newQuiz });
          } else {
            updatedSections.push(item);
          }
          return updatedSections;
        });
  
        return {
          ...state,
          sections: updatedSections
        };

      case ActionTypes.ADD_ANSWER:
        const quiz: any[] = [];
        const upSections: any[] = [];
  
        state.sections.map(item => {
          if (item.sectionNumber === action.payload.id) {
            item.quiz.map((q: any, i: number) => {
              return i === action.payload.quizIndex
                ? quiz.push({ ...q, answers: [...q.answers, ""] })
                : quiz.push(q);
            });
            upSections.push({ ...item, quiz });
          } else {
            upSections.push(item);
          }
          return upSections;
        });
  
        return {
          ...state,
          sections: upSections
        };
  
      case ActionTypes.EDIT_ANSWER:
        const new_quiz: any[] = [];
        const newAnswers: any[] = [];
        const updated_Sections: any[] = [];
  
        state.sections.map(item => {
          if (item.sectionNumber === action.payload.id) {
            item.quiz.map((q: any, i: number) => {
              if (i === action.payload.quizIndex) {
                q.answers.map((answer: any, aIndex: number) => {
                  return aIndex === action.payload.answerIndex
                    ? newAnswers.push(action.payload.answerValue)
                    : newAnswers.push(answer);
                });
                new_quiz.push({ ...q, answers: newAnswers });
              } else {
                new_quiz.push(q);
              }
              return new_quiz;
            });
            updated_Sections.push({ ...item, quiz: new_quiz });
          } else {
            updated_Sections.push(item);
          }
          return updated_Sections;
        });
  
        return {
          ...state,
          sections: updated_Sections
        };
  
      default:
        return state;
    }
};
