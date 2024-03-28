import Image from "next/image";
import petFood from "../../assets/pet1.svg";

const ProductPetCarts = ({data}) => {
    return (
        <div className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
            <Image src={data?.photo} alt="" blurDataURL={`data:${data?.photo}`} width={300} height={224} className="h-56 w-full object-cover rounded-lg" />
            <p className="text-blue-950 font-bold mt-5 line-clamp-1">{data?.name}</p>
            <div className="flex justify-between">
                <p>Product: {data?.type}</p>
                <p>Size: {data?.size}</p>

            </div>
            <p className="text-blue-950 font-bold line-clamp-1">{data?.price}</p>

        </div>
    );
};

export default ProductPetCarts;