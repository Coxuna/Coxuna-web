import React from 'react';
import AppleStoreImg from "../assets/img/appleStore.png";
import GoogleStoreImg from "../assets/img/googleStore.png";

const StoreIcons: React.FC = () => {
  return (
    <div>
      <div className='flex space-x-5'>
        <img className='max-w-[150px] h-auto' src={AppleStoreImg} alt="appleStore" />
        <img className='max-w-[150px] h-auto' src={GoogleStoreImg} alt="googleStore" />
      </div>
    </div>
  );
};

export default StoreIcons;
