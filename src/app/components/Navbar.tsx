import React from "react";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="bg-sky-800 h-25 w-full flex justify-evenly items-center px-8">
            {/* Logo */}
            <div className="flex items-center space-x-4 ">  {/* Aligns the logo lower */}
                <Image 
                    src="/images/logo.png"  // Replace this with the path to your logo
                    alt="Logo" 
                    height={120}
                    width={80}
                    className="h-20 mr-5 w-auto relative -bottom-10 z-[1000]" 
                />
            </div>

            {/* Subtitle */}
            <div className="text-teal-100 text-lg  font-extrabold">
                Tution Free Education Program On Latest <br />Technologies
            </div>

            {/* Nav Links */}
            <ul className="flex space-x-6">
                <li className="text-white font-medium hover:text-green-500 cursor-pointer">
                    Home
                </li>
                <li className="text-white font-medium hover:text-green-500 cursor-pointer">
                    Apply
                </li>
                <li className="text-white font-medium hover:text-green-500 cursor-pointer">
                    Jobs
                </li>
                <li className="text-white font-medium hover:text-green-500 cursor-pointer">
                    Result
                </li>
                <li className="text-white font-medium hover:text-green-500 cursor-pointer">
                    Courses
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
