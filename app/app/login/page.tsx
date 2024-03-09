import { LoginButton } from "@/components/bt-login";
import { FormError } from "@/components/form-error";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
  const handleLogin = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      return redirect("/login?error=" + result.error);
    }

    cookies().set("Authorization", `Bearer ${result.data.accessToken}`);

    return redirect("/wishlist");
  };

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

            <FormError />
            <form className="flex flex-col pt-5" action={handleLogin}>
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

              <LoginButton />
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
