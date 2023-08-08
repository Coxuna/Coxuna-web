import React, { Fragment } from 'react';
import CouxunaLogo from "../../../assets/img/couxunaLogo.png"
import BlueBgBtn from '../../../constants/BlueBgBtn';

const Navbar: React.FC = () => {
  return (
    <Fragment>
       <div className='w-full min-h-[70px] shadow-md flex justify-between items-center px-4'>
        <img className='h-12' src={CouxunaLogo} alt="CouxunaLogo" />
        <BlueBgBtn text="download app" />
      </div>
    </Fragment>
  )
}

export default Navbar;
