import { deleteMeterById, meterStore } from '@/entities';

export const handleDelete = ({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}) => {
  deleteMeterById(id)
    .then(() => {
      meterStore.updateMetersPage({ limit, offset });
    })
    .catch((e) => {
      console.error(e);
    });
};
