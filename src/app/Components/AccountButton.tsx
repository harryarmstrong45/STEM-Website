"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import PocketBase from "pocketbase";

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
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <Link href={isLoggedIn ? "Profile" : "LogIn"}>
          <CgProfile color="white" />
        </Link>
      </div>
    </>
  );
}
