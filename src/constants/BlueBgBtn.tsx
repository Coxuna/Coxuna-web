import React from 'react';

interface BlueBgBtnTypes {
  text: string;
}

const BlueBgBtn: React.FC<BlueBgBtnTypes> = ({ text }) => {
  return (
    <div>
      <button className='bg-[#2E8AF6] font-custom text-sm text-white rounded-lg px-6 py-2 hover:bg-[#2E8AA3]'>
        {text}
      </button>
    </div>
  )
}

export default BlueBgBtn;
