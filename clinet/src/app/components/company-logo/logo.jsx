import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src={
            "https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
          }
          alt="logo"
          width={150}
          height={50}
        />
      </Link>
    </>
  );
};

export default Logo;
