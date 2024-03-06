import { RegisterButton } from "@/components/bt-register";
import { FormError } from "@/components/form-error";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const handleRegister = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      return redirect("/register?error=" + result.error);
    }

    return redirect("/login");
  };

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

            < FormError />

            <form className="flex flex-col pt-5" action={handleRegister}>
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                autoComplete="name"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="username"
                type="text"
                placeholder="Enter your desired username"
                required
                autoComplete="username"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                autoComplete="email"
              />
              <input
                className="mb-4 w-96 p-2 text-white bg-gray-500 rounded-sm"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="password"
              />
              
              < RegisterButton />
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
