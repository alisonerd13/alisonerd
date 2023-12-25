import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { IAPIErrorResponse, IAPIResponse } from "../ui";



export const axiosInstance = axios.create({
  withCredentials: false,
});
export const axiosCall = async <T,>(
  config: AxiosRequestConfig,
  converter?: boolean
): Promise<[null, IAPIResponse<T>] | [AxiosError<IAPIErrorResponse>]> => {
  try {
    const { data } = await axiosInstance.request<IAPIResponse<T>>(config);

    const response = { ...data };

    if (converter) {
      const rootValue = { ...response } as T;
      response.data = rootValue;
    }

    return [null, response];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // TODO AxiosError
    } else {
      // TODO Not Axios Error
    }
    return [error as AxiosError<IAPIErrorResponse>];
  }
};