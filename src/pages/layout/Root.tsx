import { Outlet } from "react-router-dom";

import * as classes from "./Root.module.scss";

export const Root = () => {
  return (
    <>
      <main className={classes.main}>
        <Outlet />
      </main>
    </>
  );
};
