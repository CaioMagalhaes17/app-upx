import DefaultLayout from "@/components/DefaultLayout";
import { EventDetails } from "@/pages/Periods/Details";
import { Home } from "@/pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PeriodsList } from "@/pages/Periods/List";

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/event/details',
        element: <EventDetails />
      },
      {
        path: '/event/list',
        element: <PeriodsList />
      }
    ]
  }
]

export const appRoute = createBrowserRouter(routes)