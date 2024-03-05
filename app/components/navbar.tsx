import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-gray-500">
        <div className="flex flex-row pl-2">
          <img
            src="https://j-novel.club/static/logo-book-2x.png"
            alt=""
            className="h-14"
          />
          <img
            src="https://j-novel.club/static/logo-text-2x.png"
            alt=""
            className="h-14"
          />
        </div>
        <div className="flex row gap-1 font-bold text-2xl">
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3">
            <Link href="/">HOME</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3">
            <Link href="/products">PRODUCTS</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3">
            <Link href="/wishlist">WISHLIST</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3">
            <Link href="/login">LOGIN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
