"use client";

import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.svg';
import Link from 'next/link';
import "../../app/globals.css";
import isUserSigned from '../hook/isUserSigned';
import { signOut } from 'firebase/auth';
import auth from '../Admin/shared/ConfigFirebase';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user } = isUserSigned();

    const HandleLogout = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logout success...",
                    text: "Logout successful!",
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Logout faild...",
                    text: "Logout faild!", errorMessage,
                });
            })
    }
    return (
        <div className=''>
            <div className='fixed top-0 w-full p-5 z-50 nav'>
                <div className='flex gap-5 justify-between'>
                    <Image src={logo}
                        width={100}
                        height={100}
                        alt='logo'
                    />

                    <div className='md:flex hidden  gap-5 items-center text-blue-900 font-medium'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/category'}>Category</Link>
                        <Link href={'/contact'}>Contact</Link>
                        <Link href={'/about'}>About</Link>
                    </div>

                    <div className='lg:flex hidden gap-5 items-center'>
                        <div className='bg-white rounded-3xl '>
                            <input className='input bg-white border border-gray-400' placeholder='search'></input>
                        </div>
                        <div className='text-white rounded-3xl px-5 py-3 bg-blue-900 cursor-pointer'>
                            {
                                user?.uid ?
                                    <p onClick={HandleLogout}>Log out</p> :
                                    <Link href={'/login'}>Sign in</Link>

                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;