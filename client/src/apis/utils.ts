export const storeTokenInSessionStorage = (token: string) => {
  sessionStorage.setItem("jwtToken", token);
};

export const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("jwtToken");
};
