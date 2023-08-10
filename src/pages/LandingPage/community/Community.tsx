import React, { Fragment } from "react";

const Community: React.FC = () => {
  return (
    <Fragment>
      <main className="h-auto bg-[#181A1C]">
        <div className="flex justify-center flex-col items-center">
          <div className="justify-center flex items-center py-5 sm:py-10">
            <p className="m:text-4xl text-xl font-sans font-bold text-[#2E8AF6]">
              Join Our Growing Community!
            </p>
          </div>

          <div className="w-full px-5 sm:max-w-[805px] text-center my-5 sm:my-10 text-white text-base sm:text-xl font-bold leading-normal">
            Don't miss out on the opportunity to be a part of the Coxuna mining
            revolution.
            <br className="hidden sm:inline" />
            Join our mailing list today and take your mining journey to new
            heights.
            <br className="hidden sm:inline" />
            <br className="hidden sm:inline" />
            Sign up now to receive regular updates and valuable resources that
            will supercharge your mining experience.
          </div>

          {/* button */}
          <div className="my-5 sm:my-10 relative">
            <div className="relative">
              <input
                className="px-5 outline-none w-full  sm:w-[30rem] h-[50px] sm:h-[65px] font-sans bg-white rounded-md pr-20"
                placeholder="Enter e-mail address"
              />
              <button className="absolute mt-[5px] sm:mt-[5px] mr-[5px] sm:mr-[5px] top-0 right-0 bg-[#2E8AF6] font-custom text-xs sm:text-sm text-white rounded-md px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#2E8AA3]">
                Join now!
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Community;
