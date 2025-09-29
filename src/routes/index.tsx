import { createBrowserRouter } from "react-router";
import HomeScreen from "../features/home";
import DetailScreen from "../features/detail";
import Layout from "../components/layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <HomeScreen />,
        index: true,
      },
      {
        element: <DetailScreen />,
        path: "/detail/:id",
      },
    ],
  },
]);
