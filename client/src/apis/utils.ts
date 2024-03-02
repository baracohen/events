import axios from "axios";

export const storeTokenInSessionStorage = (token: string) => {
  sessionStorage.setItem("jwtToken", token);
};

export const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("jwtToken");
};

// Function to set default headers
export const setDefaultHeaders = () => {
  const token = getTokenFromSessionStorage(); // Assuming you have a function to get the token from local storage
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
