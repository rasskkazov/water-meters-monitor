import { useQuery } from "@tanstack/react-query";
import { TArea, fetchAreaById } from "@/entities";

export const useArea = (id: string) => {
  return useQuery<TArea>({
    queryKey: ["area", id],
    queryFn: () => fetchAreaById(id),
  });
};
