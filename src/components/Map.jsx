import React from "react";

export const Map = ({wid, hig}) => {
  return (
    <div className=" mt-20">
      <iframe
      className=" w-full rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.241673239056!2d3.3901954108398566!3d6.454296600000021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf57967e644a7%3A0x294206686c639432!2sMobolaji%20Johnson%20Place!5e0!3m2!1sen!2sng!4v1708371332722!5m2!1sen!2sng"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.681662439054!2d3.4571326739741894!3d6.434919424188496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5009ee6fbd5%3A0x4123ad11f1f5f5e!2s16b%20Babatunde%20Kuboye%20St%2C%20Lekki%20Phase%201%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1708264058016!5m2!1sen!2sng"
        width={wid}
        height={hig}
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map address"
      ></iframe>
    </div>
  );
};
