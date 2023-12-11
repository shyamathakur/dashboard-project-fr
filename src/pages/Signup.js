import React, { useState } from "react";
import "./LoginForm.css";
function Signup() {
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firmName, setFirmName] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [lawyerDetails, setLawyerDetails] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [typeOfAccount, setTypeOfAccount] = useState("");

  const SignupHandler = async () => {
    var formdata = new FormData();
    formdata.append("last_name", lastName);
    formdata.append("first_name", firstName);
    formdata.append("middle_name", middleName);
    formdata.append("firm_office_name", firmName);
    formdata.append("street_no", streetNumber);
    formdata.append("street_name", streetName);
    formdata.append("unit", unitNumber);
    formdata.append("city", city);
    formdata.append("province_or_state", province);
    formdata.append("postal_code", postalCode);
    formdata.append("phone", phone);
    formdata.append("fax", faxNumber);
    formdata.append("email", email);
    formdata.append("lawyer_details", lawyerDetails);
    formdata.append("lawyer_name", lawyerName);
    formdata.append("license_number", licenseNumber);
    formdata.append("jurisdiction", jurisdiction);
    formdata.append("type_of_account", typeOfAccount);

    try {
      const resp = await fetch(
        "http://travellingnorth.ca/MVA/public/api/organizations",
        {
          method: "POST",
          body: formdata,
        }
      );
      const result = await resp.json();
      if (result.status === 200) {
        alert("your Registration successfull..!");
      }
      console.log("registration---", result);
    } catch (err) {
      console.error(err);
    }
  };
  console.log("sdfsd", firmName);
  return (
    <div className="login-main-div">
      <div className="login-form-main-div">
        <div className="form-div-child-signup">
          <div className="form-div-signup">
            <div className="user-login">
              <p className="user-heading">
                <strong>Registration</strong>
              </p>
              <div className="grid grid-cols-3">
                <div className="p-2">
                  <label>
                    First Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="First name"
                  />
                </div>
                <div className="p-2">
                  <label>Middle Name</label>
                  <input
                    onChange={(e) => setMiddleName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Middle name"
                  />
                </div>
                <div className="p-2">
                  <label>
                    Last Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="last name"
                  />
                </div>
                <div
                  className="col-span-3 p-2 cursor-pointer"
                  onClick={() =>
                    setOpenAddressBox(openAddressBox ? false : true)
                  }
                >
                  <label>
                    Address
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
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
                    <div className=" p-2">
                      <label>
                        Unit Number
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setUnitNumber(e.target.value)}
                        type="text"
                        className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                        placeholder="Enter Unit Number "
                      />
                    </div>
                    <div className=" p-2">
                      <label>
                        Street Number
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setStreetNumber(e.target.value)}
                        type="text"
                        className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                        placeholder="Enter Street Number"
                      />
                    </div>
                    <div className=" p-2">
                      <label>
                        Street Name
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setstreetName(e.target.value)}
                        type="text"
                        className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                        placeholder="Enter Street Name "
                      />
                    </div>
                    <div className=" p-2">
                      <label>
                        City
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                        placeholder="Enter City"
                      />
                    </div>
                    <div className=" p-2">
                      <label>
                        Province
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
                      </label>
                      <input
                        onChange={(e) => setProvince(e.target.value)}
                        type="text"
                        className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                        placeholder="Enter Province "
                      />
                    </div>
                    <div className=" p-2">
                      <label>
                        Postal Code
                        <span className="text-red-600 font-bold text-md pl-1">
                          *
                        </span>
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
                <div className="p-2">
                  <label>
                    Firm / Office Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setFirmName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter firm name"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Phone{" "}
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Phone"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Email Address
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Email Address"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Fax Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setFaxNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Fax Number"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Lawyer Details
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setLawyerDetails(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Lawyer Details"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Lawyer Name
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setLawyerName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Lawyer Name"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    License number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter License number"
                  />
                </div>
                <div className=" p-2">
                  <label>
                    Jurisdiction
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>

                  <select
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                  >
                    <option disabled selected>
                      Select Jurisdiction
                    </option>
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland and Labrador">
                      Newfoundland and Labrador
                    </option>
                    <option value="Northwest Territories">
                      Northwest Territories
                    </option>
                    <option value="New Scotia">New Scotia</option>
                    <option value="Nunavut">Nunavut</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Prince Edward Island">
                      Prince Edward Island
                    </option>
                    <option value="Quebec">Quebec</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Yukon">Yukon</option>
                  </select>
                </div>
                <div className=" p-2">
                  <label>
                    Type of Account
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>

                  <select
                    onChange={(e) => setTypeOfAccount(e.target.value)}
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                  >
                    <option disabled selected>
                      Select Type of Account
                    </option>
                    <option value="Law Firm">Law Firm</option>
                    <option value="Paralegal">Paralegal</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="button-login-div">
                <button
                  className="button-login-form"
                  onClick={() => SignupHandler()}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
