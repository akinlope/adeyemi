import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import engineering from "../img/engineering.jpg";
import construction from "../img/cons.jpg";
import procurement from "../img/procurement.jpg";

export const Service = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  // Define the animation variants
  const variantsLeft = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 2 } },
  };

  // Start animation when in view
  if (inView1) {
    controls1.start("visible");
  }
  if (inView2) {
    controls2.start("visible");
  }
  if (inView3) {
    controls3.start("visible");
  }

  return (
    <>
      <div className=" mt-10">
        {/* card 1 */}
        <div className=" flex px-10 mb-10 border-b">
          {/* image */}
          <motion.div
            className=" w-1/2"
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={variantsLeft}
            alt="Moving Image"
          >
            <img
              className=" rounded-xl h-4/5"
              src={engineering}
              alt="An Engineer"
            />
          </motion.div>
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={variantsRight}
            alt="Moving Image"
            className=" w-1/2 p-5"
          >
            <div className="font-bold text-3xl text-[#1f2937]">
              ENGINEERING, EPC & PIPELINE
            </div>
            <div className=" font-bold text-lg text-[#1f2937]">
              Civil • Electrical • Mechanical • Marine • Feeds
            </div>
            <div className=" mt-10">
              TOPDEL Engineering Limited helps to lay the foundation of an
              engineering project with best-in-class FEED solutions for clients.
              Our combination of technical expertise and workforce delivers a
              multi-disciplinary approach to FEED and FEL work processes for
              large or small-scale engineering initiatives.
            </div>
          </motion.div>
        </div>

        {/* card 2 */}
        <div className=" flex px-10 border-b my-20">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={variantsLeft}
            alt="Moving Image"
            className=" w-1/2 p-5"
          >
            <div className="font-bold text-3xl text-[#1f2937] mt-4">
              CIVIL & MECHANICAL
            </div>
            <div className=" font-bold text-lg text-[#1f2937]">
              Drilling • Structures • Pipe Lines • Wellheads Services
            </div>
            <div className=" mt-12">
              We at TOPDEL Engineering Limited – Civil Works Services realize
              the value of total commitment to a true quality program. We have
              many fundamental quality practices in place and continue to expand
              our company and has grown through dedication – just as our
              company.
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={variantsRight}
            alt="Moving Image"
            className=" w-1/2"
          >
            <img
              className=" rounded-xl h-4/5"
              src={construction}
              alt="A Construction "
            />
          </motion.div>
        </div>

        {/* card 3 */}
        <div className=" flex px-10 mt-20">
          <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={variantsLeft}
          alt="Moving Image"
          className=" w-1/2">
            <img
              className=" rounded-xl h-4/5"
              src={procurement}
              alt="An Engineer"
            />
          </motion.div>
          <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={variantsRight}
          alt="Moving Image"
          className=" w-1/2 p-5">
            <div className="font-bold text-3xl text-[#1f2937]">
              PROCUREMENT MANAGEMENT
            </div>
            <div className=" font-bold text-lg text-[#1f2937]">
              Marine Ago Supplies • Installations • Inspections • Logistics
            </div>
            <div className=" mt-10">
              TOPDEL Engineering Limited provides innovative contract management
              and control process solutions necessary to administer purchase
              orders and subcontracts. Our procurement team brings unparalleled
              leadership and experience to developing proven supply chain
              solutions.
            </div>
          </motion.div>
        </div>
        
      </div>
    </>
  );
};
