"use client";

import { logout } from "@/actions/user";

export default function LogoutButton() {
  return <button onClick={() => logout()}>LOGOUT</button>;
}
