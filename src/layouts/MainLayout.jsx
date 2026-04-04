import { Play } from "lucide-react";
import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-screen bg-red-100">
      <Navbar />
      <Suspense fallback={<h1>auchhh</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MainLayout;
