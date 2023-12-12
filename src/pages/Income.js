import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

const ClientInformation = () => {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("income");

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
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-4 p-2">
              <label>
                Income
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                // onChange={(e) => setFirstName(e.target.value)}
                // value={firstName}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter income"
              />
              {/* {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )} */}
            </div>
            <div className="col-span-4 p-2">
              <label>
                Income Type
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                className="w-full py-2 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Income Type
                </option>
                <option value="Interest Income">Interest Income </option>
                <option value="Married">Married </option>
                <option value="Child Support">Child Support </option>
                <option value="Pension">Pension </option>
                <option value="Alimony">Alimony </option>
                <option value="Other Income">Other Income </option>
              </select>
              {/* {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )} */}
            </div>
            <div className="col-span-4 p-2">
              <label>
                Income Period
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                // value={gender}
                // onChange={(e) => setGender(e.target.value)}
                className="w-full py-2 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Income Period
                </option>
                <option value="Annual">Annual </option>
                <option value="Semi-Annual">Semi-Annual </option>
                <option value="Quaterly">Quaterly </option>
                <option value="Monthly">Monthly </option>
                <option value="Semi-Montly">Semi-Montly </option>
                <option value="Bi-Weekly">Bi-Weekly </option>
                <option value="Weekly">Weekly </option>
                <option value="Income">Income </option>
              </select>
              {/* {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )} */}
            </div>
            <div className="col-span-8 p-2">
              <label>
                Description
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <textarea
                // onChange={(e) => setFirstName(e.target.value)}
                // value={firstName}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter income"
              />
              {/* {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )} */}
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button className="ml-2 px-10 rounded py-2 text-lg text-white bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInformation;
