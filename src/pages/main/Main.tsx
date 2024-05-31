import { MetersBoard } from "@/widgets";
import { observer } from "mobx-react";

import * as classes from "./Main.module.scss";
export const Main = observer(() => {
  return (
    <div className={classes.content}>
      <h1>Список счетчиков</h1>
      <MetersBoard />
    </div>
  );
});
