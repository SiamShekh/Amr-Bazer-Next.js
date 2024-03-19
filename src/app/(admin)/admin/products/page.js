import axios_master from "@/components/hook/axios_master";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
    const useAxios = axios_master();
    const product = await useAxios.get('/product');

    return (
        <div className="p-5">
            <div className="flex justify-end items-center text-2xl my-5 text-black cursor-pointer">
                <Link href={'/admin/products/add'} className="bg-white px-5 py-1 rounded">Add</Link>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    product.data.map(data =>
                        <div key={data?._id} className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
                            <Image src={data?.photo} alt="" height={224} width={300} className=" h-56 object-cover mb-5 rounded-lg" />
                            <p className="text-blue-950 font-bold line-clamp-1">{data?.name}</p>
                            <div className="flex justify-between">
                                <p>Gene: {data?.gender}</p>
                                <p>Age: {data?.age}</p>

                            </div>
                            <p className="text-blue-950 font-bold line-clamp-1">{data?.price}</p>
                            <div className="flex gap-5 justify-center items-center text-black text-2xl cursor-pointer">
                                <p>Edit</p>
                                <p>Delete</p>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default page;