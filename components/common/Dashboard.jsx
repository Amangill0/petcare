"use client";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import React, { useEffect, useState } from "react";
import {
  CategoryIcon,
  ChatIcon,
  CouponsIcon,
  CustomersIcon,
  DownIcon,
  HomeIcon,
  OrdersIcon,
  ProductsIcon,
  SearchIcon,
} from "./Icon";
import Image from "next/image";

const Dashboard = ({ children }) => {
  const [open, Setopen] = useState();
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);
  return (
    <div className="bg-[#F5F6FA] h-screen  overflow-hidden">
      <div className="  flex  justify-between items-center w-full mx-auto bg-white py-3 px-5 shadow-[0px_1px_4px_0px_rgba(21,34,50,0.08)] ">
        <div className=" flex w-[60%] items-center ">
          <Link
            className=" text-[#323232] mont md:text-2xl sm:text-xl max-sm:text-lg lg:text-[32px] opacity-[0.9]    "
            href="/"
          >
            Pet
            <span className=" italic  text-[#FEAE11] font-semibold ">Care</span>
          </Link>
          <div className=" max-md:hidden flex max-w-[437px] max-md:ml-8   md:ml-20 lg:ml-35 w-full  lg:h-8  px-1.5 py-1.5 rounded-lg border border-[rgba(90,96,127,0.20)] items-center  ">
            <SearchIcon />
            <input
              className=" items-center pl-1 border-none mont w-full text-sm text-[#5A607F] flex outline-none "
              type="search"
              name=""
              id=""
              placeholder="Search here..."
            />
          </div>
        </div>

        <div className=" flex w-[40%]  md:gap-4 max-md:gap-3 lg:gap-5 justify-end items-center  ">
          <ChatIcon />
          <Image
            className="  w-7 h-7 object-contain "
            src="/images/notifications.png"
            width={28}
            height={28}
            alt="notification"
          />

          <div className=" max-md:hidden flex pl-3.5 items-center gap-3  ">
            <Image
              className="  w-10 h-10 rounded-full object-contain "
              src="/images/bitmap.png"
              width={39}
              height={39}
              alt="girl"
            />
            <h2 className=" mont text-sm text-[#5A607F] ">Aliza Mathew</h2>
            <DownIcon />
          </div>
          <button onClick={() => Setopen(!open)} className="  pl-2 lg:hidden  ">
            <IoMdMenu />
          </button>
        </div>
      </div>

      {/* =====sidebar===== */}

      <div className=" flex  2xl:mx-auto w-full h-full  ">
        <div
          className={` max-w-[250px] max-lg:fixed max-lg:top-0 max-lg:left-0 z-40 transition-all duration-500  h-[1190px] ${
            open ? "max-lg:left-0" : "max-lg:left-[-115%]"
          }  w-full mt-3 pt-4 pl-4 pr-4  flex flex-col    bg-white shadow-[-1px_0px_0px_0px_#D7DBEC_inset] `}
        >
          <div className=" px-4 py-2.5 opacity-[0.7] gap-4 rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <HomeIcon />
            <h2 className=" text-[#000]  group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Dashboard
            </h2>
          </div>
          <div className=" px-4 py-2.5 gap-4 opacity-[0.7] rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <OrdersIcon />
            <h2 className=" text-[#000]  group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Orders
            </h2>
          </div>
          <div className=" px-4 py-2.5 gap-4 opacity-[0.7] rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <ProductsIcon />
            <h2 className=" text-[#000]  group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Products
            </h2>
          </div>
          <div className=" px-4 opacity-[0.7] py-2.5 gap-4 rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <CategoryIcon />
            <h2 className=" text-[#000] group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Categories
            </h2>
          </div>
          <div className=" px-4 py-2.5 gap-4 opacity-[0.7] rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <CustomersIcon />
            <h2 className=" text-[#000]  group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Customers
            </h2>
          </div>
          <div className=" px-4 py-2.5 gap-4 opacity-[0.7] rounded-lg group hover:rounded-lg hover:bg-[#0056CD] ease-in-out duration-500 transition-all flex items-center  ">
            <CouponsIcon />
            <h2 className=" text-[#000]  group-hover:text-white group-hover:font-medium  mont text-sm  ">
              Coupons
            </h2>
          </div>
          <div className=" md:hidden flex max-w-[437px] mt-6 w-full  lg:h-8  px-1.5 py-1.5 rounded-lg border border-[rgba(90,96,127,0.20)] items-center  ">
            <SearchIcon />
            <input
              className=" items-center pl-1 border-none mont w-full text-sm text-[#5A607F] flex outline-none "
              type="search"
              name=""
              id=""
              placeholder="Search here..."
            />
          </div>
          <button
            onClick={() => Setopen(!open)}
            className=" lg:hidden absolute  top-0 right-0 pt-3 pr-6 "
          >
            <IoMdMenu />
          </button>
        </div>

        <div className="w-full p-6 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
