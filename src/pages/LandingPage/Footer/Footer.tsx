import React, { Fragment } from 'react';
import StoreIcons from '../../../constants/StoreIcons';
import Logo from '../../../assets/img/couxunaLogo.png';
import TwitterLogo from '../../../assets/svg/twitterIcon.svg';
import TelegramLogo from '../../../assets/svg/telegramIcon.svg';
import Discord from '../../../assets/svg/discordIcon.svg';
import EmailLogo from '../../../assets/svg/emailIcon.svg';
import LinkedinLogo from '../../../assets/svg/linkedinIcon.svg';

const Footer: React.FC = () => {
  return (
    <Fragment>
      <main className="h-auto bg-[#F3F9FD] p-5 md:p-10 lg:p-20">
        <div className="flex flex-col md:flex-row justify-between mt-5 md:mt-10 pb-5 md:pb-10 items-center">
          <div className="space-y-3 md:space-y-7">
            <div className="text-blue-500 font-sans text-lg md:text-2xl font-bold">
              Download our Mobile App
            </div>
            <p className="w-full md:w-[514px] text-neutral-600 text-base md:text-xl font-medium leading-normal">
              Maximize your mining capabilities, optimize efficiency, and boost your profits.
              Download Coxuna now and unleash your mining potential.
            </p>
          </div>

          <div className="mt-5 md:mt-0">
            <StoreIcons />
          </div>
        </div>

        <div className="my-10 md:my-20">
          {/* line */}
          <div className="w-full h-[0px] border border-gray-300"></div>
          <div className="mt-5 md:mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <img className="h-10 md:h-12" src={Logo} alt="Logo" />
              <div className="flex space-x-2 md:space-x-5 items-center mt-3 md:mt-0">
                <img className="h-5 md:h-6" src={TwitterLogo} alt="Twitter" />
                <img className="h-5 md:h-6" src={TelegramLogo} alt="Telegram" />
                <img className="h-5 md:h-6" src={Discord} alt="Discord" />
                <img className="h-5 md:h-6" src={EmailLogo} alt="Email" />
                <img className="h-5 md:h-6" src={LinkedinLogo} alt="Linkedin" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-5">
              <p className="text-neutral-600 text-sm md:text-xl font-normal">
                Copyright © Coxuna 2023 | All Rights Reserved
              </p>

              <div className="flex items-center space-x-4 md:space-x-8 mt-2 md:mt-0">
                <p className="text-neutral-600 text-sm md:text-xl font-normal">Privacy Policy</p>
                <p className="text-neutral-600 text-sm md:text-xl font-normal">Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Footer;
