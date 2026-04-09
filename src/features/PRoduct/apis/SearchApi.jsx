import { axiosinstance } from "../../../config/AxiosInstance";

export let SearchApi = (search) => {
  let res = axiosinstance(`/search?q=${search}`);
  return res;
};
