import axios from "axios";
import { URL } from "./url";

export const deleteData = (id) => {
  axios.delete(`${URL}/${id}`);
};
