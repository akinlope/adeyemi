import React from "react";
import { Container } from "./Container";
import topdel from "../img/topdel.png";
import { Outlet, Link, useLocation } from "react-router-dom";

export const Header = () => {
  const loc = useLocation();
  const active = loc.pathname.split("/")[1];
  return (
    <Container>
      <div className=" mt-4 flex justify-between text-slate-700 ">
        <div className=" w-[40%] h-[50%]">
          <img src={topdel} className=" h-20" alt="topdel logo" />
        </div>

        <div className=" w-[40%] flex justify-around font-[450] items-center">
          <Link to={"/"}>
            <div
              className={`${
                active === "" && "text-orange-500"
              }  "text-orange-500} cursor-pointer hover:text-green-700`}
            >
              Home
            </div>
          </Link>
          <Link to={"/about"}>
            <div
              className={`${
                active === "about" && "text-orange-500"
              }  "text-orange-500} cursor-pointer hover:text-green-700`}
            >
              About Us
            </div>
          </Link>
          <Link to={"/team"}>
            <div
              className={`${
                active === "team" && "text-orange-500"
              }  "text-orange-500} cursor-pointer hover:text-green-700`}
            >
              Our Team
            </div>
          </Link>
          <Link to={"/service"}>
            <div
              className={`${
                active === "service" && "text-orange-500"
              }  "text-orange-500} cursor-pointer hover:text-green-700`}
            >
              Our Services
            </div>
          </Link>
          <Link to={"/contact"}>
            <div
              className={`${
                active === "contact" && "text-orange-500"
              }  "text-orange-500} cursor-pointer hover:text-green-700`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </Container>
  );
};
