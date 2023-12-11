import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

function Identification() {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("identification");
  return (
    <div className="flex">
      <Sidenav
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
      />
      <div className="w-full h-screen overflow-y-scroll">
        <Header/>
        <div className="my-5 px-5">
          <p className="text-xl uppercase text-white px-5 py-2 bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
            Identification
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                ID verification date
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="date"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                ID verification by
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="eg: ID verification by "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Identification Type
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <select className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300">
                <option disabled selected>
                  Select Identification Type
                </option>
                <option value="Drivers Licence">Drivers Licence</option>
                <option value="Passport">Passport</option>
                <option value="PR Card">PR Card</option>
                <option value="Health Card">Health Card</option>
                <option value="Birth Certificate">Birth Certificate</option>
                <option value="Photo Card ">Photo Card </option>
                <option value="Social Insurance Number">
                  Social Insurance Number
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-span-3 p-2">
              <label>
                Identification Country
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="eg: Identification Country "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Identification Number
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="eg: Identification Number"
              />
            </div>
          </div>
          <div className="my-2">
            <p className="text-md upppercase text-gray-600 py-2 bg-gray-200 px-2">
              Describes your status at the time of the accident?
            </p>
            <div className="grid grid-cols-12">
              <div className="col-span-3 p-2">
                <label>
                  Employed
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <select className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300">
                  <option disabled selected>
                    Select Type
                  </option>
                  <option value="Employed & Working">Employed & Working</option>
                  <option value="Self-Employed">Self-Employed</option>
                </select>
              </div>
              <div className="col-span-3 p-2">
                <label>
                  Not Employed
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <select className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300">
                  <option disabled selected>
                    Select Type
                  </option>
                  <option value="Umemployed">Umemployed</option>
                  <option value="Unemployed and,">Unemployed and,</option>
                  <option value="Retired">Retired</option>
                  <option value="Student or recent graduate">
                    Student or recent graduate
                  </option>
                  <option value="Caregiver">Caregiver</option>
                </select>
              </div>
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
}

export default Identification;
