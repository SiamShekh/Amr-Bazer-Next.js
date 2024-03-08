import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <div className="bg-[#FCEED5] p-5 md:p-10">
            <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-5 rounded-xl bg-[#003459] p-5">
                <p className="lg:text-3xl md:text-xl text-sm col-span-1 font-mono text-white">Register now so you don't miss our programs</p>
                <div className="col-span-2 bg-white p-3 rounded-xl flex md:flex-row flex-col items-center gap-3">
                    <input className="outline-none w-full bg-transparent p-3 rounded-2xl border border-gray-400" placeholder="Enter your email"></input>

                    <button className="bg-[#003459] px-4 py-3 rounded-xl text-white lg:w-fit w-full">Subscribe</button>
                </div>
            </div>
            {/* 
            <div className="flex justify-between my-5">
                <div className="flex items-center text-black gap-5">
                    <Link href={''}>Home</Link>
                    <Link href={''}>Category</Link>
                    <Link href={''}>Contact</Link>
                    <Link href={''}>About</Link>
                </div>

                <div>
                    <Image src={logo} className="" alt="logo"></Image>
                </div>
            </div>
            <hr></hr> */}
            <div className="flex justify-between mt-5 md:flex-row flex-col-reverse">
                <div className="flex text-xs items-center text-black gap-5">
                    <p>© 2022 Monito. All rights reserved.</p>
                </div>

                <div className="flex gap-5 md:flex-row flex-col text-xs my-3 text-black">
                    <div className="flex gap-4">
                        <Link href={''}>Home</Link>
                        <Link href={''}>Category</Link>
                        <Link href={''}>Contact</Link>
                        <Link href={''}>About</Link>
                    </div>
                    <div className="flex gap-4">
                        <Link href={''}>Terms of Service</Link>
                        <Link href={''}>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;