import {
  RETRIEVE_WEATHER_DATA
} from '../actions/types';

import kelvinToF from '../helpers/kelvinToF';
import _ from 'lodash';

const initialState = {
  currentRegionWeather: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_WEATHER_DATA:
    return {
      currentRegionWeather: {
        name: action.payload.data.name,
        temperature: action.payload.data.main ? kelvinToF(action.payload.data.main.temp) : 'No Temperature Available',
        description: action.payload.data.weather ? _.capitalize(action.payload.data.weather[0].description) : 'No description available'
      }
    }
    break;
  }
  return { ...state };
}
