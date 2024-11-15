import React from "react";

const Products = () => {
  return (
    <div className="flex  mt-[120px] ml-[62.5px] mr-[62.5px]">
      <div className=" flex justify-between flex-col gap-[50px] lg:flex-row">

        <div className="relative">
          <img src="./assets/company.png" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className=" absolute mt-[-35px] ml-[25%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Companies</span>
        </div>
        <div className="relative">
          <img src="./assets/job.png" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className="absolute mt-[-35px] ml-[40%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Jobs</span>
        </div>
        <div className="relative">
          <img src="./assets/article.jpg" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className="absolute mt-[-35px] ml-[36%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Articles</span>
        </div>
        <div className="relative">
          <img src="./assets/webinar.jpg" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className="absolute mt-[-35px] ml-[30%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Webinars</span>
        </div>
        <div className="relative">
          <img src="./assets/forum.jpg" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className="absolute mt-[-35px] ml-[35%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Forums</span>
        </div>
        <div className="relative">
          <img src="./assets/application.jpeg" alt="comp" loading="lazy"
          className="lg:h-[170px] lg:w-[170px] h-[92px] w-[170px] rounded-lg object-fill"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <span className="absolute mt-[-35px] ml-[12%] text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Application Notes</span>
        </div>

      </div>
    </div>
  );
};

export default Products;
