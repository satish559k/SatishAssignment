import React from "react";

const Footer = () => {
  return (
    <div className=" w-full pb-10 mt-[90px] lg:mt-[120px] bg-gradient-to-b from-[#103977]  to-[#171352]">
      <div className="flex flex-col gap-5  ml-[62.5px] mr-[62.5px] mt-[62px]">

        <div className="flex justify-center lg:justify-end mt-[50px]">
            <img
            src="./assets/fotterLogo.png"
            alt="logo"
            className="flex w-[170px] h-[76px] "
            />
        </div>
        

        <div className="h-[0.5px] bg-[#A6A6A6]"></div>

        <span className="font-montserrat text-white text-[16px]">What is One Stop NDT?</span>

      </div>
    </div>
  );
};

export default Footer;
