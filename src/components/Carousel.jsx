import React from "react";
// import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";
import uba from "../img/uba.png";
import fortoil from "../img/fortoil.png";
import mobil from "../img/mobil.png";
import lagos from "../img/lagos.png";
import union from "../img/union.png";

export const Carousel = () => {
  const images = [uba, fortoil, mobil, lagos, union];

  return (
    <>
    <div className=" mt-20 text-3xl font-bold text-green-500 mb-5 text-center">OUR CLIENT</div>
    <Ticker duration={100}>
      {images.map((item, index) => (
        <div key={index}>
          <img src={item} className=" mx-5" alt="" />
        </div>
      ))}
    </Ticker>
    </>
  );
};

export default Carousel;
