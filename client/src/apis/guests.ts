import axios from "axios";
import { EventFormData } from "../interfaces/event.interface";
import { setDefaultHeaders } from "./utils";
import { Guest } from "../interfaces/guest.interface";

export const CreateGuest = async (guest: Guest): Promise<boolean> => {
  setDefaultHeaders(); // Set default headers before making the request

  const url = "http://localhost:5001/guest";
  try {
    console.log(guest);
    const response = await axios.post(url, guest);
    console.log(response.data); // do something with the response data
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};
