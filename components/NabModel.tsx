'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

interface Props {

    setIsOpen: Dispatch<SetStateAction<boolean>>
    
}

const NabModel = ({ setIsOpen }: Props) => {

    const [isClose, setIsClose] = useState(false);

    const handleClick = () => {

         setIsClose(!isClose);
         setIsOpen(false);
    }

    return (
        <div className={`w-[300px] h-[500px] rounded-3xl rounded-tr-none bg-indigo-200 absolute right-0 md:hidden  m-4 ${ isClose ? "hidden" : "block" }`}>
           
           <div>
           <button className="md:hidden absolute right-0 m-6 text-black" onClick={handleClick}>
            <Image
             src="/images/cross.svg"
             width={30}
             height={30}
             alt="bars"
            />
            </button>
           </div>

              <div className='font-bold text-2xl mt-[120px] flex flex-col gap-4 mx-6'>
            
                <Link 
                href="#"
                className='hover:bg-indigo-400 rounded-2xl p-6'
                >
                  HOME
                </Link>
                <Link 
                href="#"
                className='hover:bg-indigo-400 rounded-2xl p-6'
                >
                  ABOUT
                </Link>
                <Link 
                href="#"
                className='hover:bg-indigo-400 rounded-2xl p-6'
                >
                  PROJECT
                </Link>
                <Link 
                href="#"
                className='hover:bg-indigo-400 rounded-2xl p-6'
                >
                  CONTACT
                </Link>
            
           </div>

        </div>
    );
};

export default NabModel;




