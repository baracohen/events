import axios from "axios";
import { EventFormData } from "../interfaces/event.interface";
import { getTokenFromSessionStorage } from "./utils";

// Function to set default headers
const setDefaultHeaders = () => {
  const token = getTokenFromSessionStorage(); // Assuming you have a function to get the token from local storage
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const CreateEvent = async (
  eventData: EventFormData
): Promise<boolean> => {
  setDefaultHeaders(); // Set default headers before making the request

  const url = "http://localhost:5001/events";
  try {
    console.log(eventData);
    const response = await axios.post(url, eventData);
    console.log(response.data); // do something with the response data
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
