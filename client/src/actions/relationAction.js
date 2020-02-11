import {GET_RELATIONS,
    SET_ACTUAL_ALBUM_PERSON,
    DELETE_USER_RELATIONS
} from "./types";
import axios from "axios";

const setRelations = relations => {
    return {
        type:GET_RELATIONS,
        payload:relations
    }
}

export const fetchRelations  = (id) => dispatch => {
     axios.get(`/affective/${id}`).then(response => {
         dispatch(setRelations(response.data))
     }).catch(error=>{
        console.log(error)
     });
}

export const setActualAlbumPerson = actualPersonAlbum => {
    return {
      type: SET_ACTUAL_ALBUM_PERSON,
      payload: actualPersonAlbum
    }
  }

export const deleteRelations = () => {
    return {
      type: DELETE_USER_RELATIONS
    }
}