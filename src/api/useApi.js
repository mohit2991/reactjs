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
  updateUserProfile: async (payload) => {
    return await api.post(endpoint.updateProfile, payload);
  },
  forgotPassword: async (payload) => {
    return await api.post(endpoint.forgotPassword, payload);
  },
  validateOtp: async (payload) => {
    return await api.post(endpoint.validateOtp, payload);
  },
  sendMessage: async (payload) => {
    return await api.post(endpoint.sendMessage, payload);
  },
  getMessage: async (payload) => {
    return await api.get(endpoint.getMessage, payload);
  },
};

export default useApi;
