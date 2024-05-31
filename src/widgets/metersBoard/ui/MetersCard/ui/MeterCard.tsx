import { TArea, fetchAreaById } from "@/entities";
import { useQuery } from "@tanstack/react-query";
import { useArea } from "../../../lib/useArea";
import { DeleteMeter } from "@/features";

export const MeterCard = ({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}) => {
  const { data, isLoading } = useArea(id);

  return (
    <div className="meterCard">
      {isLoading && <div>Загрузка...</div>}
      {!isLoading && (
        <>
          <div className="number">1</div>
          <div className="type">ТПЛ</div>
          <div className="address">{data.house.address}</div>
          <DeleteMeter id={id} limit={limit} offset={offset} />
        </>
      )}
    </div>
  );
};
