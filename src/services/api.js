import axios from "axios";
import {ApiCodes} from "../consts";

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

    if (response.status === ApiCodes.BAD_REQUEST.number) {
      onProblem(ApiCodes.BAD_REQUEST.number);
      throw err;
    }

    if (response.status === ApiCodes.UNAUTHORIZED.number) {
      onProblem(ApiCodes.UNAUTHORIZED.number);
      throw err;
    }

    if (response.status === ApiCodes.NOT_FOUND.number) {
      onProblem(ApiCodes.NOT_FOUND.number);
      throw err;
    }

    if (response.status === ApiCodes.NOT_AVAILABLE.number) {
      onProblem(ApiCodes.NOT_AVAILABLE.number);
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
