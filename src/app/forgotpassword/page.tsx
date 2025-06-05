"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function ForgotPassword() {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [confrmPassword, setConfrmPassword] = React.useState("");

  const onSubmit = () => {
    try {
      if (password !== confrmPassword) {
        setPassword("");
        setConfrmPassword("");
        toast.error("Password not matched");
      } else {
        toast.success("Password Changed successfully");
        router.push("/login");
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <label htmlFor="password">New password</label>
      <input
        type="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white text-black"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="new password"
      />
      <label htmlFor="password">Confirm password</label>
      <input
        type="password"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white text-black"
        value={confrmPassword}
        onChange={(e) => {
          setConfrmPassword(e.target.value);
        }}
        placeholder="confirm password"
      />

      <button
        onClick={onSubmit}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Submit
      </button>
    </div>
  );
}
