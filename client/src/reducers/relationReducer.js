import { GET_RELATIONS, 
  SET_ACTUAL_ALBUM_PERSON } from "../actions/types";

const initialState = {
    relations: [],
    actualPersonAlbum: "hola",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RELATIONS:
      return {
        ...state,
        relations:action.payload
    };
    case SET_ACTUAL_ALBUM_PERSON:
        return{
        ...state,
        actualPersonAlbum: action.payload, 
      };
    default:
      return state;
  }
}