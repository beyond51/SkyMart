import React from "react";
import { Outlet, Navigate } from "react-router";

const LoginProtected = () => {
  let islogin = JSON.parse(localStorage.getItem("islogin"));
  return islogin?.islogin ? <Outlet /> : <Navigate to={"/"} />;
};

export default LoginProtected;
