import {
  SET_CURRENT_USER,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGOUT_SUCCESS,
  USER_CHANGE
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: {},
  userData: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        userData: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case USER_CHANGE:
      return {
        ...state,
        userData: action.user
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload
      };
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        loading: false
      }
    default:
      return state;
  }
}