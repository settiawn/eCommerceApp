"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex content-center items-center justify-center bg-zinc-500">
          <div className="w-100 bg-red-300 my-5  p-5">
            <div className="flex flex-row mb-2 justify-center gap-5 font-bold text-2xl">
              <div className="border w-full text-center py-2">LOGIN</div>
            </div>

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
            <div className="text-center font-semibold">
              <Link href="/register">Don't have an account? Register</Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
