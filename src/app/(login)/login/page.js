"use client";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "@/components/Admin/shared/ConfigFirebase";
import Swal from "sweetalert2";
import { useForm as Form } from "react-hook-form";
import AuthChecker from "@/components/hook/AuthChecker";

const page = () => {
    const Google_provider = new GoogleAuthProvider();

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, Google_provider)
            .then((result) => {
                Swal.fire({
                    icon: "success",
                    title: "Login success...",
                    text: "Login successful!",
                });

            }).catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Login faild...",
                    text: "Login faild!", errorMessage,
                });
            });
    }

    const { register, reset, handleSubmit } = Form();

    const HandleLogin = (data) => {
        signInWithEmailAndPassword(auth, data?.email, data?.password)
            .then((user) => {
                Swal.fire({
                    icon: "success",
                    title: "Login success...",
                    text: "Login successful!",
                });

                reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Login faild...",
                    text: "Login faild!", errorMessage,
                });
            })
    }

    AuthChecker();

    return (
        <div className="grid lg:grid-cols-6 h-screen bg-gray-100 w-full">
            <div className="col-span-4 hidden lg:block w-full h-full relative">
                <img src={"https://i.ibb.co/mFVbGYX/cute-domestic-kitten-sits-window-staring-outside-generative-ai-188544-12519.jpg"} width={100} height={100} className="w-full h-full object-cover" alt="" />
                <div className="absolute h-full w-full bg-gradient-to-r from-transparent to-black top-0" />
            </div>
            <div className="col-span-2 relative bg-[#000] text-white p-5 lg:0 flex justify-center items-center flex-col">
                <div>
                    <p className="lg:text-3xl text-xl text-white font-bold">Login to your Account</p>
                    <p className="lg:text-xl text-white">See what is going on with your business</p>
                    <div onClick={HandleGoogleLogin} className="flex items-center gap-3 justify-evenly mt-5 border-2 cursor-pointer border-white p-3 rounded-lg">
                        <FcGoogle className="text-2xl" />
                        <p className="lg:text-2xl text-white">Continue with Google</p>
                    </div>

                    <div className="divider text-white">or Sign in with Email</div>
                    <form onSubmit={handleSubmit(HandleLogin)}>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white">Email</span>
                            </div>
                            <input type="text" {...register('email')} placeholder="mail@abc.com" className=" w-full outline-none bg-transparent border-2 border-white text-white p-3 rounded-lg" />
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white">Password</span>
                            </div>
                            <input type="text" {...register('password')} placeholder="********" className=" w-full outline-none bg-transparent border-2 border-white p-3 text-white rounded-lg" />
                        </label>

                        <div className="bg-[#7F265B] w-full text-white outline-none mt-5 flex justify-center items-center p-3 cursor-pointer rounded-lg">
                            <button type="submit" className="font-bold text-white text-xl">Login</button>
                        </div>
                    </form>

                    <div className="w-full outline-none mt-5 flex justify-center items-center">
                        <p className="lg:text-xl text-white">Not Registered Yet?
                            <Link className="font-bold text-white cursor-pointer" href={"/register"}> Create an account</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;