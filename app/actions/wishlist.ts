"use server";
import { redirect } from "next/navigation";

export const addWishlist = async (slug: string) => {
  const response = await fetch("http://localhost:3000/api/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug }),
  });
  const result = await response.json();

  if (!response.ok) {
    return redirect("/wishlist?error=" + result.error);
  }

  return redirect("/wishlist");
};

export const removeWishlist = async (wishlistId: string) => {
  const response = await fetch("http://localhost:3000/api/wishlist", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wishlistId }),
  });
  const result = await response.json();

  if (!response.ok) {
    return redirect("/products?error=" + result.error);
  }

  return redirect("/products");
};
