import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Header.css";

function Header() {
  const currentDate = new Date();

  // Get the current hour, minute, and second
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();
  return (
    <div className="sticky top-0 bg-white z-50 grid grid-cols-12 py-3 shadow-md">
      <div className="flex col-span-4">
        {/* <hr className="w-24 bg-blue-500 h-0.5 mt-3" /> */}
        <p className="text-orange-500 font-bold text-md pl-5">
          Welcome back, username!
        </p>
      </div>
      <div className="col-span-4 flex justify-center gap-x-3">
        <div className="flex">
          <div className="times-box text-#1b569b mr-2 font-bold rounded">
            <p className="time-num">{currentHour}</p>
            <p className="time-text">HOURS</p>
          </div>
          <p className="time-num">
            <strong className="mr-2">:</strong>
          </p>
          <div className="times-box text-#1b569b mr-2 font-bold rounded">
            <p className="time-num">{currentMinute}</p>
            <p className="time-text">MINUTES</p>
          </div>
          <p className="time-num">
            <strong className="mr-2">:</strong>
          </p>
          <div className="times-box text-#1b569b  font-bold rounded">
            <p className="time-num">{currentSecond}</p>
            <p className="time-text">SECONDS</p>
          </div>
        </div>
      </div>
      <div className="header-last-div col-span-4 ">
        <div>
          <IoMdNotificationsOutline className="notification" />
        </div>
        <p className="text-gray-400">Username</p>
        <div>
          <img
            class="inline-block h-8 w-8 rounded ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <select className="dropdown">
          <option>
            <RiArrowDropDownLine />
          </option>
          <option> setting </option>
          <option> help </option>
          <option> profile </option>
          <option> other </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
