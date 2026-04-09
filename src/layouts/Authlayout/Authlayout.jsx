import React, { useState } from "react";
import Login from "../../features/Auth/Login";
import Authpages from "../../features/Auth/Authpages";
import Register from "../../features/Auth/Register";

const Authlayout = () => {
  const [toggle, settoggle] = useState(true);
  return (
    <div className="h-screen w-screen bg-black flex ">
      {toggle ? (
        <>
          <div className="w-1/2 border-r border-white">
            <Authpages />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <Login settoggle={settoggle} />
          </div>
        </>
      ) : (
        <div className="h-screen w-screen flex items-center justify-center ">
          <Register toggle={toggle} settoggle={settoggle} />
        </div>
      )}
    </div>
  );
};

export default Authlayout;
