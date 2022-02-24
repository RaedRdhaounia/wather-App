import {
  GETWEATHER_FAIL,
  GETWEATHER_LOADING,
  GETWEATHER_SUCCESS,
} from "../constant/ActionTypes";

const initialState = {
  loading: false,
  weather: {},
  errors: null,
};

export const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETWEATHER_LOADING:
      return { ...state, loading: true };
    case GETWEATHER_SUCCESS:
      return { ...state, weather: payload, loading: false };
    case GETWEATHER_FAIL:
      return { ...state, errors: payload, loading: false };
    default:
      return state;
  }
};
