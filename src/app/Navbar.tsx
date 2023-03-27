import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TbUpload } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="h-[75px] bg-primary w-full flex justify-between px-5 fixed">
      <div className="flex justify-center items-center">
        <Link href="/">
          <div className="">
            <Image
              src={"/STEM_LOGO.png"}
              width={70}
              height={70}
              alt={"Stem Logo"}
            />
          </div>
        </Link>
      </div>
      <div className="text-[35px] flex justify-center items-center">
        <div className="px-10">
          <Link href="/">
            <TbUpload color="white" />
          </Link>
        </div>
        <div>
          <Link href="LogIn">
            <CgProfile color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
