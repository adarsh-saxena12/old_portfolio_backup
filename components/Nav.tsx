'use client'


import { useState } from "react";
import  Image  from "next/image";
import NabModel from "./NabModel";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <>
            <nav className="z-20 py-6 px-20 max-md:px-8 top-0 md:block hidden border-red-600 border-2">
                <div className="flex justify-center gap-[600px]">
                    <div className="flex gap-2 items-center font-bold">
                    <Image 
                    src="/images/profile.gif"
                    width={80}
                    height={80}
                    alt="profile"
                    className="rounded-full"
                    />

                    <h2 className="text-xl text-slate-700 hover:text-indigo-400 cursor-pointer max-md:text-sm">ADARSH SAXENA</h2>
                   </div>
                   <ul className="flex justify-end gap-20 items-center font-bold lg:text-xl sm:text-xl text-slate-800 max-md:hidden">
                      <li className="cursor-pointer hover:text-indigo-500">HOME</li>
                      <li className="cursor-pointer hover:text-indigo-500">ABOUT</li>
                      <li className="cursor-pointer hover:text-indigo-500">PROJECTS</li>
                      <li className="cursor-pointer hover:text-indigo-500">CONTACT</li>
                   </ul>
                </div>

               
            </nav>

                {
                    isOpen ? <NabModel setIsOpen={setIsOpen}/> : (
                               
            <button className="md:hidden absolute right-0 m-10" onClick={() => setIsOpen(true)}>
            <Image
             src="/images/bars.svg"
             width={30}
             height={30}
             alt="bars"
            />
            </button>
                    )

                }


             </>   
        
    );
};

export default Nav;