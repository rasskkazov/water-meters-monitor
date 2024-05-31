import { useState, useEffect } from "react";
import { meterStore, deleteMeterById } from "@/entities";

export const useMetersBoard = ({ limit }: { limit: number }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    meterStore.init({ limit: limit, offset: 0 });
    meterStore.fetchMetersPage({ limit: limit, offset: 0 });
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    meterStore.fetchMetersPage({ limit: limit, offset: limit * selected });
    setPage(selected);
  };

  return { page, handlePageClick };
};
