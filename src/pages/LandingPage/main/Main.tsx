import React, { Fragment } from "react";
import StoreIcons from "../../../constants/StoreIcons";
import MobileImg from "../../../assets/svg/mobilesvg.svg"
import CircleImg from "../../../assets/svg/circle.svg"

const Main: React.FC = () => {
  return (
    <Fragment>
      <main className="h-screen bg-[#F3F9FD]">
      <div className="flex flex-col md:flex-row justify-center px-5 md:px-14 lg:px-20 items-center gap-x-10 gap-y-14 sm:gap-y-20 md:gap-y-0 lg:gap-y-0 pt-8 sm:pt-6 md:pt-10 lg:pt-20 pb-10 md:pb-10">

          {/* Order changes for mobile view */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-7 lg:space-y-7 md:w-[60%] lg:w-[50%] xl:w-[40%]">
    <div>
      <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-custom text-[#2E8AF6] font-bold">
        Unleashing the Power of Self-Pilot Mining!
      </p>
    </div>
    <div>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl font-custom font-bold text-[#4C4D4F]">
        Incentives for Creators and Users: Engage in a Cutting-Edge Ecosystem with Unparalleled Rewards!
      </p>
    </div>
    <div>
      <StoreIcons />
    </div>
  </div>

<div className="order-1 md:order-2 relative flex justify-center items-center mt-4 sm:mt-0">
    <img className="max-w-[80%] h-auto z-10" src={CircleImg} alt='circle image' />
    <img className="max-w-[80%] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" src={MobileImg} alt='mobile image' />
  </div>

        </div>
      </main>
    </Fragment>
  );
};

export default Main;
