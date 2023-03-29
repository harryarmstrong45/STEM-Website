"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import PocketBase from "pocketbase";
import {FiLogOut} from "react-icons/fi";


const pb = new PocketBase("http://127.0.0.1:8090/");

export default function AccountButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const loginStatus = Cookies.get("userData");
      if (loginStatus) {
        setIsLoggedIn(true);
      }
      console.log(loginStatus)
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  const handleLogout = async (e:any) => {
    e.preventDefault();
    pb.authStore.clear()
    Cookies.remove("userData")
    setIsLoggedIn(false);
  }

  return (
    <div className="flex">
      <div className="pl-3">
        <Link href={isLoggedIn ? "Profile" : "LogIn"}>
          <CgProfile color="white" />
        </Link>
      </div>
      {isLoggedIn && <button className="pl-3 text-[35px] flex justify-center items-center" onClick={handleLogout}>
        <FiLogOut color="white"></FiLogOut>
      </button>}
    </div>
  );
}
