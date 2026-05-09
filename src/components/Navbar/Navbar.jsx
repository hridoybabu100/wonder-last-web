"use client";
import Image from "next/image";
import React from "react";
import Navimg from "../../../public/assets/Wanderlast-1.png";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <div className="p-6 bg-pink-300">
      <div className="flex justify-between items-center gap-6">
        <ul className="flex justify-between items-center gap-2">
          <Link
            href={"/"}
            className={`${path === "/" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>Home</li>
          </Link>
          <Link
            href={"/destination"}
            className={`${path === "/destination" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>Destinations</li>
          </Link>
          <Link
            href={"/booking"}
            className={`${path === "/booking" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>My Bookings</li>
          </Link>
          <Link
            href={"/admin"}
            className={`${path === "/admin" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>Admin</li>
          </Link>
        </ul>

        <div>
          <aside>
            <Image src={Navimg} height={10} width={100} alt="Nav-image"></Image>
          </aside>
        </div>
        <ul className="flex justify-between items-center gap-2">
          <Link
            href={"/profile"}
            className={`${path === "/profile" ? "border-b text-black font-bold border-black" : ""}`}
          >
            {" "}
            <li className="flex items-center gap-1">
              <CgProfile /> Profile
            </li>
          </Link>
          <Link
            href={"/login"}
            className={`${path === "/login" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>Login</li>
          </Link>
          <Link
            href={"/signup"}
            className={`${path === "/signup" ? "border-b text-black font-bold border-black" : ""}`}
          >
            <li>SingUp</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
