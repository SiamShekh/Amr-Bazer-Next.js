'use client';

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "@/components/Admin/shared/ConfigFirebase";
import Swal from "sweetalert2";
import isUserSigned from "@/components/hook/isUserSigned";
import AuthChecker from "@/components/hook/AuthChecker";
import { useForm as Form } from "react-hook-form";

const page = () => {

    const Google_provider = new GoogleAuthProvider();

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, Google_provider)
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Register success...",
                    text: "Register successful!",
                });

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Register faild...",
                    text: "Register faild!", errorMessage,
                });
            });
    }

    const { register, reset, handleSubmit } = Form();

    const HandleRegister = (data) => {
        createUserWithEmailAndPassword(auth, data?.email, data?.password)
            .then((user) => {
                Swal.fire({
                    icon: "success",
                    title: "Register success...",
                    text: "Register successful!",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Register faild...",
                    text: "Register faild!", errorMessage,
                });
            })
    }

    AuthChecker();


    return (
        <div className="grid lg:grid-cols-6 h-screen bg-gray-100 w-full">
            <div className="col-span-4 hidden lg:block w-full h-full relative">
                <img src={"https://i.ibb.co/SwSG70Z/front-view-cute-dog-standing-23-2148423724.jpg"} width={100} height={100} className="w-full h-full object-cover" alt="" />
                <div className="absolute h-full w-full bg-gradient-to-r from-transparent to-black top-0" />
            </div>
            <div className="col-span-2 relative bg-[#000] text-white p-5 lg:0 flex justify-center items-center flex-col">
                <div>
                    <p className="lg:text-3xl text-xl text-white font-bold">Register to your Account</p>
                    <p className="lg:text-xl text-white">See what is going on with your business</p>
                    <div onClick={HandleGoogleLogin} className="flex items-center gap-3 justify-evenly mt-5 border-2 border-white p-3 rounded-lg cursor-pointer">
                        <FcGoogle className="text-2xl" />
                        <p className="lg:text-2xl text-white">Continue with Google</p>
                    </div>

                    <div className="divider text-white">or Sign up with Email</div>
                    <form onSubmit={handleSubmit(HandleRegister)}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white">Email</span>
                            </div>
                            <input type="text" {...register('email')} placeholder="mail@abc.com" className=" w-full text-white outline-none bg-transparent border-2 border-white p-3 rounded-lg" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white">Password</span>
                            </div>
                            <input type="text" {...register('password')} placeholder="********" className=" w-full text-white outline-none bg-transparent border-2 border-white p-3 rounded-lg" />
                        </label>

                        <div className="bg-[#7F265B] w-full outline-none mt-5 flex justify-center items-center p-3 rounded-lg">
                            <button type="submit" className="font-bold w-full h-full text-white text-xl">Register</button>
                        </div>
                    </form>

                    <div className="w-full outline-none mt-5 flex justify-center items-center">
                        <p className="lg:text-xl text-white">Already have account?
                            <Link className="font-bold text-white " href={"/login"}> Login</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;