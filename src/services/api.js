import axios from "axios";
import {ApiCode} from "../const";

const BASE_URL = `https://6.react.pages.academy/six-cities`;
const TIMEOUT = 5000;

export const createAPI = (onProblem) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const {response} = err;

    if (err.message === ApiCode.NETWORK_ERROR.name) {
      onProblem(ApiCode.NETWORK_ERROR.name);
      throw err;
    }

    if (response.status === ApiCode.UNAUTHORIZED.number) {
      onProblem(ApiCode.UNAUTHORIZED.number);
      throw err;
    }

    if (response.status === ApiCode.BAD_REQUEST.number) {
      onProblem(ApiCode.BAD_REQUEST.number);
      throw err;
    }

    if (response.status === ApiCode.NOT_FOUND.number) {
      onProblem(ApiCode.NOT_FOUND.number);
      throw err;
    }

    if (response.status === ApiCode.NOT_AVAILABLE.number) {
      onProblem(ApiCode.NOT_AVAILABLE.number);
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
