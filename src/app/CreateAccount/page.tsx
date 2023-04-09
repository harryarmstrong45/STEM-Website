"use client";

import React from "react";
import { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import Cookies from "js-cookie";
import Link from "next/link";
import Head from "next/head";

const pb = new PocketBase("http://127.0.0.1:8090");
const pbCollection = "user";
const inputformatText = "my-2 py-3 border-2 text-center rounded-2xl px-[60px]";
const inputformatButton =
  "my-4 py-3 border-2 text-center rounded-2xl w-[150px]";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [studentNumber, setStudentNumber] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      emailVisibility: true,
      password: password,
      passwordConfirm: password,
      firstName: firstname,
      lastName: lastname,
      studentNumber: studentNumber,
    };

    try {
      const record = await pb.collection(pbCollection).create(data);
      console.log("User created:", record);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <title>Create Account</title>
      </div>
      <div className="h-[calc(100vh-150px)] flex justify-center items-center">
        <form
          className="my-100 -mt-[80px] flex flex-col justify-center items-center"
          onSubmit={handleRegister}
        >
          <div className="text-4xl border-b-2 w-full pb-2">Create Account</div>
          <input
            className={inputformatText}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className={inputformatText}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={inputformatText}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputformatText}
            type="text"
            placeholder="Fist Name"
            value={firstname}
            onChange={(e) => setFName(e.target.value)}
          />
          <input
            className={inputformatText}
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLName(e.target.value)}
          />
          <input
            className={inputformatText}
            type="text"
            placeholder="Student Number"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
          />
          <button className={inputformatButton} type="submit">
            Register
          </button>
          <div className="mt-6">
            <h1>Already have an account?</h1>
            <br></br>
            <a
              className="text-NormalLink hover:text-HoveredLink hover:underline hover:font-bold font-semibold"
              href="./LogIn"
            >
              <h1>Log In</h1>
            </a>
          </div>
        </form>
      </div>
    </>
  );
}