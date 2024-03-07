import Image from "next/image";
import petFood from "../../assets/pet1.svg";

const ProductPetCarts = () => {
    return (
        <div className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
            <Image src={petFood} alt="" className="h-56 w-full object-cover rounded-lg" />
            <p className="text-blue-950 font-bold mt-5 line-clamp-1">MO231 - Pomeranian White</p>
            <div className="flex justify-between">
                <p>Product: Toy</p>
                <p>Size: 385gm</p>

            </div>
            <p className="text-blue-950 font-bold line-clamp-1">6.900.000 VND</p>

        </div>
    );
};

export default ProductPetCarts;