import axios from "axios";
import endPoint from "./endPoint";

const baseURL = endPoint.endPoint;
const Axios = axios.create({ baseURL });

Axios.defaults.baseURL = baseURL;

Axios.interceptors.request.use(async (req) => {
  req.headers["Accept-Language"] = localStorage.getItem("lang");
  return req;
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    /** Prevent Browser from Crash in "Internal Server Error" errors */
    if (error.response.status >= 500) {
      throw new Error(["Server Error"]);
    }
    return Promise.reject(error);
  }
);

export default Axios;
