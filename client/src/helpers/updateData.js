import axios from "axios";
import { URL } from "./url";

export const updateData = (id, data) => {
  axios.put(`${URL}/${id}`, data);
};
