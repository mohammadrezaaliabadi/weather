import { ROOT_URL, FETCH_WEATHER, API_KEY } from "../constants";
import axios from "axios";
export function fetchWeather(city) {
  const url = `${ROOT_URL}q=${city}&appid=${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
