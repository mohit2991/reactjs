export const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // get token from local storage
  //   return !!token;
  return token?.length > 0 ? true : false;
};
