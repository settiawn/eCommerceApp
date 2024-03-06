"use client";
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex content-center items-center justify-center bg-gray-700">
          <div className="rounded-lg w-100 bg-gray-800 my-5 p-5">
            <div className="flex flex-row mb-2 justify-center gap-5">
              <div className="text-blue-500 w-full text-center py-2 font-bold text-4xl">
                LOGIN
              </div>
            </div>

            <form className="flex flex-col pt-5" action="">
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="email"
                type="email"
                placeholder="Email"
                required
                autoComplete="email"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="password"
                type="password"
                placeholder="Password"
                required
                autoComplete="password"
              />
              <div className="rounded-sm mb-4 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-center font-bold text-2xl py-2">
                <button>LOG IN</button>
              </div>
            </form>
            <div className="text-center font-semibold hover:text-blue-500">
              <Link href="/register">Don't have an account? Register</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
