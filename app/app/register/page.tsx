import Link from "next/link";

export default function Register() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex content-center items-center justify-center bg-zinc-500">
          <div className="w-100 bg-red-300 my-5  p-5">
            <div className="flex flex-row mb-2 justify-center gap-5 font-bold text-2xl">
              <div className="hover:cursor-pointer border w-full text-center py-2">
                REGISTER
              </div>
            </div>

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
            <div className="text-center font-semibold">
              <Link href="/login">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
