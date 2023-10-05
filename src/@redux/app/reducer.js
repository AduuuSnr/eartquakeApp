/* eslint-disable no-unreachable */
import { SET_EARTHQUAKES } from "./types";

const initialState = {
  earthquakes: null,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_EARTHQUAKES:
      return { ...state, earthquakes: action.payload };
      break;
    default:
      break;
  }

  return state;
};

export default reducer;
