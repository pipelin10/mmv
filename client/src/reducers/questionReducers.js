import { GET_QUESTIONS, DELETE_USER_QUESTIONS } from "../actions/types";

const initialState = {
    questions: [],
    flagQuestions: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions:action.payload,
        flagQuestions: true
    };
    case DELETE_USER_QUESTIONS:
      return {
        questions: [],
        flagQuestions: false
    };
    default:
      return state;
  }
}