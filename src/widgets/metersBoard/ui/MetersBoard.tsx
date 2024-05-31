import { observer } from "mobx-react";
import { Pagination } from "@/features";
import { meterStore } from "@/entities";

import { MeterCard } from "./MetersCard/ui/MeterCard";
import { useMetersBoard } from "../lib/useMetersBoard";

const limit = 4;

export const MetersBoard = observer(() => {
  const { page, handlePageClick } = useMetersBoard({ limit });

  return (
    <div className="metersBoard">
      {!meterStore.isDataReady && <div>Загрузка...</div>}
      <div className="content">
        {meterStore.isDataReady && (
          <>
            {meterStore.meters.map((meter) => (
              <div key={meter.id}>
                <MeterCard
                  meterId={meter.id}
                  areaId={meter.area.id}
                  limit={limit}
                  offset={page * limit}
                />
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
