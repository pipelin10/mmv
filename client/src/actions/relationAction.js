import {GET_RELATIONS,
    SET_ACTUAL_ALBUM_PERSON
} from "./types";
import axios from "axios";

const setRelations = relations => {
    return {
        type:GET_RELATIONS,
        payload:relations
    }
}

export const fetchRelations = id => dispatch =>{
    axios.get(`/affective/${id}`).then(response => {
        dispatch(setRelations(response.data))
    }).catch(error=>{
  
    });
}

export const setActualAlbumPerson = actualPersonAlbum => {
    console.log("hola bebé " + actualPersonAlbum)
    return {
      type: SET_ACTUAL_ALBUM_PERSON,
      payload: actualPersonAlbum
    }
  }
