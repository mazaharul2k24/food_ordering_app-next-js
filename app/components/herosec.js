import { HeroSec } from "@/lib/info";
import Image from "next/image";
import pizzalogo from "@/public/pizzalogo.png";
import { Lemon, Space_Grotesk, Anek_Bangla } from "next/font/google";
const bangla = Anek_Bangla({ subsets: ["latin"], weight: ["400", "600"] });
export default async function herosec() {
  return (
    <div className={`mainherosec  p-2 `}>
      <div className="subhero  justify-between items-center py-2 grid grid-cols-4">
        <div className="rightheroImg col-span-5 md:col-span-2  text-center ">
          <Image
            src={pizzalogo}
            width={300}
            height={300}
            className="m-auto"
            alt="Picture of the autor"
          />
        </div>
        <div className="leftHeroCon col-span-5 md:col-span-2 ">
          <div className="heroConhead">
            <h1 className="text-3xl font-bold capitalize text-black py-4">
              <p className={`${bangla.className}`}>
                {HeroSec[0].rightCon.title}
                <span className="text-indigo-500">.</span>
              </p>
            </h1>
            <p className="mb-3 pb-4 tracking-wider capitalize  leading-7">
              <span className={`${bangla.className} `}>
                {HeroSec[0].rightCon.sortDec}
              </span>
            </p>

            <div className="grid grid-cols-2 mt-4 ">
              <button
                className={`${bangla.className} mb-3 mx-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-md shadow-md text-center `}
              >
                {HeroSec[0].rightCon.orderBtn}
              </button>

              <select className=" h-[43px]  md:w-[220px] border-0  md:py-0 outline-none    px-4 rounded-xl shadow-lg">
                <option value="#">Select Your Distric</option>

                {HeroSec[0].rightCon.location.map((val) => (
                  <option key={val.length} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
