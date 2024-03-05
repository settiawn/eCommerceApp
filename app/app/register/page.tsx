import Link from "next/link";

export default function Register() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex content-center items-center justify-center bg-gray-700">
          <div className="rounded-lg w-100 bg-gray-800 my-5 p-5">
            <div className="flex flex-row mb-2 justify-center gap-5">
              <div className="text-blue-500 w-full text-center py-2 font-bold text-4xl">
                REGISTER
              </div>
            </div>

            <form className="flex flex-col pt-5" action="">
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                type="text"
                placeholder="Enter your name"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                type="text"
                placeholder="Enter your desired username"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                type="text"
                placeholder="Enter your email address"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                type="password"
                placeholder="Enter your password"
              />
              <div className="rounded-sm mb-4 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-center font-bold text-2xl py-2">
                <button>REGISTER YOUR ACCOUNT</button>
              </div>
            </form>
            <div className="text-center font-semibold hover:text-blue-500">
              <Link href="/login">Already have an account? Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
