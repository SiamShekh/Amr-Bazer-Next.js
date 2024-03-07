import Image from 'next/image';
import React from 'react';
import logo from '../../assets/logo.svg';
import Link from 'next/link';
import "../../app/globals.css";

const NavBar = () => {
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
                        <div className='text-white rounded-3xl px-5 py-3 bg-blue-900'>
                            <p>Join the community</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;