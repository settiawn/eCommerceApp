"use client";
import { addWishlist } from "@/actions/wishlist";

interface BtnProps {
  slug: string;
}
export default function AddToWishlistButton({ slug }: BtnProps) {
  return (
    <button
      onClick={() => {
        addWishlist(slug);
      }}
    >
      ADD TO WISHLIST
    </button>
  );
}
