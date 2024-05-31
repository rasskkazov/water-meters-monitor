import { observer } from "mobx-react";
import { useQuery } from "@tanstack/react-query";

import { DeleteMeter, Pagination } from "@/features";
import { TArea, fetchAreaById, meterStore } from "@/entities";
import { PaginationResponse } from "@/shared/api/types";
import { useMetersBoard } from "../lib/useMetersBoard";

const limit = 20;

export const MetersBoard = observer(() => {
  const { page, handlePageClick } = useMetersBoard({ limit: 20 });

  // const useArea = (id: string) => {
  //   const { data, isLoading } = useQuery<TArea>({
  //     queryKey: ["526237d1e0e34c524382c074"],
  //     queryFn: () => fetchAreaById("526237d1e0e34c524382c074"),
  //   });
  // };

  return (
    <div className="metersBoard">
      {!meterStore.isDataReady && <div>Загрузка...</div>}
      <div className="content">
        {meterStore.isDataReady && (
          <>
            {meterStore.meters.map((meter) => (
              <div key={meter.id}>
                <div>{meter.id}</div>
                <DeleteMeter
                  id={meter.id}
                  limit={limit}
                  offset={page * limit}
                />
                <div className="area">{meter.area.id}</div>
              </div>
            ))}
          </>
        )}
        {meterStore.isCountReady && (
          <Pagination
            count={Math.ceil(meterStore.count / limit)}
            handlePageClick={handlePageClick}
          />
        )}
      </div>
    </div>
  );
});
