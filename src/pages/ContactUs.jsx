import React from "react";
import { Map } from "../components/Map";

export const ContactUs = () => {
  return (
    <>
      <div className=" flex mt-10 -mb-10">
        <div className=" w-1/2 text-slate-600">
          <div>
            3B, Mobolaji Johnson <br />
            Marwa, Lekki -Ajah Expressway <br />
            Lekki Phase I 106104, Lekki, Lagos. <br />
            Email: info@topdel-engr.com <br />
            Tel no: 08022224114 <br />
            www.topdel-engr.com <br />
          </div>
          <div className=" -mt-16">
            <Map wid={100} hig={300} />
          </div>
        </div>
        <div className=" w-1/2 px-14">
          <p className=" font-bold font-roboto text-slate-700">Leave us a message</p>
          <input
            placeholder="Full Name"
            type="text"
            className=" w-full border p-2  rounded-md mt-5 focus:border-orange-500 focus:outline-none"
          />
          <input
            placeholder="Email Address"
            type="email"
            className=" w-full border p-2  rounded-md mt-5 focus:border-orange-500 focus:outline-none"
          />
          <input
            placeholder="Phone number"
            type="number"
            className=" w-full border p-2  rounded-md mt-5  focus:border-orange-500 focus:outline-none       [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <textarea
            placeholder="Enter Message..."
            type="text"
            className=" w-full border p-2  rounded-md mt-5 focus:border-orange-500 focus:outline-none"
            rows={6}
            style={{ resize: "none" }}
          />
          <button className=" w-full border p-2  rounded-md mt-5 font-bold bg-orange-500 text-white">
            Send
          </button>
        </div>
      </div>
    </>
  );
};
