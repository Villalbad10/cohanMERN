import axios from "axios";
import { URL } from "./url";

export const postData = (data) => {
  axios.post(URL, data);
};
