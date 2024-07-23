import api from "./api";
import endpoint from "./endPoint";

const useApi = {
  login: async (payload) => {
    return await api.post(endpoint.login, payload);
  },
  signup: async (payload) => {
    return await api.post(endpoint.signup, payload);
  },
  userProfile: async () => {
    const respose = await api.get(endpoint.profile);
    return respose;
    // return respose.data;
  },
};

export default useApi;
