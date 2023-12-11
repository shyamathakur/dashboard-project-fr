import React from "react";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { RiPresentationFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { SiHelpscout } from "react-icons/si";
import { FaBagShopping } from "react-icons/fa6";
import { HiOutlineIdentification } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

function Sidenav({ openMenu, setOpenMenu, openSubMenu, setOpenSubMenu }) {
  console.log("first---", openMenu);
  return (
    <div className="w-60 h-screen bg-gradient-to-b from-[#1b3973] to-[#1c8be7] py-5 pl-2 flex flex-col justify-between">
      <div className="">
        <p
          onClick={() => setOpenMenu("dashboard")}
          className={`text-sm ${
            openMenu === "dashboard" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3 items-center rounded-l-full cursor-pointer`}
        >
          <FiHome />
          Dashboard
        </p>
        <p
          onClick={() => setOpenMenu("files")}
          className={`text-sm ${
            openMenu === "files" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer my-2`}
        >
          <VscFileSubmodule /> Files
        </p>
        <p
          onClick={() => setOpenMenu("reports")}
          className={`text-sm ${
            openMenu === "reports" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer my-2`}
        >
          <FiFileText /> Reports
        </p>
        <p
          onClick={() => setOpenMenu("calendar")}
          className={`text-sm transition duration-300 ease-linear ${
            openMenu === "calendar" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
        >
          <IoCalendarNumberOutline /> Calendar
        </p>
        <p
          onClick={() => setOpenMenu("applicant")}
          className={`text-sm transition duration-300 ease-linear text-white flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
        >
          <FaFolder /> Applicant{" "}
          {openMenu === "applicant" ? (
            <IoIosArrowDropdownCircle className="h-5 w-5" />
          ) : (
            <IoIosArrowDropupCircle className="h-5 w-5" />
          )}
        </p>

        {openMenu === "applicant" ? (
          <div className="pl-8">
            <p
              onClick={() => setOpenSubMenu("clientInformation")}
              className={`text-sm transition duration-300 ease-linear ${
                openSubMenu === "clientInformation"
                  ? "bg-white text-black"
                  : "text-white"
              }    flex pl-4 py-2 gap-x-2  items-center rounded-l-full cursor-pointer mt-2`}
            >
              <IoIosInformationCircle /> Client Information
            </p>
            <p
              onClick={() => setOpenSubMenu("identification")}
              className={`text-sm transition duration-300 ease-linear ${
                openSubMenu === "identification"
                  ? "bg-white text-black"
                  : "text-white"
              }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
            >
              <HiOutlineIdentification /> Identification
            </p>
            <p
              onClick={() => setOpenSubMenu("occupation")}
              className={`text-sm transition duration-300 ease-linear ${
                openSubMenu === "occupation"
                  ? "bg-white text-black"
                  : "text-white"
              }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
            >
              <FaBagShopping /> Occupation
            </p>
            <p
              onClick={() => setOpenSubMenu("representative")}
              className={`text-sm transition duration-300 ease-linear ${
                openSubMenu === "representative"
                  ? "bg-white text-black"
                  : "text-white"
              }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
            >
              <RiPresentationFill /> Representative
            </p>
            <p
              onClick={() => setOpenSubMenu("referral")}
              className={`text-sm transition duration-300 ease-linear ${
                openSubMenu === "referral"
                  ? "bg-white text-black"
                  : "text-white"
              }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer mt-2`}
            >
              <FaUsers /> Referral
            </p>
          </div>
        ) : null}
      </div>
      <div className=" h-full flex flex-col justify-end">
        <p
          onClick={() => setOpenMenu("setting")}
          className={`text-sm ${
            openMenu === "setting" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer my-1`}
        >
          <IoSettingsOutline /> Setting
        </p>
        <p
          onClick={() => setOpenMenu("help")}
          className={`text-sm ${
            openMenu === "help" ? "bg-white text-black" : "text-white"
          }    flex px-4 py-2 gap-x-3  items-center rounded-l-full cursor-pointer my-1`}
        >
          <SiHelpscout /> Help
        </p>
      </div>

      {/* right here all code for side menu */}
    </div>
  );
}

export default Sidenav;
