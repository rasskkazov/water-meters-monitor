import { useState, useEffect } from 'react';
import { meterStore } from '@/entities';

export const useMetersBoard = ({ limit }: { limit: number }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    meterStore.init({ limit, offset: 0 });
    meterStore.updateMetersPage({ limit, offset: 0 });
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    meterStore.updateMetersPage({ limit, offset: limit * selected });
    setPage(selected);
  };

  return { page, handlePageClick };
};
