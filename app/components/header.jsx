import React from "react";
import Link from "next/link";
import { Lemon } from "next/font/google";
import FontAsome from "./fontAsome";
const lemon = Lemon({ subsets: ["latin"], weight: "400" });

export default function header() {
  return (
    <>
      <div className="w-full  top-0 ">
        <FontAsome />
        <div className="">
          <div className="subMina w-[85%] m-auto text-black  items-center justify-between  py-3 px-3  grid grid-cols-5">
            <div className="leftLogo col-span-2 md:col-span-1">
              <Link href={"/"} className={`  text-2xl font-bold`}>
                <span className={"text-indigo-500 "}>
                  <span>মাজা-</span>
                </span>
                ফুড{" "}
              </Link>
            </div>
            <div
              className={`middletMenu hidden col-span-2 md:col-span-2 text-gray-700 text-md md:block `}
            >
              <ul
                className={`md:flex  items-center justify-between gap-5 capitalize w-4/6 m-auto`}
              >
                <li>
                  <Link className="hover:text-indigo-700" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-indigo-700" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-indigo-700" href="/products">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-indigo-700" href="/contact">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-3 md:col-span-2  mr-1  m-auto  ">
              <div className="flex items-cener ">
                <Link
                  href="#"
                  className="hidden text-indigo-500 mx-3 w-fit bg-indigo-100 md:block rightcon transition delay-100 duration-100 ease-in-out  rounded-md px-5 text-xl py-2 "
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link
                  href="/signup"
                  className="hidden md:block rightcon transition delay-100 duration-100 ease-in-out  rounded-md px-5 border   border-1 bg-indigo-500 text-white hover:bg-indigo-700 py-2 shadow-xl "
                >
                  Sign Up{" "}
                  <i className="fa-regular fa-paper-plane text-white pl-2"></i>
                </Link>
              </div>

              <button href="#" className="md:hidden">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
