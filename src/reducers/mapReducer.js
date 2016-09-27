import {
  DEFAULT,
  SET_ANNOTATIONS
} from '../actions/types';

const initialState = {
  annotations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
    return { ...state }
    break;
    case SET_ANNOTATIONS:
    return { ...state, annotations: action.payload }
    break;
  }
  return { ...state };
}
