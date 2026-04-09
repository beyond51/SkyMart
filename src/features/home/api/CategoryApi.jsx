import { axiosinstance } from "../../../config/AxiosInstance";

export let categoryApi = (id) => {
  let res = axiosinstance(`category/${id}`);
  return res;
};
