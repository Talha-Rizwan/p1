import React from "react";
// import logo from "./panda.jpeg"
function Header(){
    return <div className="p-4">
        <header className=" font-bold bg-red-500 cursor-pointer hover:shadow-md flex justify-center  overflow-hidden items-center ">
            <h1 className=" md:text-9xl sm:text-4xl p-20 text-white">fastPanda</h1>
            {/* <img className="object-scale-down h-1/3 w-1/6" src={logo} alt="Logo" /> */}
        </header>
    </div>
}

export default Header;