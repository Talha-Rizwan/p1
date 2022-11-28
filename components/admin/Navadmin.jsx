import React from "react";
import {Link} from "react-router-dom";

function Navadmin(){
    return <div className="p-4">
        <nav className=" p-4 flex md:justify-start justify-center items-center bg-blue-300 md:flex-row flex-col  ">
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center  " to="/"> Home </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/menu"> Menu </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/track"> Track My Order </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/cart"> My Cart </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/about"> About Us </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/contact"> Contact </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/account"> My Account </Link>
        <Link className="m-2 px-4 hover:underline bg-white hover:bg-red-500 hover:text-white border-4 hover:basis-1/12 hover:text-center" to="/login"> Login </Link>
        </nav>

    </div>
}

export default Navadmin;