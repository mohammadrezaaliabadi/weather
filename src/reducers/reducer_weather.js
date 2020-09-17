import { FETCH_WEATHER } from "../constants";
export default function (state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }
  return state;
}
