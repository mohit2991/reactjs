import api from "./api";
import endpoint from "./endPoint";

const useApi = {
  login: async (payload) => {
    const respose = await api.post(endpoint.login, payload);
    return respose;
    // return respose.data;
  },
  signup: async (payload) => {
    const respose = await api.post(endpoint.signup, payload);
    return respose;
    // return respose.data;
  },
  userProfile: async () => {
    const respose = await api.get(endpoint.profile);
    return respose;
    // return respose.data;
  },
};

export default useApi;
