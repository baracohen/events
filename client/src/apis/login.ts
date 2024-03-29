import axios from "axios";
import { storeTokenInSessionStorage } from "./utils";

export const UserLogin = async (
  username: string,
  password: string
): Promise<boolean> => {
  const url = "http://localhost:5001/auth/login";
  const data = {
    username: username.toLowerCase(),
    password: password,
  };

  try {
    console.log(data);
    const response = await axios.post(url, data);
    console.log(response.data); // do something with the response data
    storeTokenInSessionStorage(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error(error);
    return false;
  }
};
