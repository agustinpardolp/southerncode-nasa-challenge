import axios from "axios";
import { ROVER_ENDPOINT, API_KEY } from "./constants";

const fetchRoversByModel = async (roverName, query) => {
  console.log(`${ROVER_ENDPOINT}${roverName}/photos?${query}&api_key=${API_KEY}`)
  return await axios.get(
    `${ROVER_ENDPOINT}${roverName}/photos?${query}&api_key=${API_KEY}`
    );
};

export const roverServices = {
  fetchRoversByModel,
};
