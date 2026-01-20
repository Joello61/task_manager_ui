import HomePage from "@/pages/public/HomePage";
import LoginPage from "@/pages/public/LoginPage";
import RegisterPage from "@/pages/public/RegisterPage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const router = createBrowserRouter([
    // 1 routes publiques
  {
    path: "/",
    children: [
        {index: true, element: <HomePage />},
        {path: "login", element: <LoginPage />},
        {path: "register", element: <RegisterPage />}
    ],
  },

  // 404
  {path: "*", element: <Navigate to="/" />},
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
}