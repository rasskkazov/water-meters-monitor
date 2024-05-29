import { createBrowserRouter } from "react-router-dom";
import { Root, ErrorPage, Main } from "@/pages";
import { paths } from "@/shared/constant/paths";

export const router = createBrowserRouter([
  {
    path: paths.MAIN,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.MAIN,
        element: <Main />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
