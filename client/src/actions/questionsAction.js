import {GET_QUESTIONS} from "./types";
import axios from "axios";

const setQuestions = questions => {
    return {
        type:GET_QUESTIONS,
        payload:questions
    }
}

export const fetchQuestions = id => dispatch =>{
    axios.get(`/question/${id}`).then(response => {
        dispatch(setQuestions(response.data))
    }).catch(error=>{
  
    });
}
