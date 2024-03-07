import ProductCarts from "@/components/shared/ProductCarts";
import Home_Carosul from "@/components/ui/Home_Carosul";
import Image from "next/image";
import women_dog from "../assets/women_with_doge.svg";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white">
      <Home_Carosul />
      <div className=" max-w-[1200px] mx-auto z-10 bg-white relative p-10">
        <div className="flex justify-between">
          <div className="text-blue-800">
            <p>Whats new?</p>
            <p className="font-medium text-xl">Take a look at some of our pets</p>
          </div>
          <div>
            <p className="border border-blue-950 p-5 rounded-xl text-blue-800">View more</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 my-5">
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
          <ProductCarts />
        </div>

        <div className="bg-[#003459] h-96 rounded-2xl relative overflow-hidden">
          <div className="h-96 w-96 absolute bg-[#002A48] z-0 rounded-3xl rotate-[28.25deg] blur-3xl -bottom-20 -left-20"></div>
          <div className="h-[550px] w-3/4 absolute bg-[#FCEED5] z-0 rounded-full blur-3xl rotate-[-25.23deg] -top-24 -right-52"></div>

          <div className="flex justify-between items-center">
            <Image src={women_dog} alt="doge " className="z-10 relative -bottom-12" />
            <div className="m-auto mx-10 z-10 text-end">
              <div className="my-5">
                <p className="text-blue-950 lg:text-6xl md:text-4xl text-2xl font-bold">One more friend</p>
                <p className="text-blue-950 lg:text-4xl md:text-2xl text-xl font-bold">Thousands more fun!</p>
              </div>
              <div>
                <p className="text-gray-700 text-xs font-mono">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              </div>

              <div className="flex gap-5 mt-5 items-center justify-center">
                <Link href='/view-intro' className="lg:p-5 md:p-3 p-2 text-xs line-clamp-1 bg-transparent border-2 border-blue-950 rounded-2xl text-blue-950 font-mono">View Intro</Link>

                <Link href='/view-intro' className="text-xs lg:p-5 md:p-3 p-2 bg-blue-900 rounded-2xl text-white font-mono">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-10 items-center">
          <div className=" flex gap-3 items-center">
            <p className="text-black">Proud to be part of</p>
            <p className="font-medium text-blue-800 text-xl">Pet Sellers</p>
          </div>
          <div>
            <p className="border border-blue-950 p-5 cursor-pointer rounded-xl text-blue-800">View more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;