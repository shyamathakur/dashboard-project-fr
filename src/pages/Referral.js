import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function Referral() {
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("referral");
  const [name, setName] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [errors, setErrors] = useState({});
  const token = localStorage.getItem("token");
  const { slug } = useParams();

  const validateForm = () => {
    const error = {};
    if (name === "") {
      error.name = "Please enter Name";
    }
    if (unitNumber === "") {
      error.unitNumber = "Please enter Unit Number";
    }
    if (streetNumber === "") {
      error.streetNumber = "Please enter Street Number";
    }
    if (streetName === "") {
      error.streetName = "Please enter Street Name";
    }
    if (city === "") {
      error.city = "Please enter City";
    }
    if (province === "") {
      error.province = "Please enter province";
    }
    if (phone === "") {
      error.phone = "Please enter phone";
    }
    if (email === "") {
      error.email = "Please enter Email";
    }
    if (faxNumber === "") {
      error.faxNumber = "Please enter Fax Number";
    }


    setErrors(error);
    return Object.keys(error).length === 0;
  };
  const CreateReferral = async () => {
    if (validateForm()) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("ContentType", "application/json");

      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("unit_number", unitNumber);
      formdata.append("street_number", streetNumber);
      formdata.append("street_name", streetName);
      formdata.append("city", city);
      formdata.append("province", province);
      formdata.append("telephone", phone);
      formdata.append("email", email);
      formdata.append("fax", faxNumber);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      try {
        const resp = await fetch(
          `https://travellingnorth.ca/MVA/public/api/referral/${slug}`,
          requestOptions
        );
        const result = await resp.json();

        if (result.message==='Referral created successfully') {
          alert(result.message);
        }
        console.log("referral---", result);
      } catch (err) {
        console.error("referral--", err);
      }
    }
  };

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
            Referral
          </p>
          <div className="grid grid-cols-12 pt-5">
          <div className="col-span-3 p-2">
              <label>
                 Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Employer Name"
              />
                {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Email Address
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Fax Number
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={faxNumber}
                onChange={(e) => setFaxNumber(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax Number"
              />
              {errors.faxNumber && (
                <p className="text-red-500 text-sm">{errors.faxNumber}</p>
              )}
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
                }`}
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
              </>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-center pt-5">
            <button onClick={()=>CreateReferral()} className="ml-2 px-10 rounded py-2 text-lg text-white bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
