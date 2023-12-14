import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

function Insurance() {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("insurance");
  const [openAddressBox, setOpenAddressBox] = useState(false);
  const [openAddressBoxThirdParty, setOpenAddressBoxThirdParty] =
    useState(false);
  const [isPolicyHolderSame, setIsPolicyHolderSame] = useState("");
  const [policyHolder, setPolicyHolder] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [streetName, setstreetName] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [claimNo, setClaimNo] = useState("");
  const [policyNo, setPolicyNo] = useState("");
  const [adjusterCompany, setAdjusterCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [tollFree, setTollFree] = useState("");
  const [ext, setExt] = useState("");
  const [note, setNote] = useState("");

  //third party
  const [thirdPartyIsPolicyHolderSame, setThirdPartyIsPolicyHolderSame] =
    useState("");
  const [thirdPartyPolicyHolder, setThirdPartyPolicyHolder] = useState("");
  const [thirdPartyInsuranceCompany, setThirdPartyInsuranceCompany] =
    useState("");
  const [thirdPartyUnitNumber, setThirdPartyUnitNumber] = useState("");
  const [thirdPartyStreetNumber, setThirdPartyStreetNumber] = useState("");
  const [thirdPartyStreetName, setThirdPartystreetName] = useState("");
  const [thirdPartyCity, setThirdPartyCity] = useState("");
  const [thirdPartyProvince, setThirdPartyProvince] = useState("");
  const [thirdPartyPostalCode, setThirdPartyPostalCode] = useState("");
  const [thirdPartyClaimNo, setThirdPartyClaimNo] = useState("");
  const [thirdPartyPolicyNo, setThirdPartyPolicyNo] = useState("");
  const [thirdPartyAdjusterCompany, setThirdPartyAdjusterCompany] =
    useState("");
  const [thirdPartyFirstName, setThirdPartyFirstName] = useState("");
  const [thirdPartyLastName, setThirdPartyLastName] = useState("");
  const [thirdPartyPhone, setThirdPartyPhone] = useState("");
  const [thirdPartyEmail, setThirdPartyEmail] = useState("");
  const [thirdPartyFaxNumber, setThirdPartyFaxNumber] = useState("");
  const [thirdPartyTollFree, setThirdPartyTollFree] = useState("");
  const [thirdPartyExt, setThirdPartyExt] = useState("");
  const [thirdPartyNote, setThirdPartyNote] = useState("");
  const [errors, setErrors] = useState({});
  const token = localStorage.getItem("token");
  const { slug } = useParams();
  const validateForm = () => {
    const error = {};
    // if (income === "" || income === undefined) {
    //   error.income = "Please enter Other Income";
    // }

    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const CreateInsurance = async () => {
    if (validateForm()) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("ContentType", "application/json");

      const formdata = new FormData();
      formdata.append("policy_holder_same", isPolicyHolderSame);
      formdata.append("policy_holder", policyHolder);
      formdata.append("insurance_company", insuranceCompany);
      formdata.append("unit_number", unitNumber);
      formdata.append("street_number", streetNumber);
      formdata.append("street_name", streetName);
      formdata.append("city", city);
      formdata.append("province", province);
      formdata.append("postal_code", postalCode);
      formdata.append("claim_no", claimNo);
      formdata.append("policy_no", policyNo);
      formdata.append("adjuster_company", adjusterCompany);
      formdata.append("first_name", firstName);
      formdata.append("last_name", lastName);
      formdata.append("toll_free", tollFree);
      formdata.append("telephone", phone);
      formdata.append("ext", ext);
      formdata.append("fax", faxNumber);
      formdata.append("email", email);
      formdata.append("note", note);
      formdata.append("t_policy_holder_same", thirdPartyIsPolicyHolderSame);
      formdata.append("t_policy_holder", thirdPartyPolicyHolder);
      formdata.append("t_insurance_company", thirdPartyInsuranceCompany);
      formdata.append("t_unit_number", thirdPartyUnitNumber);
      formdata.append("t_street_number", thirdPartyStreetNumber);
      formdata.append("t_street_name", thirdPartyStreetName);
      formdata.append("t_city", thirdPartyCity);
      formdata.append("t_province", thirdPartyProvince);
      formdata.append("t_postal_code", thirdPartyPostalCode);
      formdata.append("t_claim_no", thirdPartyClaimNo);
      formdata.append("t_policy_no", thirdPartyPolicyNo);
      formdata.append("t_adjuster_company", thirdPartyAdjusterCompany);
      formdata.append("t_first_name", thirdPartyFirstName);
      formdata.append("t_last_name", thirdPartyLastName);
      formdata.append("t_toll_free", thirdPartyTollFree);
      formdata.append("t_telephone", thirdPartyPhone);
      formdata.append("t_ext", thirdPartyExt);
      formdata.append("t_fax", thirdPartyFaxNumber);
      formdata.append("t_email", thirdPartyEmail);
      formdata.append("t_note", thirdPartyNote);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      try {
        const resp = await fetch(
          `https://travellingnorth.ca/MVA/public/api/insurance/${slug}`,
          requestOptions
        );
        const result = await resp.json();

        if (result.message === "Insurance created successfully") {
          alert(result.message);
        } else {
          alert("something went wrong!");
        }
        console.log("Insurance---", result);
      } catch (err) {
        alert(err.message)
        console.error("Insurance--", err);
      }
    }
  };

  // not completed fullyyy.....!!!!
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
                  onChange={(e) => setIsPolicyHolderSame(e.target.value)}
                  value="Yes"
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolder"
                />{" "}
                Yes
                <input
                  onChange={(e) => setIsPolicyHolderSame(e.target.value)}
                  value="No"
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolder"
                />{" "}
                No
              </div>
              {errors.isPolicyHolderSame && (
                <p className="text-red-500 text-sm">
                  {errors.isPolicyHolderSame}
                </p>
              )}
            </div>
            {isPolicyHolderSame === "No" ? (
              <div className="col-span-3 p-2">
                <label>
                  Policy holder name
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <input
                  value={policyHolder}
                  onChange={(e) => setPolicyHolder(e.target.value)}
                  type="text"
                  className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                  placeholder="Enter Policy holder name"
                />
                {errors.policyHolder && (
                  <p className="text-red-500 text-sm">{errors.policyHolder}</p>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="col-span-3 p-2">
              <label>
                Insurance Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={insuranceCompany}
                onChange={(e) => setInsuranceCompany(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
              {errors.insuranceCompany && (
                <p className="text-red-500 text-sm">
                  {errors.insuranceCompany}
                </p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={claimNo}
                onChange={(e) => setClaimNo(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Claim No."
              />
              {errors.claimNo && (
                <p className="text-red-500 text-sm">{errors.claimNo}</p>
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
                Policy No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={policyNo}
                onChange={(e) => setPolicyNo(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy No"
              />
              {errors.policyNo && (
                <p className="text-red-500 text-sm">{errors.policyNo}</p>
              )}
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
                value={adjusterCompany}
                onChange={(e) => setAdjusterCompany(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Company"
              />
              {errors.adjusterCompany && (
                <p className="text-red-500 text-sm">{errors.adjusterCompany}</p>
              )}
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>{" "}
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
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Toll free
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={tollFree}
                onChange={(e) => setTollFree(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Toll free"
              />
              {errors.tollFree && (
                <p className="text-red-500 text-sm">{errors.tollFree}</p>
              )}
            </div>{" "}
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
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Ext
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={ext}
                onChange={(e) => setExt(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Ext"
              />
              {errors.ext && (
                <p className="text-red-500 text-sm">{errors.ext}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Fax
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={faxNumber}
                onChange={(e) => setFaxNumber(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax"
              />
              {errors.faxNumber && (
                <p className="text-red-500 text-sm">{errors.faxNumber}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Email
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Note
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Note"
              />
              {errors.note && (
                <p className="text-red-500 text-sm">{errors.note}</p>
              )}
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
                  onChange={(e) =>
                    setThirdPartyIsPolicyHolderSame(e.target.value)
                  }
                  value="Yes"
                  type="radio"
                  className="py-1 mr-2 mt-1 text-md border border-gray-300"
                  name="policyHolderT"
                />{" "}
                Yes
                <input
                  onChange={(e) =>
                    setThirdPartyIsPolicyHolderSame(e.target.value)
                  }
                  value="No"
                  type="radio"
                  className=" py-1 mx-2 mt-1 border border-gray-300"
                  name="policyHolderT"
                />{" "}
                No
              </div>
              {errors.thirdPartyIsPolicyHolderSame && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyIsPolicyHolderSame}
                </p>
              )}
            </div>
            {thirdPartyIsPolicyHolderSame === "No" ? (
              <div className="col-span-3 p-2">
                <label>
                  Policy holder name
                  <span className="text-red-600 font-bold text-md pl-1">*</span>
                </label>
                <input
                  value={thirdPartyPolicyHolder}
                  onChange={(e) => setThirdPartyPolicyHolder(e.target.value)}
                  type="text"
                  className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                  placeholder="Enter Policy holder name"
                />
                {errors.thirdPartyPolicyHolder && (
                  <p className="text-red-500 text-sm">
                    {errors.thirdPartyPolicyHolder}
                  </p>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="col-span-3 p-2">
              <label>
                Insurance Company
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyInsuranceCompany}
                onChange={(e) => setThirdPartyInsuranceCompany(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Insurance Company "
              />
              {errors.thirdPartyInsuranceCompany && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyInsuranceCompany}
                </p>
              )}
            </div>
            <div className="col-span-3 p-2">
              <label>
                Claim No.
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyClaimNo}
                onChange={(e) => setThirdPartyClaimNo(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Claim No."
              />
              {errors.thirdPartyClaimNo && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyClaimNo}
                </p>
              )}
            </div>
            <div
              className="col-span-12 p-2 cursor-pointer"
              onClick={() =>
                setOpenAddressBoxThirdParty(
                  openAddressBoxThirdParty ? false : true
                )
              }
            >
              <label>
                Address
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={`${thirdPartyUnitNumber ? thirdPartyUnitNumber : ""} ${
                  thirdPartyStreetNumber ? thirdPartyStreetNumber : ""
                } ${thirdPartyStreetName ? thirdPartyStreetName : ""} ${
                  thirdPartyCity ? thirdPartyCity : ""
                } ${thirdPartyProvince ? thirdPartyProvince : ""} ${
                  thirdPartyPostalCode ? thirdPartyPostalCode : ""
                }`}
                type="text"
                readOnly
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter last name"
              />
            </div>
            {openAddressBoxThirdParty ? (
              <>
                <div className="col-span-3 p-2">
                  <label>
                    Unit Number
                    <span className="text-red-600 font-bold text-md pl-1">
                      *
                    </span>
                  </label>
                  <input
                    value={thirdPartyUnitNumber}
                    onChange={(e) => setThirdPartyUnitNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Unit Number "
                  />
                  {errors.thirdPartyUnitNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyUnitNumber}
                    </p>
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
                    value={thirdPartyStreetNumber}
                    onChange={(e) => setThirdPartyStreetNumber(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Number"
                  />
                  {errors.thirdPartyStreetNumber && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyStreetNumber}
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
                    value={thirdPartyStreetName}
                    onChange={(e) => setThirdPartystreetName(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Street Name "
                  />
                  {errors.thirdPartyStreetName && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyStreetName}
                    </p>
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
                    value={thirdPartyCity}
                    onChange={(e) => setThirdPartyCity(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter City"
                  />
                  {errors.thirdPartyCity && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyCity}
                    </p>
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
                    value={thirdPartyProvince}
                    onChange={(e) => setThirdPartyProvince(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Province "
                  />
                  {errors.thirdPartyProvince && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyProvince}
                    </p>
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
                    value={thirdPartyPostalCode}
                    onChange={(e) => setThirdPartyPostalCode(e.target.value)}
                    type="text"
                    className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                    placeholder="Enter Postal Code "
                  />
                  {errors.thirdPartyPostalCode && (
                    <p className="text-red-500 text-sm">
                      {errors.thirdPartyPostalCode}
                    </p>
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
                value={thirdPartyPolicyNo}
                onChange={(e) => setThirdPartyPolicyNo(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Policy No"
              />
              {errors.thirdPartyPolicyNo && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyPolicyNo}
                </p>
              )}
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
                value={thirdPartyAdjusterCompany}
                onChange={(e) => setThirdPartyAdjusterCompany(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Adjuster Company"
              />
              {errors.thirdPartyAdjusterCompany && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyAdjusterCompany}
                </p>
              )}
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
                value={thirdPartyFirstName}
                onChange={(e) => setThirdPartyFirstName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter First Name"
              />
              {errors.thirdPartyFirstName && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyFirstName}
                </p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Last Name
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyLastName}
                onChange={(e) => setThirdPartyLastName(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Last Name"
              />
              {errors.thirdPartyLastName && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyLastName}
                </p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Toll free
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyTollFree}
                onChange={(e) => setThirdPartyTollFree(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Toll free"
              />
              {errors.thirdPartyTollFree && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyTollFree}
                </p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Telephone
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyPhone}
                onChange={(e) => setThirdPartyPhone(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Telephone"
              />
              {errors.thirdPartyPhone && (
                <p className="text-red-500 text-sm">{errors.thirdPartyPhone}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Ext
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyExt}
                onChange={(e) => setThirdPartyExt(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Ext"
              />
              {errors.thirdPartyExt && (
                <p className="text-red-500 text-sm">{errors.thirdPartyExt}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Fax
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyFaxNumber}
                onChange={(e) => setThirdPartyFaxNumber(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Fax"
              />
              {errors.thirdPartyFaxNumber && (
                <p className="text-red-500 text-sm">
                  {errors.thirdPartyFaxNumber}
                </p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Email
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyEmail}
                onChange={(e) => setThirdPartyEmail(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Email"
              />
              {errors.thirdPartyEmail && (
                <p className="text-red-500 text-sm">{errors.thirdPartyEmail}</p>
              )}
            </div>{" "}
            <div className="col-span-3 p-2">
              <label>
                Note
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                value={thirdPartyNote}
                onChange={(e) => setThirdPartyNote(e.target.value)}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter Note"
              />
              {errors.thirdPartyNote && (
                <p className="text-red-500 text-sm">{errors.thirdPartyNote}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={() => CreateInsurance()}
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
