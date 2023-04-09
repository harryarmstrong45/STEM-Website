"use client";

import { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import Cookies from "js-cookie";
import Link from "next/link";
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router'

const pb = new PocketBase("http://127.0.0.1:8090");
const pbCollection = "user";
const inputformatText = "my-4 py-3 border-2 text-center rounded-2xl px-[60px]";
const inputformatButton =
  "my-4 py-3 border-2 text-center rounded-2xl w-[150px]";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any | null>(null);
  

  useEffect(() => {
    const storedUserData = Cookies.get("userData");
    console.log(userData);
    if (storedUserData) {
      pb.authStore.loadFromCookie(storedUserData || "");
      pb.collection(pbCollection).authRefresh();
    }
  }, []);

  pb.authStore.onChange((auth) => {
    // console.log("authStore changed ", auth)
    Cookies.set("userData", pb.authStore.exportToCookie());
    setUserData(pb.authStore.model);
  });

  const handleLogin = async (e: any) => {
    // const router = useRouter()
    e.preventDefault();
    try {
      pb.collection(pbCollection).authWithPassword(email, password);
      // router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  
  console.log(userData);
  
  return (
    <>
      <head>
        <title>Log In</title>
      </head>
      <div className="h-[calc(100vh-150px)] flex justify-center items-center">
        <div>
          <form
            className="my-100 flex flex-col -mt-[150px] justify-center items-center"
            onSubmit={handleLogin}
          >
            <div className="text-4xl border-b-2 w-full pb-2">Log In</div>
            <input
              className={inputformatText}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={inputformatText}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={inputformatButton} type="submit">
              Login
            </button>
          </form>

          {/* <Link href="/Register">Regiser</Link> */}
          <div className="mt-6">
            <h1>Don&apos;t have an account?</h1>
            <br></br>
            <a
              className="text-NormalLink hover:text-HoveredLink hover:underline hover:font-bold font-semibold"
              href="./CreateAccount"
            >
              <h1>Create One</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
