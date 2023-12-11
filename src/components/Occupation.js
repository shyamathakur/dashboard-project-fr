import React, { useState } from "react";

function Occupation() {
  const [openAddressBox, setOpenAddressBox] = useState(false);

  return (
    <div className="my-5 px-5">
      <p className="text-xl uppercase text-white px-5 py-2 bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
        Occupation
      </p>
      <div className="grid grid-cols-12 pt-5">
        <div className="col-span-3 p-2">
          <label>
            Employer Name
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="Enter Employer Name"
          />
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
                <span className="text-red-600 font-bold text-md pl-1">*</span>
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
            Job Period
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="eg: Job Period"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            From
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="eg: From"
          />
        </div>
        <div className="col-span-3 p-2">
          <label>
            To
            <span className="text-red-600 font-bold text-md pl-1">*</span>
          </label>
          <input
            type="text"
            className="w-full py-1 px-2 mt-1 text-md h-25 border border-gray-300"
            placeholder="eg: To"
          />
        </div>
      </div>
      <div className="flex justify-center pt-5">
        <button className="ml-2 px-10 rounded py-2 text-lg text-white bg-gradient-to-r from-[#1b3973] to-[#1c8be7]">
          Save
        </button>
      </div>
    </div>
  );
}

export default Occupation;
