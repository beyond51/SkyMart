import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Authlayout from "../layouts/Authlayout/Authlayout";
import About from "../features/about/About";
import LoginProtected from "./Protected/LoginProtected";
import Homeprotected from "./Protected/Homeprotected";
import Home from "../features/home/components/Home";
import Products from "../features/PRoduct/compoments/Products";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homeprotected />,
      children: [
        {
          path: "",
          element: <Authlayout />,
        },
      ],
    },
    {
      path: "/main",
      element: <LoginProtected />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              path: "home",
              element: <Home />,
            },
            {
              path: "products/:id",
              element: <Products />,
            },
            { path: "about", element: <About /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
