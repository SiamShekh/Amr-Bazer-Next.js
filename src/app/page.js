import ProductCarts from "@/components/shared/ProductCarts";
import Home_Carosul from "@/components/ui/Home_Carosul";

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
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
          <ProductCarts/>
        </div>
      </div>
    </div>
  );
};

export default page;