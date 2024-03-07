import Link from "next/link";
import dog_women from "../../assets/tree_pot.webp";
import Image from "next/image";

const Home_Carosul = () => {
    return (
        <div className="md:h-screen relative w-full bg-[#F7DBA7] rounded-b-3xl">
            <div className="w-1/3 h-2/3 blur-lg absolute bg-[#e7be72] rounded-3xl z-0 rotate-45 -top-44"></div>
            <div className="flex justify-evenly md:flex-row max-w-[1200px] mx-auto flex-col-reverse items-center h-full py-10 w-full z-10 relative">
                <div className="m-auto mx-10">
                    <div className="my-5">
                        <p className="text-blue-950 lg:text-6xl md:text-4xl text-2xl font-bold">One more friend</p>
                        <p className="text-blue-950 lg:text-4xl md:text-2xl text-xl font-bold">Thousands more fun!</p>
                    </div>
                    <div>
                        <p className="text-gray-700 text-xs font-mono">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    </div>

                    <div className="flex gap-5 mt-5 items-center justify-center">
                        <Link href='/view-intro' className="lg:p-5 md:p-3 p-2 text-xs line-clamp-1 bg-transparent border-2 border-blue-950 rounded-2xl text-blue-950 font-mono">View Intro</Link>

                        <Link href='/view-intro' className="text-xs lg:p-5 md:p-3 p-2 bg-blue-900 rounded-2xl text-white font-mono">Explore Now</Link>
                    </div>
                </div>

                <div className="w-full h-full relative">
                    <Image src={dog_women} width={900} height={600} className="md:absolute blur-sm object-cover border-4 z-20 border-black bottom-0" alt="dog with women" />
                </div>
            </div>
        </div>
    );
};

export default Home_Carosul;