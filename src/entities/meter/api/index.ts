import { PaginationResponse } from "@/shared/api/types";
import { axiosInstance } from "@/shared/api/axiosInstance";

import { IMeter } from "../model/type";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export interface IFetchMetersProps {
  params: {
    limit: number;
    offset: number;
  };
}

export const fetchMeters = (props: IFetchMetersProps) => {
  return axiosInstance
    .get<PaginationResponse<IMeter>>("meters/", {
      ...options,
      ...props,
    })
    .then((res) => res.data);
};
