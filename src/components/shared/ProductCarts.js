import Image from "next/image";
import dog from "../../assets/dog1.svg";

const ProductCarts = () => {
    return (
        <div className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
            <Image src={dog} alt="" className="h-56 w-full object-cover mb-5 rounded-lg"/>
            <p className="text-blue-950 font-bold line-clamp-1">MO231 - Pomeranian White</p>
            <div className="flex justify-between">
                <p>Gene: Male</p>
                <p>Age: 2 months</p>

            </div>
            <p className="text-blue-950 font-bold line-clamp-1">6.900.000 VND</p>

        </div>
    );
};

export default ProductCarts;