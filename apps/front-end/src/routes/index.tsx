import DefaultLayout from "@/components/DefaultLayout";
import { EventDetails } from "@/pages/Periods/Details";
import { Home } from "@/pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PeriodsList } from "@/pages/Periods/List";
import { PeriodSignupForm } from "@/pages/Periods/Signup";
import { PeriodsHistory } from "@/pages/Periods/History";

const routes: RouteObject[] = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/periods/details',
        element: <EventDetails />
      },
      {
        path: '/periods/list',
        element: <PeriodsList />
      },
      {
        path: '/periods/signup',
        element: <PeriodSignupForm />
      },
      {
        path: '/periods/history',
        element: <PeriodsHistory />
      }
    ]
  }
]

export const appRoute = createBrowserRouter(routes)