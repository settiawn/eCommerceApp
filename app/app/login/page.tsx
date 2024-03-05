"use client";
import { useState } from "react";

export default function Login() {
  const [loginTab, setLoginTab] = useState(true);
  const [registerTab, setRegisterTab] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="flex content-center items-center justify-center bg-zinc-500">
        <div className="w-100 bg-red-300 my-5  p-5">
          <div className="flex flex-row mb-2 justify-center gap-5 font-bold text-2xl">
            <div
              className="hover:cursor-pointer border w-full text-center py-2"
              onClick={() => {
                setLoginTab(true);
                setRegisterTab(false);
              }}
            >
              LOGIN
            </div>
            <div
              className="hover:cursor-pointer border w-full text-center py-2"
              onClick={() => {
                setRegisterTab(true);
                setLoginTab(false);
              }}
            >
              REGISTER
            </div>
          </div>
          {loginTab ? (
            <>
              <form className="flex flex-col pt-5" action="">
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="text"
                  placeholder="Username"
                />
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="password"
                  placeholder="Password"
                />
                <div className="mb-4 bg-blue-500 text-center font-bold text-2xl py-2">
                  <button>LOG IN</button>
                </div>
              </form>
            </>
          ) : (
            <>
              <form className="flex flex-col pt-5" action="">
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="text"
                  placeholder="Enter your name"
                />
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="text"
                  placeholder="Enter your desired username"
                />
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="email"
                  placeholder="Enter your email address"
                />
                <input
                  className="mb-4 w-96 p-2 text-black"
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="mb-4 bg-blue-500 text-center font-bold text-2xl py-2">
                  <button>REGISTER</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
