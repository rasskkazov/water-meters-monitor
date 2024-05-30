import { MetersBoard } from "@/widgets";
import { observer } from "mobx-react";

export const Main = observer(() => {
  return (
    <div className="content">
      <MetersBoard />
    </div>
  );
});
