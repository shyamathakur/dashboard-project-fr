import React, { useState } from "react";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

const ClientInformation = () => {
  const [openMenu, setOpenMenu] = useState("applicant");
  const [openSubMenu, setOpenSubMenu] = useState("income");
  const [income, setIncome] = useState("");
  const [description, setDescription] = useState("");
  const [incomeType, setIncomeType] = useState("");
  const [incomePeriod, setIncomePeriod] = useState("");
  const [error, setError] = useState({});
  const token = localStorage.getItem("token");
  const slug = localStorage.getItem("slug");
  const validateForm = () => {
    const error = {};
    if (income === "" || income === undefined) {
      error.income = "Please enter Other Income";
    }
    if (description === "") {
      error.description = "Please enter description";
    }
    if (incomePeriod === "") {
      error.incomePeriod = "Please select income period";
    }
    if (incomeType === "") {
      error.incomeType = "Please select income type";
    }

    setError(error);
    return Object.keys(error).length === 0;
  };

  const CreateOtherIncome = async () => {
    if (validateForm()) {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      myHeaders.append("ContentType", "application/json");

      const formdata = new FormData();
      formdata.append("type", incomeType);
      formdata.append("description", description);
      formdata.append("income_period", incomePeriod);
      formdata.append("income", income);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
      };

      try {
        const resp = await fetch(
          `https://travellingnorth.ca/MVA/public/api/other-income/${slug}`,
          requestOptions
        );
        const result = await resp.json();

        if (result.message === "OtherIncome created successfully") {
          // localStorage.setItem("slug", result.slug);
          alert(result.message);
        }
        console.log("other income---", result);
      } catch (err) {
        console.error("other income--", err);
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
            Other Income
          </p>
          <div className="grid grid-cols-12 pt-5">
            <div className="col-span-4 p-2">
              <label>
                Income
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <input
                onChange={(e) => setIncome(e.target.value)}
                value={income}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter income"
              />
              {error.income && (
                <p className="text-red-500 text-sm">{error.income}</p>
              )}
            </div>
            <div className="col-span-4 p-2">
              <label>
                Income Type
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={incomeType}
                onChange={(e) => setIncomeType(e.target.value)}
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
              {error.incomeType && (
                <p className="text-red-500 text-sm">{error.incomeType}</p>
              )}
            </div>
            <div className="col-span-4 p-2">
              <label>
                Income Period
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>

              <select
                value={incomePeriod}
                onChange={(e) => setIncomePeriod(e.target.value)}
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
              {error.incomePeriod && (
                <p className="text-red-500 text-sm">{error.incomePeriod}</p>
              )}
            </div>
            <div className="col-span-8 p-2">
              <label>
                Description
                <span className="text-red-600 font-bold text-md pl-1">*</span>
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
                placeholder="Enter income"
              />
              {error.description && (
                <p className="text-red-500 text-sm">{error.description}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={() => CreateOtherIncome()}
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
