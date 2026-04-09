import { axiosinstance } from "../../../config/AxiosInstance";

export let fetchallproducts = () => {
  let res = axiosinstance("");
  return res;
};
export let fetchsingleProduct = (id) => {
  let res = axiosinstance(`/${id}`);
  return res;
};
