import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between bg-red-500">
        <div className=" p-3 px-6 bg-cyan-300">LOGO</div>
        <div className="flex row gap-10 font-bold text-2xl bg-gray-700">
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3 px-6">
            <Link href="/">HOME</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3 px-6">
            <Link href="/products">PRODUCTS</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3 px-6">
          <Link href="/wishlist">WISHLIST</Link>
          </div>
          <div className="hover:bg-gray-800 hover:cursor-pointer p-3 px-6">
          <Link href="/login">LOGIN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
