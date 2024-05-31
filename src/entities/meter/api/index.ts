import { PaginationResponse } from "@/shared/api/types";
import { axiosInstance } from "@/shared/api/axiosInstance";

import { IMeter } from "../model/type";

const getOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchMeters = (props: {
  params: {
    limit: number;
    offset: number;
  };
}) => {
  return axiosInstance
    .get<PaginationResponse<IMeter>>("meters/", {
      ...getOptions,
      ...props,
    })
    .then((res) => res.data);
};

export const deleteMeterById = (id: string) => {
  return axiosInstance
    .delete(`meters/${id}`)
    .then((response) => {
      console.log(response);
      console.log(`Deleted post with ID ${id}`);
    })
    .catch((error) => {
      console.error(error);
    });
};
