import API from "../api";
import type { ResponseData } from "./type";

export const getPopular = async () => {
  try {
    const response = await API.get(`movie/popular`);

    if (response.status === 200) {
      return response.data as ResponseData;
    }
  } catch (error: any) {
    console.error(error);
  }
};
