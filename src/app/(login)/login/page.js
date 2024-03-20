import Image from "next/image";
import Laptop3D from "../../../assets/Laptop_3d.webp";
import { FcGoogle } from "react-icons/fc";

const page = () => {
    return (
        <div className="grid grid-cols-6 h-screen bg-gray-100 w-full">
            <div className="col-span-4  w-full h-full relative">
                <img src={"https://i.ibb.co/mFVbGYX/cute-domestic-kitten-sits-window-staring-outside-generative-ai-188544-12519.jpg"} width={100} height={100} className="w-full h-full object-cover" alt="" />
                <div className="absolute h-full w-full bg-gradient-to-r from-transparent to-black top-0" />
            </div>
            <div className="col-span-2 relative bg-[#000] flex justify-center items-center flex-col">
                <div>
                    <p className="text-3xl text-white font-bold">Login to your Account</p>
                    <p className="text-xl ">See what is going on with your business</p>
                    <div className="flex items-center gap-3 justify-evenly mt-5 border-2 border-white p-3 rounded-lg">
                        <FcGoogle className="text-2xl" />
                        <p className="text-2xl">Continue with Google</p>
                    </div>

                    <div className="divider">or Sign in with Email</div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="mail@abc.com" className=" w-full outline-none bg-transparent border-2 border-white p-3 rounded-lg" />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="text" placeholder="********" className=" w-full outline-none bg-transparent border-2 border-white p-3 rounded-lg" />
                    </label>

                    <div className="bg-[#7F265B] w-full outline-none mt-5 flex justify-center items-center p-3 rounded-lg">
                        <p className="font-bold text-white text-xl">Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;