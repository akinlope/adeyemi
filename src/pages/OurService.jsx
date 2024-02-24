import React from "react";
import { Service } from "../components/Service";
import { serviceData } from "../helpers";
import Carousel  from "../components/Carousel"
import {Map}  from "../components/Map"

export const OurService = () => {
  return (
    <>
      <Service />

      <div className="flex flex-wrap justify-around">
        {serviceData.map((item, index) => ( 
          <div key={index} className="w-[30%] shadow-lg rounded-md border mt-10">
            <div className="w-full p-5">
              <div className=" h-40 w-80 overflow-hidden  rounded-md">
                <img
                  src={item.image}
                  alt=""
                  className=" h-full w-full object-cover"
                />
              </div>
                <div className=" text-center font-bold mt-2">{item.title}</div>
                <div className=" text-center ">{item.information}</div>
            </div>
          </div>
        ))}
      </div>

<div className=" mt-20">
<Carousel />
</div>
<Map wid={900} hig={900} />
    </>
  );
};
