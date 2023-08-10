import React, { Fragment } from "react";
import TwoPhones from "../../../assets/svg/2phones.svg";
import Tape from "../../../assets/svg/yellowTape.svg";

const Section: React.FC = () => {
  return (
    <Fragment>
      <main className="pb-14 bg-gradient-to-br from-pink-500 to-purple-600">
        <section className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10">
          <div className="md:w-1/2 md:mr-10 text-center md:text-right">
            <img
              className="animate-custom-bounce max-w-full md:max-w-md lg:max-w-full mx-auto md:mx-0"
              src={TwoPhones}
              alt="two phones"
            />
          </div>

          <div className="flex flex-col justify-center md:w-1/2">
            <div className="w-full md:max-w-md mx-auto md:ml-0 font-sans text-center md:text-right">
              <span className="text-yellow-400 text-2xl md:text-4xl font-bold">
                Embrace SocialFi with Coxuna:
              </span>
              <span className="text-white text-2xl md:text-4xl font-bold">
                Redefining Social Finance
              </span>
              <div className="flex justify-center md:justify-end">
                <img src={Tape} alt="tape" />
              </div>
            </div>

            <div className="mt-4 md:mt-8 mx-auto md:mx-0 font-sans text-white text-base md:text-xl font-black leading-normal">
              Introducing Coxuna, the innovative platform that fuses the best
              of social media and decentralized finance (DeFi) – SocialFi!
              <br />
              <br />
              Unleash the power of SocialFi to monetize your content, enjoy
              complete control, and be part of a thriving community.
              <br />
              <br />
              Join Coxuna now and revolutionize the way you engage in social
              finance.
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Section;
