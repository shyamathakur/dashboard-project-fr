import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

function Insurance() {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("insurance");
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [errors, setErrors] = useState({});

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
            Insurance
          </p>
          <p className="text-md upppercase mt-3 text-gray-600 py-2 bg-gray-200 px-2">
            Accident Benefits Insurance
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                Policy holder same as applicant
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <div className="flex justify-start pt-2">
                <input
                  // onChange={(e) => setFirstName(e.target.value)}
                  // value={firstName}
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolder"
                />{" "}
                Yes
                <input
                  // onChange={(e) => setFirstName(e.target.value)}
                  // value={firstName}
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolder"
                />{" "}
                No
              </div>
              {/* {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Policy holder name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy holder name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Insurance Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Claim No."
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
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
                value={`${unitNumber ? unitNumber : ""} ${
                  streetNumber ? streetNumber : ""
                } ${streetName ? streetName : ""} ${city ? city : ""} ${
                  province ? province : ""
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
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Unit Number "
                  />
                  {errors.unitNumber && (
                    <p className="text-red-500 text-sm">{errors.unitNumber}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={streetNumber}
                    onChange={(e) => setStreetNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Number"
                  />
                  {errors.streetNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.streetNumber}
                    </p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={streetName}
                    onChange={(e) => setstreetName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Name "
                  />
                  {errors.streetName && (
                    <p className="text-red-500 text-sm">{errors.streetName}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    City
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Province
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Province "
                  />
                  {errors.province && (
                    <p className="text-red-500 text-sm">{errors.province}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Postal Code
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Postal Code "
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm">{errors.postalCode}</p>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
            <div className="col-span-3 p-2">
              <label>
                Policy No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy No"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
          </div>
          <p className="text-md upppercase mt-3 text-gray-600 py-2 bg-gray-200 px-2">
            Adjuster Information
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                Adjuster Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Company"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Adjuster Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Claim No."
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                First Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter First Name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Last Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Last Name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Toll free
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Toll free"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Ext
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Ext"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Fax
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Email
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Note
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Note"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
          </div>
          <p className="text-md upppercase mt-3 text-gray-600 py-2 bg-gray-200 px-2">
            <span className="text-lg font-bold py-2">
              THIRD PARTY INSURANCE
            </span>
            <br />
            Accident Benefits Insurance
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                Policy holder same as applicant
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <div className="flex justify-start pt-2">
                <input
                  // onChange={(e) => setFirstName(e.target.value)}
                  // value={firstName}
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolder"
                />{" "}
                Yes
                <input
                  // onChange={(e) => setFirstName(e.target.value)}
                  // value={firstName}
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolder"
                />{" "}
                No
              </div>
              {/* {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Policy holder name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy holder name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Insurance Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Claim No."
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
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
                value={`${unitNumber ? unitNumber : ""} ${
                  streetNumber ? streetNumber : ""
                } ${streetName ? streetName : ""} ${city ? city : ""} ${
                  province ? province : ""
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
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Unit Number "
                  />
                  {errors.unitNumber && (
                    <p className="text-red-500 text-sm">{errors.unitNumber}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={streetNumber}
                    onChange={(e) => setStreetNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Number"
                  />
                  {errors.streetNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.streetNumber}
                    </p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Street Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={streetName}
                    onChange={(e) => setstreetName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Name "
                  />
                  {errors.streetName && (
                    <p className="text-red-500 text-sm">{errors.streetName}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    City
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Province
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Province "
                  />
                  {errors.province && (
                    <p className="text-red-500 text-sm">{errors.province}</p>
                  )}
                </div>
                <div className="col-span-3 p-2">
                  <label>
                    Postal Code
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Postal Code "
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-sm">{errors.postalCode}</p>
                  )}
                </div>
              </>
            ) : (
              ""
            )}
            <div className="col-span-3 p-2">
              <label>
                Policy No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy No"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
          </div>
          <p className="text-md upppercase mt-3 text-gray-600 py-2 bg-gray-200 px-2">
            Adjuster Information
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                Adjuster Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Company"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Adjuster Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Claim No."
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                First Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter First Name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Last Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Last Name"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Toll free
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Toll free"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Ext
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Ext"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Fax
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Email
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Note
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                //   value={time}
                //   onChange={(e) => setTime(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Note"
              />
              {/* {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )} */}
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
            //   onClick={() => CreateClientInformation()}
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

export default Insurance;
