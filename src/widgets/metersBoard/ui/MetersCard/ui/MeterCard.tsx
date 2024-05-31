import { DeleteMeter } from "@/features";

import { useArea } from "../../../lib/useArea";

export const MeterCard = ({
  meterId,
  areaId,
  limit,
  offset,
}: {
  meterId: string;
  areaId: string;
  limit: number;
  offset: number;
}) => {
  const { data, isLoading } = useArea(areaId);

  return (
    <div className="meterCard">
      {isLoading && <div>Загрузка...</div>}
      {!isLoading && (
        <>
          <div className="number">{meterId}</div>
          <div className="address">{data.house.address}</div>
          <DeleteMeter id={meterId} limit={limit} offset={offset} />
        </>
      )}
    </div>
  );
};
