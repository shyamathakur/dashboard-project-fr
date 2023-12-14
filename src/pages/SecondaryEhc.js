import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

function SecondaryEhc() {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("primaryEhc");
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [active, setActive] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

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
          SECONDARY  EHC Holder
          </p>
          {/* <p className="text-md upppercase mt-3 text-gray-600 py-2 bg-gray-200 px-2">
           SECONDARY  EHC Holder
          </p> */}
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                Which WHC
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="EnterWhich WHC "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Year Start
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="date"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Status
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <select
                value={active}
                onChange={(e) => setActive(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select active
                </option>
                <option value="Active">Active</option>
                <option value="UnActive">UnActive</option>
              </select>
            </div>
            <div className="col-span-3 p-2">
              <label>
                Insurance Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Ref Initail
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Ref Initail "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Claim Form
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="EnterClaim Form "
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
                value={`${unitNumber ? unitNumber : ""} ${streetNumber ? streetNumber : ""
                  } ${streetName ? streetName : ""} ${city ? city : ""} ${province ? province : ""
                  } ${postalCode ? postalCode : ""}`}
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
                Country
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Country Name"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Telephone No
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="tel"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone No"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Fax
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Ref Salutation
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <select
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Ref Salutation
                </option>
                <option value="Ref First Name">Ref First Name</option>
                <option value="Ref Last Name">Ref Last Name</option>
              </select>
            </div>
            <div className="col-span-3 p-2">
              <label>
                P/Group No
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster P/Group No"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                ID /Cert No
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter ID /Cert No"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Patient ID
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Patient ID"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Policy holder same as applicant
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <div className="flex justify-start pt-2">
                <input
                  value="Yes"
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolderT"
                />{" "}
                Yes
                <input
                  value="No"
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolderT"
                />{" "}
                No
              </div>
            </div>
            <div className="col-span-3 p-2">
              <label>
                First Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter First Name"
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
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                initial
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter intial"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                DOB
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                type="date"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter DOB"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Relationship to Policy Holder
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <div className="flex justify-start pt-2">
                <input
                  value="Yes"
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolderT"
                />{" "}
                Yes
                <input
                  value="No"
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolderT"
                />{" "}
                No
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
}

export default SecondaryEhc;
