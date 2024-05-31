import { deleteMeterById, meterStore } from "@/entities";

export const handleDelete = ({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}) => {
  deleteMeterById(id).then((res) => console.log(res));
  meterStore.fetchMetersPage({ limit, offset });
};
