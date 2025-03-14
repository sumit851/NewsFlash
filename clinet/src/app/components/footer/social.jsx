import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Social = () => {
  return (
    <div className="main flex items-end ">
      <div>
        <a href="">
          <FaFacebookF className=" text-2xl" />
          {"  "}
        </a>
      </div>
      <div>
        <a href="/">
          <FaTwitter className="text-2xl" />
          {"  "}
        </a>
      </div>
      <div>
        <a href="/">
          <FaLinkedin className="text-2xl" />
          {"  "}
        </a>
      </div>
    </div>
  );
};

export default Social;
