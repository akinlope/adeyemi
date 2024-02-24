import React from "react";
import homeBg from "../img/homeBg.jpg";
import adeyemi from "../img/adeyemi.jpg";
import person1 from "../img/person1.jpg";
import person2 from "../img/person2.jpg";
import Carousel from "../components/Carousel";
import { Map } from "../components/Map";

export const OurTeam = () => {
  return (
    <>
      <div
        className={`h-screen bg-cover bg-center mt-20 flex justify-center items-center`}
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className=" w-3/5 rounded-[10px] bg-gray-900  text-white">
          <div className=" p-5">
            <p className=" font-bold text-3xl pb-5">Our Team</p>

            <p className="">
              At TOPDEL Engineering Limited we have an energetic and highly
              motivated team who enjoy completing projects to the highest of
              industry standards.
            </p>

            <p className=" mt-5">
              Currently, we have a decent staff strength in our team (including
              freelancers) with a wide range of experience and skills to ensure
              we can successfully deliver on any project. Very high average
              employment duration of 7.25 years signifies the devotion,
              reliability, experience and commitment that customers can expect
              us to provide on every job we undertake.
            </p>

            <p className=" mt-5">
              At TOPDEL Engineering Limited we fully believe the adage “Your
              staff are your most important asset”. We realise that the personal
              and professional development of our team is imperative in ensuring
              the successful delivery of projects, and thus the success of our
              business. We therefore invest in our staff through comprehensive
              training programmes, mentoring and coaching. The rewards of this
              philosophy are inevitably shared with customers through increased
              satisfaction and better-quality service. <br />
              Our in-house design team provides site and master planning,
              architectural, electrical, plumbing and HVAC consultation,
              specifications and design criteria specifically tailored to your
              company’s requirements. Every project is “value-engineered” to
              meet your budget.
            </p>

            <p className=" mt-5">
              Our project management staff delivers results you can count on.
              Our field crews self-perform the following trades: masonry,
              concrete, rough and finish carpentry, electrical, plumbing, HVAC,
              interior painting and finishes.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-40">
        {/* person */}
        <div className=" flex border-b pb-10">
          <div className=" w-1/2">
            <div className="mt-5 font-bold text-center text-3xl">
              Temitope Adeyemi -CEO
            </div>
            <p className=" mt-5 text-[#71717a] p-5">
              Temitope is an Electrical Engineer by trai ning and has worked in
              various multinationals like Airtel, Ericsson amongst others. He
              enjoyed so many trainings and experiences which are relevant to
              the core services rendered by TOPDEL ENGINEERING LTD.
            </p>
            <p className="  text-[#71717a] px-5">
              Having handled so many important projects, operations and
              decisions, he became the CEO of TOPDEL ENGINEERING LTD in JAN 2010
              and has grown the company tremendously in total embrace of the
              board’s directive. Tope is a graduate of Obafemi Awolowo
              University, Ile – Ife. He is also an alumnus of Pan African
              University, Lagos Business school and a COREN Certified Engineer.
              He is the founding director of TOPDEL ENGINEERING LTD
            </p>
          </div>
          <div className=" w-1/2">
            <img className=" rounded-md" src={adeyemi} alt="mr adeyemi" />
          </div>
        </div>
        {/* person 1*/}
        <div className=" flex mt-20 border-b pb-10">
          <div className=" w-1/2">
            <img className=" rounded-md" src={person1} alt="babjide idowu" />
          </div>
          <div className=" w-1/2">
            <div className="mt-5 font-bold text-center text-3xl">
              Babajide Idowu- Director Projects
            </div>
            <p className=" mt-5 text-[#71717a] p-10">
              A seasoned Civil / Structure Engineering with experience in major
              construction projects, Supervision, Project management, Project
              Scheduling, Project Planning, Costing and Evaluation. He is also
              very proficient in the use of various computer software for
              analysis, designs and presentation. With 13 years’ experience,
              Babajide is a graduate of University of Ibadan, Oyo state. He’s a
              certified member of COREN and a corporate member of Nigeria
              Society of Engineers (NSE).
            </p>
          </div>
        </div>
        {/* person2 */}
        <div className=" flex border-b pb-10 mt-10">
          <div className=" w-1/2">
            <div className="mt-5 font-bold text-center text-3xl lg:mt-10">
              Olugbenga Asha- Chief Technical Officer.
            </div>
            <p className=" mt-5 text-[#71717a] p-5 lg:mt-10">
              Engr. Gbenga Asha is a graduate of Electrical Electronic
              Engineering from University of Lagos. He is certified by COREN and
              a corporate member of NSE. He started his career with PHCN and
              rose to become Manager Projects and implementation. He’s very
              experienced in project planning, project management and control.
            </p>
          </div>
          <div className=" w-1/2">
            <img className=" rounded-md" src={person2} alt="olugbenga asha" />
          </div>
        </div>
        {/* person3 */}
        <div className=" flex mt-20 pb-10 px-5">
          <div className=" w-1/2">
            <img className=" rounded-md" src={person1} alt="Ademola Oyede" />
          </div>
          <div className=" w-1/2">
            <div className="mt-5 font-bold text-center text-3xl">
              Ademola Oyede- Head, JV Operation & New Business
            </div>
            <p className=" mt-5 text-[#71717a] p-10">
              Ademola Oyede has a wealth experience in new business development,
              IT telecoms and logistics department, while working in Shell
              petroleum Development Company (SPDC west) and other companies
              where he worked as Community Development Officer.
            </p>
          </div>
        </div>

        <Carousel />

        <Map wid={900} hig={900} />
      </div>
    </>
  );
};
