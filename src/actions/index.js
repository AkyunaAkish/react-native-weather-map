import {
  DEFAULT,
  SET_ANNOTATIONS,
  RETRIEVE_WEATHER_DATA
} from './types';

const API_KEY = 'dfa538f8d072c8305f79f22d555b2cab';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;
import axios from 'axios';

export function defaultFun() {
  return {
    type: DEFAULT,
    payload:[]
  };
}

export function setAnnotations(region) {
  return {
    type: SET_ANNOTATIONS,
    payload:[region]
  };
}

export function retrieveWeatherData(region) {
  const request = axios.get(`${ROOT_URL}&lat=${region.latitude}&lon=${region.longitude}`);
  return {
    type: RETRIEVE_WEATHER_DATA,
    payload: request
  };
}
