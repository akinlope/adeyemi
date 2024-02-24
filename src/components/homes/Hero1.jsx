import React from "react";
import eng from "../../img/engi.jpg";
import homeBg from "../../img/homeBg.jpg";
import engineering from "../../img/engineering.jpg";
import construction from "../../img/cons.jpg";
import procurement from "../../img/procurement.jpg";
import adeyemi from "../../img/adeyemi.jpg";
import person1 from "../../img/person1.jpg";
import person2 from "../../img/person2.jpg";
import TOPDEL from "../file/TOPDEL.pdf";
import { Iso } from "../Iso";
import Carousel from "../Carousel";
import { Map } from "../Map";
import { Service } from "../Service";
import { OurTeamCard } from "../OurTeamCard";
import { ourTeamData } from "../../helpers";
import { Hero } from "./Hero";

export const Hero1 = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className=" flex mt-10 ">
        <div className=" w-1/2 mr-2 text-slate-600">
          <p>
            TOPDEL Engineering Limited is a Nigerian company offering
            comprehensive engineering and specialist services to businesses
            across various sectors.{" "}
          </p>{" "}
          <p>
            {" "}
            Established with the aim of meeting clients' business goals, TOPDEL
            has quickly proven its excellence through high-quality project
            execution.{" "}
          </p>{" "}
          <p>
            Specializing in engineering, designs & fabrication, construction &
            consulting services, haulage, and Marine Automotive Gas Oil (AGO)
            supplies, TOPDEL has the capability to handle deep-sea supplies to
            FPSOs, oil and gas, implementation, and strategy.{" "}
          </p>{" "}
          <p>
            {" "}
            With a strong focus on Nigeria's gas revolution, TOPDEL is heavily
            invested in piping and Gas pipeline construction networks
            nationwide.{" "}
          </p>{" "}
          <p>
            Our future-oriented and quality-conscious approach ensures effective
            and efficient service delivery across the country.{" "}
          </p>{" "}
          <p>
            Offering a wide range of services including project development,
            structural engineering, industrial construction, urban planning,
            water, transport, and environment, TOPDEL excels in planning and
            executing projects to required specifications, earning them national
            and international recognition. Our services are customized to meet
            the specific needs of each client.{" "}
          </p>
        </div>
        <div className=" w-1/2 ml-2">
          <img src={eng} alt="An engineer" />
        </div>
      </div>

      {/* download company profile */}
      <div className=" flex justify-center mt-20">
        <button
          onClick={() => {
            window.open(TOPDEL, "_blank");
          }}
          className="  p-2 pl-5 pr-5 rounded-[10px] bg-orange-500 font-semibold text-white"
        >
          Download Company Profile
        </button>
      </div>

      {/* mission & vission */}
      <div className=" flex mt-20 text-slate-600">
        <div className=" w-1/2 p-5">
          <div className=" flex justify-center">
            <p className=" font-bold text-3xl text-orange-500 pb-5">
              Our Mission
            </p>
          </div>
          To create, implement and achieve solutions equal to our client’s
          desires with good speed and compulsory detailing. We intend to be
          out-rightly professional in constructing and implementing our client’s
          instructions after being supported with our knowledgeable and informed
          advices.
        </div>
        <div className=" w-1/2 p-5">
          <div className=" flex justify-center">
            <p className=" font-bold text-3xl text-orange-500 pb-5">
              Our Mission
            </p>
          </div>
          To be a one stop shop for Engineering solutions and services that
          gives customers total satisfaction.
        </div>
      </div>

      {/* company objective */}
      <div
        className={`h-screen bg-cover bg-center mt-20 flex justify-center items-center text-slate-600`}
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className=" w-3/5 rounded-[10px] bg-gray-900 p-5 text-white">
          <div className=" flex justify-center">
            <p className=" font-bold text-3xl pb-5">Company Objectives</p>
          </div>
          • To promote a culture of outstanding quality service and to be
          recognized as an industry leader in the area of quality. <br />
          • To maintain, as the cornerstone of our business, the health and
          safety of our employees and the protection of the Environment. <br />
          • To actively involve and empower all employees in a continuous
          improvement process. <br />
          • To listen and respond to our customers/stakeholders and exceed their
          expectations. <br />
          • To adapt quickly and appropriately to changing business conditions
          and market opportunities. <br />
          • To hire and train Nigerians, which is an integral part of the
          company’s joint venture agreement. <br />
          • Deliver quality projects to the satisfaction of our clients. <br />
          • Deliberately manage company resources through waste avoidance and
          cost control. <br />
          • Achieve tangible results and profitability for the benefits of all
          stakeholders. <br />
        </div>
      </div>

      {/* Our Services */}
      <>
        <div className=" py-20 text-center bg-orange-500 text-white font-bold text-3xl">
          OUR SERVICES
        </div>
        <Service />
        <div className=" flex justify-end -mt-20">
          <button className="  p-2 pl-10 pr-10 rounded-[10px] bg-orange-500 font-semibold text-white">
            Read More
          </button>
        </div>
      </>

      {/* Our team */}
      <div className=" mt-[100px] h-screen">
        <div className=" text-center font-bold text-3xl text-orange-500">
          OUR TEAM
        </div>
        {/* team members */}
        <div className=" flex justify-evenly mt-10">
          {ourTeamData.map((individual) => {
            return (
              <div className=" p-4 pt-8 glass rounded-lg w-1/5">
                <div className=" flex justify-center">
                  <img
                    className=" rounded-full w-40 h-40"
                    src={individual.image}
                    alt={individual.image}
                  />
                </div>
                <div className=" font-bold text-center text-[#71717a] mt-4">
                  <p>{individual.name} </p>
                  {individual.position}
                </div>
                <div className=" flex justify-center mt-1">
                  <a
                    href={individual.link}
                    className=" p-2 bg-orange-500 text-white font-bold text-sm rounded mt-4 cursor-pointer"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ISO */}
      <div className=" -mt-[190px]">
        <Iso />
      </div>

      {/* Our clients */}
      <Carousel />

      {/* map */}
      <Map wid={900} hig={900} />
    </>
  );
};
