import DefaultLayout from "@/components/DefaultLayout";
import { EventDetails } from "@/pages/Periods/Details";
import { Home } from "@/pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import { PeriodsList } from "@/pages/Periods/List";
import { PeriodSignupForm } from "@/pages/Periods/Signup";
import { PeriodsHistory } from "@/pages/Periods/History";
import { Profile } from "@/pages/Profile";
import { SpecialistsProfile } from "@/pages/Profile/components/Specialists";

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
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/profile/group',
        element: <SpecialistsProfile />
      },
    ]
  }
]

export const appRoute = createBrowserRouter(routes)