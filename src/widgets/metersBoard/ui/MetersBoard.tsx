import { observer } from "mobx-react";
import { Pagination } from "@/features";
import { meterStore } from "@/entities";

import { MeterCard } from "./MetersCard/ui/MeterCard";
import { useMetersBoard } from "../model/useMetersBoard";

const limit = 20;

export const MetersBoard = observer(() => {
  const { page, handlePageClick } = useMetersBoard({ limit });

  return (
    <div className="metersBoard">
      {!meterStore.isDataReady && <div>Загрузка...</div>}
      <div className="content">
        {meterStore.isDataReady && (
          <>
            {meterStore.meters.map((meter, index) => (
              <div key={meter.id}>
                <MeterCard
                  meterId={meter.id}
                  limit={limit}
                  offset={page * limit}
                  areaId={meter.area.id}
                  orderNumber={index + 1}
                  type={meter._type[0]}
                  date={meter.installation_date}
                  isAutomatic={meter.is_automatic}
                  initVal={meter.initial_values[0].toFixed(4)}
                  description={meter.description}
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
