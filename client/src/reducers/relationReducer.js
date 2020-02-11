import {
  GET_RELATIONS,
  SET_ACTUAL_ALBUM_PERSON,
  UPDATE_RELATIONS,
  DELETE_USER_RELATIONS
} from "../actions/types";

const initialState = {
  relations: [],
  actualPersonAlbum: "",
  flagRelations: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RELATIONS:
      return {
        ...state,
        relations: action.payload,
        flagRelations: true
      };
    case UPDATE_RELATIONS:
      return {
        ...state,
        relations: action.newRelation
      };
    case SET_ACTUAL_ALBUM_PERSON:
      return {
        ...state,
        actualPersonAlbum: action.payload,
      };
    case DELETE_USER_RELATIONS:
      return {
        relations: [],
        actualPersonAlbum: "",
        flagRelations: false
      };
    default:
      return state;
  }
}