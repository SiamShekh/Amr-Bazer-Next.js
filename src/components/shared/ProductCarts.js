import Image from "next/image";
import dog from "../../assets/dog1.svg";

const ProductCarts = ({data}) => {
    return (
        <div className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
            <img src={data?.photo} blurDataURL={`data:${data?.photo}`} alt="" height={224} width={300} className=" h-56 object-cover mb-5 rounded-lg"/>
            <p className="text-blue-950 font-bold line-clamp-1">{data?.name}</p>
            <div className="flex justify-between">
                <p>Gene: {data?.gender}</p>
                <p>Age: {data?.age}</p>

            </div>
            <p className="text-blue-950 font-bold line-clamp-1">{data?.price}</p>

        </div>
    );
};

export default ProductCarts;