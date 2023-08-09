import React, { Fragment } from 'react'
import TwoPhones from "../../../assets/svg/2phones.svg"

const Section: React.FC = () => {
  return (
    <Fragment>
         <main className=" h-auto bg-gradient-to-br from-pink-500 to-purple-600">
         <img 
       className="animate-custom-bounce max-w-[70%]"
         src={TwoPhones} alt="two phones"/>

         {/* text  */}
         <div>
            <div className='md:w-[60%] lg:w-[50%] xl:w-[40%]'> 
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFC700] font-bold font-sans'>Embrace SocialFi with Coxuna: Redefining Social Finance</p>
            </div>
         </div>
      </main>
    </Fragment>
  )
}

export default Section