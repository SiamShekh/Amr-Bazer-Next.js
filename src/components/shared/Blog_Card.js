import Image from "next/image";

const Blog_Card = () => {
    return (
        <div className=" bg-gray-50 rounded-xl p-5 border border-gray-300">
            <img src={"https://i.ibb.co/z789VBb/pet-blog.png"} alt="" width={10} height={10} className="h-56 w-full object-cover mb-5 rounded-lg" />
            <p className="cursor-pointer w-fit px-3 text-white bg-green-700 rounded-badge">Pet knowledge</p>
            <p className="text-blue-950 font-bold line-clamp-2">What is a Pomeranian? How to Identify Pomeranian Dogs</p>
            <p className="text-blue-950 font-normal text-xs line-clamp-3">The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</p>
            

        </div>
    );
};

export default Blog_Card;