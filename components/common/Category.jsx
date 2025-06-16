import React from "react";
import { ButtonIcon, EditIcon } from "./Icon";
import Image from "next/image";
import { CatsfoodData } from "./Helper";

const Category = () => {
  return (
    <div className="  px-2 w-full ">
      <div className=" flex py-7  justify-between items-center ">
        <h2 className=" text-[#131523] mont lg:text-xl md:text-lg max-sm:text-base xl:text-2xl font-bold  ">
          Categories
        </h2>
        <button className=" flex items-center hover:bg-[#0056CD] text-white hover:text-black group cursor-pointer duration-300 transition-all ease-in-out mont text-sm lg:text-base gap-1 py-2   max-sm:w-[140px] lg:pr-4   max-w-[174px] w-full pl-1 sm:pl-3 lg:pl-5 rounded-sm bg-[#FEAE11]  ">
          {" "}
          <ButtonIcon /> Add Category
        </button>
      </div>

      <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:gap-4  max-lg:gap-4 xl:gap-6.5  ">
        {CatsfoodData.map((item, index) => (
          <div
            key={index}
            className="relative rounded-md  group  max-lg:mx-auto w-full bg-white flex flex-col items-center justify-center shadow-[0px_1px_4px_0px_rgba(21,34,50,0.08)]"
          >
            {/* Edit button - appears on hover with shadow */}
            <button className="absolute  top-25 right-35 z-50 hidden group-hover:flex items-center justify-center gap-1 px-3 py-2 text-sm text-[#0056CD] bg-white border border-[rgba(6,73,124,0.1)] rounded-sm shadow-md transition-all duration-300 ease-in-out">
              <EditIcon /> Edit
            </button>

            {/* Hover image (optional replacement) */}
            <Image
              className="absolute top-0 left-0 hidden group-hover:block w-full h-[240px] rounded-t-md z-10"
              src={item.hoverimg}
              width={359}
              height={240}
              alt="catfood-hover"
            />

            {/* Main image */}
            <Image
              className="w-full  object-contain xl:h-[240px] rounded-t-md"
              src={item.img}
              width={359}
              height={240}
              alt="catfood"
            />

            <h2 className=" pt-2 mont text-[#131523] lg:text-base xl:text-xl font-medium pb-1">
              {item.about}
            </h2>
            <h3 className="mont md:text-sm lg:text-base pb-5 text-[#5A607F]">
              {item.food}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
