import axios from "axios";
import { EventFormData } from "../interfaces/event.interface";
import { setDefaultHeaders } from "./utils";

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
