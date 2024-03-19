import axios_master from "@/components/hook/axios_master";

const page = async () => {
    const useAxios = axios_master();
    const home_data = await useAxios.get('/item/count');
    console.log("home_data:", home_data.data);
    return (
        <div className="p-10">
            <div className="grid grid-cols-4">
                <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-52 h-32 rounded-lg relative overflow-hidden p-5">
                    <p className="absolute text-9xl opacity-25">DOG</p>
                    <p className="text-4xl text-black">Dog Item: {home_data?.data?.count_dog}</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 w-52 h-32 rounded-lg relative overflow-hidden p-5">
                    <p className="absolute text-9xl opacity-25">PRODUCT</p>
                    <p className="text-4xl text-black">Products Item: {home_data?.data?.count_dog}</p>
                </div>
            </div>
        </div>
    );
};

export default page;