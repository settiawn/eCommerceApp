"use client";
import { useFormStatus } from "react-dom";

export function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <div className="rounded-sm mb-4 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-center font-bold text-2xl py-2">
          <button type="submit" aria-disabled={pending}>
            Loading...
          </button>
        </div>
      ) : (
        <div className="rounded-sm mb-4 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 text-center font-bold text-2xl py-2">
          <button>REGISTER YOUR ACCOUNT</button>
        </div>
      )}
    </>
  );
}
