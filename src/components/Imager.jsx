import React from "react";
import Image from "../images/image.webp";

const Imager = () => {
  return (
    <div
      className="imageContainer"
      style={{
        marginTop: "100px",
        width: "100%",
        height: "auto",
      }}
    >
      <img
        style={{
          width: "90%",
          borderRadius: "20px",
        }}
        src={Image}
        alt=""
      />
    </div>
  );
};

export default Imager;
