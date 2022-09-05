import axios from "axios";
import { URL } from "./url";

export const getData = () => {
  const res = axios.get(URL);
  return res;
};
