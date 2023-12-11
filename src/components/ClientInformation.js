import React, { useState } from "react";

function ClientInformation() {
  const [openAddressBox, setOpenAddressBox] = useState(false);
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
  const CreateClientInformation = async () => {
    if (firstName === "") {
      alert("Please Enter First name");
    } else if (lastName === "") {
      alert("Please Enter Last name");
    } else if (gender === "") {
      alert("Please Enter gender");
    } else if (unitNumber === "") {
      alert("Please Enter unitNumber");
    }else if (streetNumber === "") {
      alert("Please Enter streetNumber");
    }else if (streetName === "") {
      alert("Please Enter streetName");
    }else if (city === "") {
      alert("Please Enter city");
    }else if (province === "") {
      alert("Please Enter province");
    }else if (postalCode === "") {
      alert("Please Enter postalCode");
    }else if (maritalStatus === "") {
      alert("Please Enter maritalStatus");
    }else if (canadianResident === "") {
      alert("Please Enter canadianResident");
    }else if (residentStatus === "") {
      alert("Please Enter residentStatus");
    }else if (language === "") {
      alert("Please Enter language");
    }else if (phone === "") {
      alert("Please Enter phone");
    }else if (email === "") {
      alert("Please Enter email");
    }else if (faxNumber === "") {
      alert("Please Enter faxNumber");
    }else if (canBeReached === "") {
      alert("Please Enter canBeReached");
    }else if (day === "") {
      alert("Please Enter day");
    }else if (time === "") {
      alert("Please Enter time");
    }else {
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
          "http://travellingnorth.ca/MVA/public/api/clients",
          requestOptions
        );
        const result = await resp.json();
        if (result) {
          alert("Client Create Successfully..!");
        }
        console.log("client information---", result);
      } catch (err) {
        console.error("client--", err);
      }
    }
  };
  return (
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
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter first name"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>Middle Name</label>
          <input
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
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter last name"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            Gender<span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>

          <select
            onChange={(e) => setGender(e.target.value)}
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
          >
            <option disabled selected>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
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
            value={`${unitNumber} ${streetNumber} ${streetName} ${city} ${province} ${postalCode}`}
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setUnitNumber(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Unit Number "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Street Number
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setStreetNumber(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Street Number"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Street Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setstreetName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Street Name "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                City
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter City"
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Province
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setProvince(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Province "
              />
            </div>
            <div className="col-span-3 p-2">
              <label>
                Postal Code
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setPostalCode(e.target.value)}
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
            Marital Status{" "}
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>

          <select
            onChange={(e) => setMaritalStatus(e.target.value)}
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
          >
            <option disabled selected>
              Select Status
            </option>
            <option value="Single">Single</option>
            <option value="Married ">Married </option>
            <option value="Common-law ">Common-law </option>
            <option value="Separated  ">Separated </option>
            <option value="Divorced  ">Divorced </option>
            <option value="Widower  ">Widower </option>
          </select>
        </div>
        <div className="col-span-3 p-2">
          <label>
            Canadian Resident{" "}
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>

          <select
            onChange={(e) => setCanadianResident(e.target.value)}
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
          >
            <option disabled selected>
              Select Canadian Resident
            </option>
            <option value="Yes">Yes</option>
            <option value="No ">No </option>
          </select>
        </div>
        <div className="col-span-3 p-2">
          <label>
            Resident Status{" "}
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>

          <select
            onChange={(e) => setResidentStatus(e.target.value)}
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
          >
            <option disabled selected>
              Select Resident Status
            </option>
            <option value="Permanent Resident ">Permanent Resident </option>
            <option value="Canadian Citizen ">Canadian Citizen </option>
          </select>
        </div>
        <div className="col-span-3 p-2">
          <label>
            Language Spoken
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter Language Spoken"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            Home Telephone
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter Home Telephone"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            Email Address
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setFaxNumber(e.target.value)}
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter Fax Number"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            You can be reached
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <select
            onChange={(e) => setCanBeReached(e.target.value)}
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
          >
            <option disabled selected>
              Select Reached by
            </option>
            <option value="By Telephone">By Telephone</option>
            <option value="By Personal Visit">By Personal Visit</option>
            <option value="At Home">At Home</option>
            <option value="At Work">At Work</option>
            <option value="Other">Other</option>
          </select>
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
              onChange={(e) => setDay(e.target.value)}
              className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            >
              <option disabled selected>
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
          </div>
          <div className="col-span-3 p-2">
            <label>
              Time
              <span className="text-red-600 font-bold text-md pl-1">*</span>
            </label>
            <input
              onChange={(e) => setTime(e.target.value)}
              type="text"
              className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
              placeholder="Enter time"
            />
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
  );
}

export default ClientInformation;
