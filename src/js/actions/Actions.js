import axios from "axios";
import {
  GETWEATHER_FAIL,
  GETWEATHER_LOADING,
  GETWEATHER_SUCCESS,
} from "../constant/ActionTypes";

export const getWeather = (query) => async (dispatch) => {
  dispatch({ type: GETWEATHER_LOADING });
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=b2edd4bf5d3c487487385602212311&q=${query}&days=5&aqi=yes&alerts=yes`
    );
    console.log(response.data)
    dispatch({ type: GETWEATHER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GETWEATHER_FAIL, payload: error });
  }
};
