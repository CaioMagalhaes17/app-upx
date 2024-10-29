import DefaultLayout from "@/components/DefaultLayout";
import Home from "@/pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]

export const appRoute = createBrowserRouter(routes)