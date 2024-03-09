"use client";

import { useSearchParams } from "next/navigation";

export function ErrHandler() {
  const params = useSearchParams();
  const message = params.get("error");

  return (
    <>
      {message && (
        <div className="bg-red-600 text-center text-2xl py-2 animate-pulse">
          {message}
        </div>
      )}
    </>
  );
}
