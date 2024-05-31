import { PaginationResponse } from '@/shared/api/types';
import { axiosInstance } from '@/shared/api/axiosInstance';

import { IMeter } from '../model/type';

const getOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const fetchMetersPage = (props: {
  params: {
    limit: number;
    offset: number;
  };
}) => {
  return axiosInstance
    .get<PaginationResponse<IMeter>>('meters/', {
      ...getOptions,
      ...props,
    })
    .then((res) => res.data);
};

export const deleteMeterById = (id: string) => {
  return axiosInstance.delete(`meters/${id}`).catch((error) => {
    console.error(error);
  });
};
