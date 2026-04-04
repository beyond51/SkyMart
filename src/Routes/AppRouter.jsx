import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Authlayout from "../layouts/Authlayout/Authlayout";
import Main from "../features/home/components/Main";
import Products from "../features/PRoduct/Products";
import About from "../features/about/About";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
    },

    {
      path: "/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Main />,
        },
        { path: "products", element: <Products /> },
        { path: "about", element: <About /> },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
