import { observer } from "mobx-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { IMeter, fetchMeters, meterStore } from "@/entities";
import { PaginationResponse } from "@/shared/api/types";

export const MetersBoard = observer(() => {
  const { data, isLoading } = useQuery<PaginationResponse<IMeter>>({
    queryKey: [],
    queryFn: () =>
      fetchMeters({
        params: {
          limit: 20,
          offset: 0,
        },
      }),
  });

  useEffect(() => {
    if (!isLoading) {
      meterStore.appendMeters(data.results);
    }
  }, [isLoading]);

  return (
    <div className="metersBoard">
      <div className="headers">Headers</div>
      <div className="headers">
        {meterStore.meters.map((meter) => (
          <div key={meter.id}>{meter.id}</div>
        ))}
        <button
          onClick={() => {
            meterStore.removeMeterById("526a0caae0e34c3e6dda9a9b");
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
});
