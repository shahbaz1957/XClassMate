import type { RouteObject } from "react-router-dom";

import RootLayout from "../layout/root-layout";
import HomePage from "@/pages/home/home-page";
import LoginPage from "@/pages/auth/login-page";
import RegisterPage from "../../pages/auth/signup-page";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <RegisterPage /> },
    ],
  },
];
