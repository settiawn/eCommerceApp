import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function ServerProtectedComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("Authorization")?.value;
  console.log(token, "<token");

  if (!token) {
    redirect("/login?error=please%20login%20first");
  }
  return <>{children}</>;
}
