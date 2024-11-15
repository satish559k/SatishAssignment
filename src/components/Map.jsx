import React from 'react'

const Map = () => {
  return (
    <div className='mt-[120px] relative'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15076.738238651933!2d73.0070138!3d19.1433969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfeb4288ae8d%3A0x8b330290504e58fa!2sLaser%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1731685172821!5m2!1sen!2sin"
        className=" border-[0] w-full xl:h-[638px] h-[500px]"
        allowfullscreen
        loading="lazy"
        
        //referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex gap-2 flex-col absolute lg:top-[150px] lg:left-[150px] top-[10px]  left-[10px]
      bg-gradient-to-b from-[#103977]  to-[#171352] h-[230px] w-[300px] lg:h-[230px] lg:w-[400px] rounded-xl text-white p-4 shadow-md">

        <h3 className="text-[27px] font-bold mb-2">OnestopNDT</h3>
        <p className='text-[14px] lg:text-[16px] font-montserrat'>
          PAP/R/406 Rabale MIDC Near Dol Electric Company Rabale MIDC, Navi
          Mumbai - 400701.
        </p>
        <p className='text-[14px] lg:text-[16px] font-montserrat'>Landline: 022 4131 0099</p>
        <div className='flex gap-2 items-center'>

            <div className='flex  w-[30px] h-[30px] p-[7px] bg-white rounded-[40%]'>
            <img src="./assets/map.png" alt="" srcset="" />
                
            </div>

            <a href="https://maps.app.goo.gl/48T4e9hKycwggfGe8" 
            className="underline font-montserrat">
            Google Map Link
            </a>


        </div>
      </div>
    </div>
  );
}

export default Map