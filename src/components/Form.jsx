import React from "react";

const Form = () => {
  return (
    <div className=" m-auto shadow-custom mt-[120px] rounded-[20px] pt-[70px] pb-[70px] pl-[62.5px] pr-[62.5px] lg:min-h-[441px] lg:min-w-[1170px] w-auto h-auto">
      <div className="flex gap-10 lg:gap-0 justify-between h-full xl:flex-row flex-col">

        <div className="flex flex-col text-[#505050] font-montserrat text-[18px] gap-2">
          <span className="text-[35px] font-montserrat font-bold text-[#505050]">
            Got any questions?
          </span>
          <span>Let’s discuss it over a cup of coffee.</span>
        </div>

        <div className="">
          <form className="flex flex-col w-full max-w-3xl  space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 py-2"
              />
              <input
                type="text"
                placeholder="Organization Name"
                className="flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 py-2 mt-4 md:mt-0"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 py-2"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="flex-1 border-b w-[300px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 py-2 mt-4 md:mt-0"
              />
            </div>
            

            <div className="flex gap-5 xl:flex-row flex-col lg:items-end md:flex-row md:space-x-4">

            <textarea
              placeholder="Message"
              className="border-b xl:w-[300px] lg:min-w-[150px] border-gray-300 focus:border-black outline-none text-lg placeholder-gray-400 lg:py-2 w-full"
              rows="4"
            />

            <button
                type="submit"
                className=" justify-center bg-[#00ADEE] hover:bg-sky-500 w-[143px] h-[50px] rounded-[50px] text-white text-lg font-semibold  px-6 flex items-center gap-2"
              >
                Submit <span>&rarr;</span>
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
