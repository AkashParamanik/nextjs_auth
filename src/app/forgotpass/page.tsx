"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [confrmPassword, setConfrmPassword] = React.useState("");
  //   const [confrmPassword, setConfrmPassword] = React.useState("");

  const onSubmit = async () => {
    try {
      const res = await axios.post("/api/users/forgotpass", email);
      console.log(res);

      toast.success("Verification email sent");
      setShow(true);
    } catch (error: any) {
      console.error(" error:", error.response?.data || error.message);
      toast.error("user doesn't exists");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <label htmlFor="password">Enter email</label> */}
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white text-black"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter email"
      />

      {!show && (
        <button
          onClick={onSubmit}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Send verification mail
        </button>
      )}

      {show && (
        <div className="flex flex-col items-center justify-center py-2">
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
      )}
    </div>
  );
}
