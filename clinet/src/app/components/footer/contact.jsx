import React from "react";

const Contact = () => {
  return (
    <div className="main flex ">
      <div className="in-logo ">
        <div className="logo">
          <img
            width="200px"
            height="150px"
            src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
            alt="inshorts"
          />
        </div>
        <div className="text ml-4">
          <div>
            <span className="text-gray2 text-[13px] leading-[16px]">
              <span className="text-gray3 font-robotoBold text-[13px] leading-[16px]">
                Inshorts
              </span>{" "}
              Pte. Ltd.
            </span>
          </div>
          <div className="text-[#808290] text-[13px] leading-[16px]">
            @<span className="text-[12px]">COPYRIGHT 2024</span>
          </div>
        </div>
      </div>
      <div className="w-px h-full bg-white"></div>

      <div className="terms border-l  border-white ml-2 pl-4">
        <div className="mb-13 ">
          <div className=" text-white font-robotoBold text-[13px] mb-4 font-light leading-[16px]">
            Contact Us
          </div>
          <a
            className=" text-white font-robotoBold text-[13px] font-light leading-[16px]"
            href="/"
          >
            <span className="">Terms & conditions</span>
            <br />
            <div>Privacy Policies</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
