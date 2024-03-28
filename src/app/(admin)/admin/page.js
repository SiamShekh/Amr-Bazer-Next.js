import Status from "@/components/Admin/ui/dashboard/stats";
const page = () => {

    // const isUser = isUserSigned();

    // const useAxios = axios_auth({ UserUID: isUser?.uid, UserToken: isUser?.token });
    // const home_data = useAxios.get('/item/count');

    return (
        <div className="p-10">
            
            <Status/>
        </div>
    );
};

export default page;