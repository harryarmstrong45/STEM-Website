"use client";

import { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import Cookies from "js-cookie";
import Link from "next/link";

const pb = new PocketBase("http://127.0.0.1:8090");
const pbCollection = "user";
const inputformatText = "my-4 py-3 border-2 text-center rounded-2xl px-[60px]";
const inputformatButton = "my-4 py-3 border-2 text-center rounded-2xl w-[150px]";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any | null>(null);

  useEffect(() => {
    const storedUserData = Cookies.get("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      pb.collection(pbCollection)
        .getOne(parsedUserData.id)
        .then((data: any) => {
          setUserData(data);
          Cookies.set("userData", JSON.stringify(data));
        });
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const data = await pb
        .collection(pbCollection)
        .authWithPassword(email, password);
      setUserData(data.record);
      console.log(JSON.stringify(data.record));
      Cookies.set("userData", JSON.stringify(data.record));
    } catch (error) {
      console.error(error);
    }
  };

  console.log(userData);

  return (
    <div className="h-[calc(100vh-150px)] flex justify-center items-center">
      <form className="my-100 flex flex-col -mt-[150px] justify-center items-center" onSubmit={handleLogin}>
        <h1 className="text-4xl">Log In</h1>
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
        <button
          className={inputformatButton} 
          type="submit"
        >
          Login
        </button>
      </form>

      {userData && <div>Logged in as {userData.firstName}</div>}

      {/* <Link href="/Register">Regiser</Link> */}
    </div>
  );
}
