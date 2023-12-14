import React, { useEffect, useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";

const ClientInformation = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlSlug = location.search?.split("=")[1];
  console.log("location", urlSlug);
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("clientInformation");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [canadianResident, setCanadianResident] = useState("");
  const [residentStatus, setResidentStatus] = useState("");
  const [language, setLanguage] = useState("");
  const [canBeReached, setCanBeReached] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const token = localStorage.getItem("token");
  const [clientData, setClientData] = useState({});
  const [errors, setErrors] = useState({});
  console.log("first", clientData);
  useEffect(() => {
    if (Object.keys(clientData).length !== 0) {
      setFirstName(clientData.first_name);
      setLastName(clientData.last_name);
      setMiddleName(clientData.middle_name);
      setUnitNumber(clientData.unit_number);
      setStreetNumber(clientData.street_number);
      setstreetName(clientData.street_name);
      setCity(clientData.city);
      setProvince(clientData.province);
      setPostalCode(clientData.postal_code);
      setPhone(clientData.home_telephone);
      setEmail(clientData.email_address);
      setFaxNumber(clientData.fax_number);
      setGender(clientData.gender);
      setMaritalStatus(clientData.marital_status);
      setCanadianResident(clientData.canadian_resident);
      setResidentStatus(clientData.resident_status);
      setLanguage(clientData.language_spoken);
      setCanBeReached(clientData.can_be_reached);
      setDay(clientData.best_time_to_reach_day);
      setTime(
        `${clientData.best_time_to_reach_time.split(":")[0]}:${
          clientData.best_time_to_reach_time.split(":")[1]
        }`
      );
    }
  }, [clientData]);

  const validateForm = () => {
    const error = {};

    if (firstName === "" || firstName === undefined) {
      error.firstName = "Please enter First name";
    }
    if (lastName === "") {
      error.lastName = "Please enter Last name";
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
    if (postalCode === "") {
      error.postalCode = "Please enter Postal Code";
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
    if (gender === "") {
      error.gender = "Please Select Gender";
    }
    if (maritalStatus === "") {
      error.maritalStatus = "Please Select Marital Status";
    }
    if (canadianResident === "") {
      error.canadianResident = "Please Select Canadian Resident";
    }
    if (residentStatus === "") {
      error.residentStatus = "Please Select Resident Status";
    }
    if (language === "") {
      error.language = "Please Enter Language";
    }
    if (canBeReached === "") {
      error.canBeReached = "Please Select By Reached";
    }
    if (day === "") {
      error.day = "Please Select Day";
    }
    if (time === "") {
      error.time = "Please enter Time";
    }
    setErrors(error);
    return Object.keys(error).length === 0;
  };
  useEffect(() => {
    getClientData(urlSlug);
  }, [urlSlug]);

  const getClientData = async (slug) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("ContentType", "application/json");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    try {
      const resp = await fetch(
        `https://travellingnorth.ca/MVA/public/api/clients/${slug}`,
        requestOptions
      );
      const result = await resp.json();
      setClientData(result);
      console.log("client information---", result);
    } catch (err) {
      console.error("client--", err, "status----", err.status);
    }
  };

  const CreateClientInformation = async () => {
    if (validateForm()) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("ContentType", "application/json");

      const formdata = new FormData();
      formdata.append("last_name", lastName);
      formdata.append("first_name", firstName);
      formdata.append("middle_name", middleName);
      formdata.append("gender", gender);
      formdata.append("marital_status", maritalStatus);
      formdata.append("unit_number", unitNumber);
      formdata.append("street_number", streetNumber);
      formdata.append("street_name", streetName);
      formdata.append("city", city);
      formdata.append("province", province);
      formdata.append("postal_code", postalCode);
      formdata.append("canadian_resident", canadianResident);
      formdata.append("resident_status", residentStatus);
      formdata.append("language_spoken", language);
      formdata.append("home_telephone", phone);
      formdata.append("email_address", email);
      formdata.append("fax_number", faxNumber);
      formdata.append("can_be_reached", canBeReached);
      // formdata.append("other_reach_method", "");
      formdata.append("best_time_to_reach_day", day);
      formdata.append("best_time_to_reach_time", time);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      try {
        const resp = await fetch(
          `https://travellingnorth.ca/MVA/public/api/clients${
            urlSlug ? `/edit/${urlSlug}` : ""
          }`,
          requestOptions
        );
        const result = await resp.json();

        if (result) {
          alert("Client Create Successfully..!");
          navigate("/dashboard");
        }
        console.log("client information---", result);
      } catch (err) {
        console.error("client--", err);
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
            Client Information
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-3 p-2">
              <label>
                First Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>Middle Name</label>
              <input
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Gender
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
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
                Marital Status{" "}
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Status
                </option>
                <option value="Single">Single</option>
                <option value="Married ">Married </option>
                <option value="Common-law ">Common-law </option>
                <option value="Separated  ">Separated </option>
                <option value="Divorced  ">Divorced </option>
                <option value="Widower  ">Widower </option>
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500 text-sm">{errors.maritalStatus}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Canadian Resident{" "}
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={canadianResident}
                onChange={(e) => setCanadianResident(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Canadian Resident
                </option>
                <option value="Yes">Yes</option>
                <option value="No ">No </option>
              </select>
              {errors.canadianResident && (
                <p className="text-red-500 text-sm">
                  {errors.canadianResident}
                </p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Resident Status{" "}
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={residentStatus}
                onChange={(e) => setResidentStatus(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Resident Status
                </option>
                <option value="Permanent Resident ">Permanent Resident </option>
                <option value="Canadian Citizen ">Canadian Citizen </option>
              </select>
              {errors.residentStatus && (
                <p className="text-red-500 text-sm">{errors.residentStatus}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Language Spoken
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Language Spoken"
              />
              {errors.language && (
                <p className="text-red-500 text-sm">{errors.language}</p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Home Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Home Telephone"
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
            <div className="col-span-3 p-2">
              <label>
                You can be reached
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <select
                value={canBeReached}
                onChange={(e) => setCanBeReached(e.target.value)}
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              >
                <option value="" disabled selected>
                  Select Reached by
                </option>
                <option value="By Telephone">By Telephone</option>
                <option value="By Personal Visit">By Personal Visit</option>
                <option value="At Home">At Home</option>
                <option value="At Work">At Work</option>
                <option value="Other">Other</option>
              </select>
              {errors.canBeReached && (
                <p className="text-red-500 text-sm">{errors.canBeReached}</p>
              )}
            </div>
          </div>
          <div className="my-2">
            <p className="text-md upppercase text-gray-600 py-2 bg-gray-200 px-2">
              What is the best time to reach you
            </p>
            <div className="grid grid-cols-12 pt-5">
              <div className="col-span-3 p-2">
                <label>
                  Day
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                >
                  <option value="" disabled selected>
                    Select Day
                  </option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                {errors.day && (
                  <p className="text-red-500 text-sm">{errors.day}</p>
                )}
              </div>
              <div className="col-span-3 p-2">
                <label>
                  Time
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="text"
                  className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                  placeholder="Enter time"
                />
                {errors.time && (
                  <p className="text-red-500 text-sm">{errors.time}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={() => CreateClientInformation()}
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
