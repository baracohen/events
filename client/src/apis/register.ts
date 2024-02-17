import axios from "axios";

export const RegisterUser = async (
  name: string,
  email: string,
  password: string
): Promise<boolean> => {
  const url = "http://localhost:5001/auth/register/";
  const data = {
    name: name,
    email: email.toLowerCase(),
    password: password,
  };

  try {
    const response = await axios.post(url, data);
    console.log(response.data);
    return response.data.access_token;
  } catch (error) {
    console.error(error);
    return false;
  }
};
