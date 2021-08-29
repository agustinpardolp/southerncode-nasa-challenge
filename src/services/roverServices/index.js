import axios from "axios";
import { queryValues } from "../../screens/Rovers/constants";
import { ROVER_ENDPOINT, API_KEY } from "./constants";

const fetchRoversByModel = async (roverName, query, page) => {
  const photosUrl = query? '/photos?': '/latest_photos?'
  return await axios.get(
    `${ROVER_ENDPOINT}${roverName}/${photosUrl}${query}${queryValues.pagination.query}${page}&api_key=${API_KEY}`
    );
};



export const roverServices = {
  fetchRoversByModel
};
