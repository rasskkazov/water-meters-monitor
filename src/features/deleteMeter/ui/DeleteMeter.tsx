import Trash from "@/shared/assets/svg/trash.svg";

import { handleDelete } from "../api";
import * as classes from "./DeleteMeter.module.scss";

export const DeleteMeter = ({
  id,
  limit,
  offset,
}: {
  id: string;
  limit: number;
  offset: number;
}) => {
  return (
    <button
      onClick={() => handleDelete({ id, limit, offset })}
      className={classes.deleteMeter}
    >
      <Trash />
    </button>
  );
};
