import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { LuFileSpreadsheet } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import { RxFrame } from "react-icons/rx";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { BiCalendarStar } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

import "./Dashboard.css";
import Sidenav from "../components/Sidenav";
import ClientInformation from "../components/ClientInformation";
import Occupation from "../components/Occupation";
import Referral from "../components/Referral";
import Representative from "../components/Representative";
import Identification from "../components/Identification";

function Dashboard() {
  const [openMenu, setOpenMenu] = useState("dashboard");
  const [openSubMenu, setOpenSubMenu] = useState("clientInformation");
  const [value, onChange] = useState(new Date());
  const [activeDate, setActiveDate] = useState("");
  useEffect(() => {
    if (value) {
      let newDate = value.toDateString();
      const newActiveDate = ` ${newDate?.split(" ")[2]} ${newDate?.split(" ")[1]
        } ${newDate?.split(" ")[3]}`;
      setActiveDate(newActiveDate);
    }
  }, [value]);

  console.log("val----", value, activeDate);
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
        {openMenu === "dashboard" ? (
          <div className="dashboard-main-div grid grid-cols-12">
            <div className="col-span-9 px-5 pb-5">
              <div className="search-dropdown-filter-main-div pb-5 ">
                <div className="border-2 border-gray-500 flex justify-between rounded-full">
                  <input
                    className="searchbar ml-3"
                    type="text"
                    placeholder="Search"
                  />
                  <FaSearch className="mr-2 mt-2 cursor-pointer text-gray-500" />
                </div>
                <div className="child-main-div">
                  <div className="generate ">
                    <LuFileSpreadsheet className="text-blue-500" />
                    <p className="text-sm">Generate report</p>
                    <RiArrowDropDownLine className="arrow text-blue-500" />
                  </div>
                  <div className="filter">
                    <div className="filter-child">
                      <CiFilter />
                      <p>Filter</p>
                    </div>
                    <div className="filter-icon-div">
                      <RxFrame className="filter-icon text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f5f5ff] w-full h-full px-3 py-2 rounded-t shadow-lg">
                <div className="flex justify-between">
                  {/* design this section according to pdf */}
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="search.."
                      className="py-1 px-3 rounded focus:border-none border border-gray-300"
                    />
                    <select className="py-1 border border-gray-300 ml-3 rounded w-18">
                      <option value="#">sort by</option>
                      <option value="#">data</option>
                      <option value="#">date</option>
                      <option value="#">number</option>
                    </select>
                  </div>
                  <button className="flex py-1 px-2 border border-gray-300 bg-white text-black rounded">
                    Add New +
                  </button>
                </div>
                <table className="w-full my-5">
                  <thead className="bg-[#1c8eeb]">
                    <tr className="grid grid-cols-12 px-3 py-2">
                      <td className="uppercase text-xs text-white col-span-1">
                        {" "}
                        Files
                      </td>
                      <td className="uppercase text-xs text-center text-white col-span-2">
                        {" "}
                        Category
                      </td>
                      <td className="uppercase text-xs text-white col-span-1">
                        {" "}
                        Name
                      </td>
                      <td className="uppercase text-xs text-white col-span-4">
                        {" "}
                        Description
                      </td>
                      <td className="uppercase text-xs text-center text-white col-span-2">
                        {" "}
                        Date of Closing
                      </td>
                      <td className="uppercase text-xs text-center text-white col-span-2">
                        {" "}
                        Status
                      </td>
                    </tr>
                  </thead>
                  <tbody className="h-48 overflow-y-scroll">
                    <tr className="bg-white grid grid-cols-12 px-3 py-2">
                      <td className="text-xs text-orange-600 font-bold col-span-1 flex items-center h-full">
                        <input
                          type="checkbox"
                          className="-ml-8 checkboxStyle rounded-[100%] mr-3"
                        />{" "}
                        Doe v Poe
                      </td>
                      <td className="text-xs font-bold col-span-2 flex justify-center items-center h-full text-center">
                        {" "}
                        Sample Case
                      </td>
                      <td className="text-xs col-span-1 flex justify-center items-center h-full">
                        Sample Case
                      </td>
                      <td className="text-xs col-span-4">
                        {" "}
                        discription are here you can add anything in that i am
                        adding just for testing...
                      </td>
                      <td className="text-xs col-span-2 flex justify-center items-center h-full">
                        14/11/2023
                      </td>
                      <td className="text-xs col-span-2 flex justify-around items-center h-full">
                        <div className="flex justify-around bg-green-300 uppercase text-xs px-2 py-1 rounded-full">
                        <GoDotFill className="text-green-500 text-lg" /> Active
                        </div>
                        <CiMenuKebab className="text-lg" />
                      </td>
                    </tr>
                    <tr className="bg-[#f5f5ff] grid grid-cols-12 px-3 py-2">
                      <td className="text-xs text-orange-600 font-bold col-span-1 flex items-center h-full">
                        <input
                          type="checkbox"
                          className="-ml-8 checkboxStyle rounded-[100%] mr-3"
                        />{" "}
                        Doe v Poe
                      </td>
                      <td className="text-xs font-bold col-span-2 flex justify-center items-center h-full text-center">
                        {" "}
                        Sample Case
                      </td>
                      <td className="text-xs col-span-1 flex justify-center items-center h-full">
                        Sample Case
                      </td>
                      <td className="text-xs col-span-4">
                        {" "}
                        discription are here you can add anything in that i am
                        adding just for testing...
                      </td>
                      <td className="text-xs col-span-2 flex justify-center items-center h-full">
                        14/11/2023
                      </td>
                      <td className="text-xs col-span-2 flex items-center h-full justify-around">
                        <div className="flex justify-around bg-red-200 uppercase text-xs px-2 py-1 rounded-full">
                          <GoDotFill className="text-red-500 text-lg" />   Closed
                        </div>
                        <CiMenuKebab className="text-lg" />
                      </td>
                    </tr>
                    <tr className="bg-white grid grid-cols-12 px-3 py-2">
                      <td className="text-xs text-orange-600 font-bold col-span-1 flex items-center h-full">
                        <input
                          type="checkbox"
                          className="-ml-8 checkboxStyle rounded-[100%] mr-3"
                        />{" "}
                        Doe v Poe
                      </td>
                      <td className="text-xs font-bold col-span-2 flex justify-center items-center h-full text-center">
                        {" "}
                        Sample Case
                      </td>
                      <td className="text-xs col-span-1 flex justify-center items-center h-full">
                        Sample Case
                      </td>
                      <td className="text-xs col-span-4">
                        {" "}
                        discription are here you can add anything in that i am
                        adding just for testing...
                      </td>
                      <td className="text-xs col-span-2  flex justify-center items-center h-full">
                        14/11/2023
                      </td>
                      <td className="text-xs col-span-2 flex items-center h-full justify-around">
                        <div className="flex justify-around bg-green-300 uppercase text-xs px-2 py-1 rounded-full">
                        <GoDotFill className="text-green-500 text-lg" /> Active
                        </div>
                        <CiMenuKebab className="text-lg" />
                      </td>
                    </tr>
                    <tr className="bg-[#f5f5ff] grid grid-cols-12 px-3 py-2">
                      <td className="text-xs text-orange-600 font-bold col-span-1 flex items-center h-full">
                        <input type="checkbox" className="-ml-8 checkboxStyle mr-3" /> Doe v
                        Poe
                      </td>
                      <td className="text-xs font-bold col-span-2 flex justify-center items-center h-full text-center">
                        {" "}
                        Sample Case
                      </td>
                      <td className="text-xs col-span-1 flex justify-center items-center h-full">
                        Sample Case
                      </td>
                      <td className="text-xs col-span-4">
                        {" "}
                        discription are here you can add anything in that i am
                        adding just for testing...
                      </td>
                      <td className="text-xs col-span-2 flex justify-center items-center h-full">
                        14/11/2023
                      </td>
                      <td className="text-xs col-span-2 flex justify-around items-center h-full">
                        <div className="flex justify-around bg-green-300 uppercase text-xs px-2 py-1 rounded-full">
                        <GoDotFill className="text-green-500 text-lg" /> Active
                        </div>
                        <CiMenuKebab className="text-lg" />
                      </td>
                    </tr>
                    <tr className="bg-white grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-[#f5f5ff] grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-white grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-[#f5f5ff] grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-white grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-[#f5f5ff] grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                    <tr className="bg-white grid grid-cols-12 px-3 py-5">
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-3 mb-10">
              <div className="flex justify-between">
                <select className="py-1 px-2 border text-sm border-gray-300 ml-3 rounded w-18">
                  <option value="#">Months</option>
                  <option value="#">Jan</option>
                  <option value="#">Fab</option>
                  <option value="#">MAr</option>
                </select>
                <p className="border border-gray-300 rounded mr-3 py-1 px-3">
                  {activeDate}
                </p>
              </div>
              <div className="h-full rounded shadow-xl mx-2  text-center no-underline">
                <div className="mx-2 leading-[2rem] text-center no-underline">
                  <Calendar onChange={onChange} value={value} />
                </div>
                <hr className="text-gray" />
                <div className="text-left">
                  <div className="flex justify-between px-5 py-1 mt-3">
                    <p className="text-lg text-2xl">schedule</p>
                    <div className="flex items-center gap-1">
                      <button className="flex h-7 items-center border-2 border-blue-500 rounded-xl px-3 gap-2 text-center text-sm text-gray-600">
                        <FaChevronLeft className="text-blue-500" />
                        Today's
                        <FaChevronRight className="text-blue-500" />
                      </button>
                      <p className="text-lg text-2xl">+</p>
                    </div>
                  </div>
                  <div className="bg-[#f5f5ff] w-18 mx-auto my-4 rounded-7 py-2 px-2">
                    <div>
                      <p className="flex items-center gap-1">
                        <BiCalendarStar className="text-blue-500 text-lg" />
                        <strong className="text-[#f56241]">
                          UPCOMING EVENTS
                        </strong>
                      </p>
                      <p className="mt-3 text-xs ml-5">
                        <strong>Lorem Ipsum</strong>
                      </p>
                      <p className="text-xs ml-5">
                        Lorem Ipsum Lorem Ipsum Lorem
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs ml-5">
                        <strong>Task deadline</strong>
                      </p>
                      <p className="text-xs ml-5">
                        Lorem Ipsum Lorem Ipsum Lorem
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="ml-5">09:00 am</p>
                    <div className="flex justify-between items-center">
                      <p className="flex gap-1">
                        <GoDotFill className="text-red-500 text-lg" />
                        Regular Meeting
                      </p>
                      <p>
                        <CiMenuKebab className="text-lg" />
                      </p>
                    </div>
                  </div>
                  <hr className="text-gray mt-3" />
                  <div className="mt-3">
                    <p className="ml-5">09:00 am</p>
                    <div className="flex justify-between items-center">
                      <p className="flex gap-1">
                        <GoDotFill className="text-green-500 text-lg" />
                        Regular Meeting
                      </p>
                      <p>
                        <CiMenuKebab className="text-lg" />
                      </p>
                    </div>
                  </div>
                  <hr className="text-gray mt-3" />
                  <div className="mt-3">
                    <p className="ml-5">09:00 am</p>
                    <div className="flex justify-between items-center">
                      <p className="flex gap-1">
                        <GoDotFill className="text-green-500 text-lg" />
                        Regular Meeting
                      </p>
                      <CiMenuKebab className="text-lg" />
                    </div>
                  </div>
                  <p className="flex justify-between items-center text-lg">
                    <span className="text-xs ml-5">
                      Lorem Ipsum Lorem Ipsum LoremLorem Ipsum Lorem Ipsum Lorem
                      Lorem Ipsum Lorem{" "}
                    </span>
                  </p>
                  <hr className="text-gray mt-3" />
                  <div className="mt-3">
                    <p className="ml-5">09:00 am</p>
                    <div className="flex justify-between items-center">
                      <p className="flex gap-1">
                        <GoDotFill className="text-green-500 text-lg" />
                        Regular Meeting
                      </p>
                      <p>
                        {" "}
                        <CiMenuKebab className="text-lg" />
                      </p>
                    </div>
                  </div>
                  <p className="text-xs ml-5">Lorem input</p>
                </div>
              </div>
            </div>
          </div>
        ) : openMenu === "calender" ? (
          "caledar"
        ) : openMenu === "applicant" ? (
          openSubMenu === "clientInformation" ? (
            <ClientInformation />
          ) : openSubMenu === "occupation" ? (
            <Occupation />
          ) : openSubMenu === "referral" ? (
            <Referral />
          ) : openSubMenu === "representative" ? (
            <Representative />
          ) : openSubMenu === "identification" ? (
            <Identification />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dashboard;
