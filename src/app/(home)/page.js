import ProductCarts from "@/components/shared/ProductCarts";
import Home_Carosul from "@/components/ui/Home_Carosul";
import Image from "next/image";
import women_dog from "../../assets/women_with_doge.svg";
import Link from "next/link";
import ProductPetCarts from "@/components/shared/ProductPetCarts";
import PatnerCard from "@/components/shared/PatnerCard";
import patner1 from "../../assets/patner1.svg";
import patner2 from "../../assets/patner2.svg";
import patner3 from "../../assets/patner3.svg";
import patner4 from "../../assets/patner4.svg";
import patner5 from "../../assets/patner5.svg";
import patner6 from "../../assets/patner6.svg";
import patner7 from "../../assets/patner7.svg";
import doge_hand from "../../assets/dog_hand.svg";
import Blog_Card from "@/components/shared/Blog_Card";
import axios_master from "@/components/hook/axios_master";

const page = async () => {

  const useAxios = axios_master();
  const products = await useAxios.get('/product');
  const dog = await useAxios.get('/dog');

  return (
    <div className="bg-white">
      {/* First Hero */}
      <Home_Carosul />
      <div className=" max-w-[1200px] mx-auto z-10 bg-white relative md:p-10 p-5">
        <div className="flex justify-between">
          <div className="text-blue-800">
            <p className="text-xs">Whats new?</p>
            <p className="font-medium md:text-xl line-clamp-1">Take a look at some of our pets</p>
          </div>
          <div>
            <Link href={'#'} className="border border-blue-950 hidden px-5 p-2 rounded-xl text-blue-800">View more</Link>
          </div>
        </div>
        {/* Section: Take a look at some of our pets */}

        <div className="grid lg:grid-cols-4 gap-5 my-5">
          {
            dog.data.map(data=> <ProductCarts data={data} key={data?._id}/> )
          }
        </div>
        {/* Section: Grid Item */}

        <div className="w-full border-2 md:hidden block my-5 border-blue-950 text-center py-2 rounded-xl text-blue-900">
          <Link href={''}>View More</Link>
        </div>

        {/* Section: Women push doge card */}
        <div className="bg-[#003459] md:h-96  rounded-2xl  lg:block relative overflow-hidden">
          <div className="h-96 w-96 absolute bg-[#002A48] z-0 rounded-3xl rotate-[28.25deg]  -bottom-20 -left-20"></div>
          <div className="md:h-[550px] w-3/4 absolute bg-[#FCEED5] z-0 rounded-full h-[700px] rotate-[70deg] md:rotate-[-25.23deg] -top-60 md:-top-24 md:-right-52"></div>

          <div className="flex justify-between md:flex-row flex-col-reverse items-center">
            <Image src={women_dog} alt="doge " className="z-10 relative -bottom-12" />
            <div className="m-auto mx-10 z-10 text-end">
              <div className="my-5">
                <p className="text-blue-950 lg:text-6xl md:text-4xl text-xs font-bold">One more friend</p>
                <p className="text-blue-950 lg:text-4xl md:text-2xl text-xs font-bold">Thousands more fun!</p>
              </div>
              <div>
                <p className="text-gray-700 text-xs font-mono">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              </div>

              <div className="flex gap-5 mt-5 items-center justify-center">
                <Link href='/view-intro' className="lg:px-5 md:px-3 p-2 text-xs line-clamp-1 bg-transparent border-2 border-blue-950 rounded-2xl text-blue-950 font-mono">View Intro</Link>

                <Link href='/view-intro' className="text-xs lg:px-5 md:px-3 p-2 border-2 bg-blue-900 rounded-2xl text-white font-mono">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Our Product Title */}
        <div className="flex justify-between my-10 items-center">
          <div>
            <p className="text-black text-xs">Hard to choose right products for your pets?</p>
            <p className="font-medium text-blue-800 md:text-xl">Our Products</p>
          </div>
          <div>
            <Link href={'#'} className="border hidden md:block border-blue-950 px-5 p-2 rounded-xl text-blue-800">View more</Link>
          </div>
        </div>

        {/* Our Product Carts */}
        <div className="grid lg:grid-cols-4 gap-5 my-5">
          {
            products.data.map(data => <ProductPetCarts data={data} key={data?._id}/>)
          }          
        </div>

        {/* Patner Title */}
        <div className="flex justify-between my-10 items-center">
          <div className=" flex gap-3 items-center">
            <p className="text-black text-xs">Proud to be part of</p>
            <p className="font-medium text-blue-800 text-xs md:text-xl">Pet Sellers</p>
          </div>
          <div>
            <p className="border border-blue-950 md:block hidden p-5 cursor-pointer rounded-xl text-blue-800">View more</p>
          </div>
        </div>
        {/* Patner */}
        <div className="grid grid-cols-4 justify-center md:grid-cols-7 gap-5 my-5">
          <PatnerCard path={patner1} />
          <PatnerCard path={patner2} />
          <PatnerCard path={patner3} />
          <PatnerCard path={patner4} />
          <PatnerCard path={patner5} />
          <PatnerCard path={patner6} />
          <PatnerCard path={patner7} />

        </div>

        {/* Doge give hand on men */}
        <div className="bg-[#003459] hidden lg:block h-80 rounded-2xl relative overflow-hidden">
          <div className="h-96 w-96 absolute bg-[#002A48] z-0 rounded-3xl rotate-[28.25deg]  -bottom-20 -right-20"></div>
          <div className="h-[550px] w-3/4 absolute bg-[#FCEED5] z-0 rounded-full  rotate-[-25.23deg] -top-24 -left-52"></div>

          <div className="flex justify-between flex-row-reverse items-center h-full">
            <Image src={doge_hand} alt="doge " className="z-10 relative h-full" />
            <div className="m-auto mx-10 z-10 text-start">
              <div className="my-5">
                <p className="text-blue-950 lg:text-5xl md:text-4xl text-2xl font-bold">One more friend</p>
                <p className="text-blue-950 lg:text-4xl md:text-2xl text-xl font-bold">Thousands more fun!</p>
              </div>
              <div>
                <p className="text-gray-700 text-xs font-mono">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
              </div>

              <div className="flex gap-5 mt-5 items-center justify-center">
                <Link href='/view-intro' className="lg:px-5 md:px-3 p-2 text-xs line-clamp-1 bg-transparent border-2 border-blue-950 rounded-2xl text-blue-950 font-mono">View Intro</Link>

                <Link href='/view-intro' className="text-xs lg:px-5 md:px-3 p-2 border-2 bg-blue-900 rounded-2xl text-white font-mono">Explore Now</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Useful pet knowledge */}
        <div className="flex justify-between my-10 items-center">
          <div>
            <p className="text-black text-xs">You already know ?</p>
            <p className="font-medium text-blue-800 md:text-xl">Useful pet knowledge</p>
          </div>
          <div>
            <Link href={'#'} className="border hidden md:block border-blue-950 px-5 p-2 rounded-xl text-blue-800">View more</Link>
          </div>
        </div>

        {/* Blog */}
        <div className="grid md:grid-cols-3 gap-3">
          <Blog_Card/>
          <Blog_Card/>
          <Blog_Card/>

        </div>
      </div>
    </div>
  );
};

export default page;