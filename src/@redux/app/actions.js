import { SET_EARTHQUAKES } from "./types";

export const setEarthquakes = (earthquake) => ({
  type: SET_EARTHQUAKES,
  payload: earthquake,
});
