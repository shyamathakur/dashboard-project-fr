import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

const ClientInformation = () => {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("referral");

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
        <div className="my-5 px-5">
          <p className="text-xl uppercase text-white px-5 py-2 bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
            Income
          </p>
          <div className="pt-5">
            <div className="flex justify-between mt-2">
              <div className="p-2 flex flex-col">
                <label>
                  Description
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-[400px] py-1 px-2 mt-1.5 text-md h-35 border border-gray-300"
                  placeholder="EnterDescription"
                />
              </div>
              <div className="p-2 flex flex-col">
                <label>
                  Income
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-[400px] py-1 px-2 mt-1.5 text-md h-35 border border-gray-300"
                  placeholder="Enter Income "
                />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="p-2 flex flex-col">
                <label>
                  Marital Status{" "}
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <select
                  className="w-[400px] py-1 px-2 mt-1.5 text-md h-35 border border-gray-300"
                >
                  <option value="" disabled selected>
                    Income Type
                  </option>
                  <option value="Interest-Income ">Interest Income </option>
                  <option value="Married ">Married </option>
                  <option value="Child Support ">Child Support </option>
                  <option value="Pension   ">Pension  </option>
                  <option value="Alimony   ">Alimony  </option>
                  <option value="Other Income   ">Other Income  </option>
                </select>
              </div>
              <div className="p-2 flex flex-col">
                <label>
                  Income Period
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>

                <select
                  className="w-[400px] py-1 px-2 mt-1.5 text-md h-35 border border-gray-300"
                >
                  <option value="" disabled selected>
                    Income Period
                  </option>
                  <option value="Annual ">Annual </option>
                  <option value="Semi-Annual  ">Semi-Annual  </option>
                  <option value="Quaterly ">Quaterly </option>
                  <option value="Monthly   ">Monthly  </option>
                  <option value="Semi-Montly   ">Semi-Montly  </option>
                  <option value="Bi-Weekly  ">Bi-Weekly </option>
                  <option value="Weekly  ">Weekly </option>
                  <option value="Income   ">Income  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
              className="ml-2 px-10 rounded py-2 text-lg text-white bg-gradient-to-r from-[#1b3973] to-[#1c8be7]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
