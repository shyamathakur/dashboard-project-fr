import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

function Representative() {
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("representative");
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
            Representative
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                First Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter first name"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>Middle Name</label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Middle name"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Last Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter last name"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Initial
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Initial"
              />
            </div>
            <div
              className="col-span-12 p-2 cursor-pointer"
              onClick={() => setOpenAddressBox(openAddressBox ? false : true)}
            >
              <label>
                Address
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                readOnly
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter last name"
              />
            </div>
            {openAddressBox ? (
              <>
                <div className="col-span-3 p-2">
                  <label>
                    Unit Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Unit Number "
                  />
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Number"
                  />
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Name "
                  />
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    City
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter City"
                  />
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Province
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Province "
                  />
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Postal Code
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Postal Code "
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div className="col-span-3 p-2">
              <label>
                Relationship with the applicant
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300">
                <option disabled selected>
                  Select Relationship
                </option>
                <option value="parent ">Parent </option>
                <option value="lawyer">Lawyer</option>
                <option value="guardian ">Guardian </option>
                <option value="other">Other</option>
                <option value="Other Paid Representative">
                  Other Paid Representative
                </option>
              </select>
            </div>
            <div className="col-span-3 p-2">
              <label>
                Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Email Address
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Fax Number
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax Number"
              />
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

export default Representative;
