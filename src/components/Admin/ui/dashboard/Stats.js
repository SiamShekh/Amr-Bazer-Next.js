
import isUserSigned from "@/components/hook/isUserSigned";
import axios_auth from "@/components/hook/axios_auth";

const Status = () => {

    const isUser = isUserSigned();

    const useAxios = axios_auth({ UserUID: isUser?.uid, UserToken: isUser?.token });
    const home_data = useAxios.get('/item/count');

    return (
        <div>
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

export default Status;