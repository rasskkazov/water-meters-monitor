import { PaginationResponse } from "@/shared/api/types";
import { axiosInstance } from "@/shared/api/axiosInstance";

import { IArea } from "../model/type";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchAreaById = (id: string) => {
  return axiosInstance
    .get<PaginationResponse<IArea>>("areas/", {
      ...options,
      params: {
        id__in: id,
      },
    })
    .then((res) => res.data.results[0]);
};
