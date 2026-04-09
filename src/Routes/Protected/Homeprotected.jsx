import React from "react";
import { Navigate, Outlet } from "react-router";

const Homeprotected = () => {
  let islogin = JSON.parse(localStorage.getItem("islogin"));

  return islogin?.islogin ? <Navigate to={"/main/home"} /> : <Outlet />;
};

export default Homeprotected;
