import React from "react";
// import {Link} from "react-router-dom";
import Link from 'next/link';

function Nav(){
    return <div className="p-4">
        <nav className=" p-4 flex justify-center items-center bg-blue-300 md:flex-row flex-col  ">

            <Link href={'/'}>
                    <a className=" m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2 >Home</h2>
                    </a>
            </Link>
            <Link href={'/menu'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>Menu</h2>
                    </a>
            </Link>
            <Link href={'/track'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>Track My Order</h2>
                    </a>
            </Link>
            <Link href={'/cart'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>My Cart</h2>
                    </a>
            </Link>
            <Link href={'/about'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>About Us</h2>
                    </a>
            </Link>
            <Link href={'/contact'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>Contact</h2>
                    </a>
            </Link>
            <Link href={'/account'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>My Account</h2>
                    </a>
            </Link>
            <Link href={'/login'}>
            <a className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4  text-center">
                        <h2>Login</h2>
                    </a>
            </Link>


        </nav>

    </div>
}

export default Nav;