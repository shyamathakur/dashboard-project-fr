import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

function ThirdParty() {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("third-party");
  return (
    <div className="flex">
      <Sidenav
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
      />
      <div className="w-full h-screen overflow-y-scroll">
        <Header />
        <div className="my-5 px-5"></div>
      </div>
    </div>
  );
}

export default ThirdParty;
