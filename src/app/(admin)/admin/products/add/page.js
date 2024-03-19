"use client";

import { useForm } from "react-hook-form";

const page = () => {
    const HandleForm = data => {
        data.preventDefault();
        console.log(data.target?.name.value);
    }

    return (
        <div className='flex justify-center items-center p-10'>
            <form className='w-3/4 bg-white rounded-xl p-10' onSubmit={HandleForm}>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product name?</span>
                    </div>
                    <input type="text" name="name" placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product type?</span>
                    </div>
                    <select className="select select-bordered w-full">
                        <option disabled selected>Choose one</option>
                        <option>Food</option>
                        <option>Toy</option>
                    </select>
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product size?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product price?</span>
                    </div>
                    <input type="text" placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">Pick a file</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full" />
                </label>

                <button type="submit" className="btn w-full mt-5">Add Product</button>
            </form>
        </div>
    );
};

export default page;