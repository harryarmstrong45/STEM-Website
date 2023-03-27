import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TbUpload } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export const Footer = () => {
  return (
    <div className="h-[75px] bg-primary w-full flex justify-between px-5 bottom-0">
      <h1 className="text-white py-5 font-Montserrat">©LCC/UCL 2023</h1>
      <br></br>
      <h1 className="text-white py-5 font-Montserrat">Leeds City College is a member of Luminate Education Group</h1>

    </div>
  );
};
