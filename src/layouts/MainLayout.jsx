import { Play } from "lucide-react";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/components/Navbar";
import Footer from "../features/home/components/Footer";
import Cart from "../Shared/components/Cart";
import gsap from "gsap";

const MainLayout = () => {
  const [hiddencart, setHiddencart] = useState(true);
  const boxRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { right: -310 },
      { right: 0, duration: 1, ease: "power3.out" },
    );
  }, [hiddencart]);
  return (
    <div className="min-h-screen w-screen bg-black flex flex-col items-center  ">
      <Navbar setHiddencart={setHiddencart} />
      <div className="w-[80%] ">
        <Suspense fallback={<h1>auchhh</h1>}>
          <Outlet context={{ setHiddencart }} />
        </Suspense>
        <div
          onClick={() => setHiddencart((prev) => !prev)}
          className={
            hiddencart
              ? "hidden"
              : "bg-black/60 fixed top-0 left-0 h-screen w-screen"
          }
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Cart setHiddencart={setHiddencart} boxRef={boxRef} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
