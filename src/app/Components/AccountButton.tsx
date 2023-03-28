"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import Cookies from "js-cookie";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090/");

export default function AccountButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loginStatus = Cookies.get('userData');
    if(loginStatus) {
        setIsLoggedIn(true);
    }
  }, []);

  console.log(isLoggedIn);
  console.log("cookie");
  return (
    <>
      {isLoggedIn && (
        <div>
          <Link href="LogIn">
            <CgProfile color="white" />
          </Link>
        </div>
      )}
    </>
  );
}
