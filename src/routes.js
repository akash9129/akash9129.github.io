import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";

export const routes = [
  {
    exact: true,
    path: "/",
    
    component: lazy(() => import("./components/home/Home")),
  },

  {
    exact: true,
    path: "/about",
    layout: HomeLayout,
    component: lazy(() => import("./components/home/Hblog")),
  },
  {
    exact: true,
    path: "/HowWorks",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/SellersPage")),
  },
  {
    exact: true,
    path: "/ContactUs",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/HomePage")),
  },
  {
    exact: true,
    path: "/Blog",
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/Home/VideoCardPage")),
  },
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("src/views/errors/NotFound")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
