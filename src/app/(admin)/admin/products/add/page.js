"use client";

import axios_master from "@/components/hook/axios_master";
import axios from "axios";
import { useForm as form } from "react-hook-form";

const add = () => {

    const { register, handleSubmit, watch, formState: { errors } } = form();
    const useAxios = axios_master();

    const HandleForm = async (data) => {
        const image = { image: data?.productImage[0] }
        axios.post('https://api.imgbb.com/1/upload?key=ada9545006c451588ab4a5cc9b41cacb', image, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                console.log(res.data?.data?.url);
                const dataOBJ = {
                    ...data,
                    image: res.data?.data?.url
                }

                useAxios.post('/add/product', dataOBJ)
                    .then(res => {
                        console.log(res.data);
                    })
                console.log(dataOBJ);
            })
        console.log(image);

    }


    return (
        <div className='flex justify-center items-center p-10'>
            <form className='w-3/4 bg-white rounded-xl p-10' onSubmit={handleSubmit(HandleForm)}>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product name?</span>
                    </div>
                    <input type="text" {...register('productName')} name="productName" placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product type?</span>
                    </div>
                    <select name="type" defaultValue={'null'} {...register('type')} className="select select-bordered w-full">
                        <option disabled value={'null'}>Choose one</option>
                        <option>Food</option>
                        <option>Toy</option>
                    </select>
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product size?</span>
                    </div>
                    <input type="text" name="productSize" {...register('productSize')} placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">What is your product price?</span>
                    </div>
                    <input type="text" name="productPrice" {...register('productPrice')} placeholder="Type here" className="input border-0 outline-none input-bordered w-full" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text text-black">Pick a file</span>
                    </div>
                    <input type="file" name="productImage" {...register('productImage')} className="file-input file-input-bordered w-full" />
                </label>

                <button type="submit" className="btn w-full mt-5">Add Product</button>
            </form>
        </div>
    );
};

export default add;