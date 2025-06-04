"use client";

import axios from "axios";
import Link from "next/link";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Profilepage() {
  const router = useRouter();
  const [data, setData] = useState("");
  const logOut = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout Error");
    }
  };
  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data.data);
    setData(res.data.data.username);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="text-2xl rounded bg-orange-500 text-black">
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logOut}
        className="bg-red-700 rounded mt-4 text-white text-xl font-medium p-2 cursor-pointer active:bg-red-500"
      >
        Log out
      </button>
      <button
        onClick={getUserDetails}
        className="bg-blue-700 rounded mt-4 text-white text-xl font-medium p-2 cursor-pointer active:bg-red-500"
      >
        Getuser deatils
      </button>
    </div>
  );
}
