"use client"

import Button from "./Button";
import { useRouter } from "next/navigation";
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from "react";

const Projects = () => {

    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["0 1", "1.33 1"],
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


    const router = useRouter();

    return (
        <section className="pt-40 pb-40">
            <div className="flex flex-col justify-center items-center text-center mb-20">
                <h1 className="font-bold text-5xl">PROJECTS</h1>

                <span className="block bg-indigo-600 w-10 h-2 rounded-3xl mt-6"></span>

                <p className="text-2xl text-slate-600 mt-8 max-w-[1000px] p-4">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>

            {/* project - (1) */}
            <motion.div className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-20 pt-40 pb-40 p-4 bg-[#87CBB9] rounded-3xl m-10 shadow-xl" ref={ref}  
                initial={{translateX: "30px",}} 
                animate={{
                 translateX:'0px',
                }} 
                transition={{duration:0.5, ease:'easeInOut'}}>

                <motion.div 
                ref={ref}  
                initial={{translateX: "-100px",}} 
                animate={{
                 translateX:'0px',
                }} 
                transition={{duration:0.5, ease:'easeInOut'}}>
                      <img 
                      src="/images/img1.jpg" 
                      alt="project1"
                      width={600}
                      height={400}
                      className="border-4 border-orange-400 rounded-2xl h-full" 
                      
                      />
                </motion.div>
                

                <div className="flex flex-col justify-start items-start ">
                   <h1 className="font-bold text-5xl">Dopefolio</h1>
                   <p className="text-2xl text-slate-600 mt-8 max-w-[600px]">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>

                   <Button 

                   label="CASE STUDY"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center"
                   fontSize="xl"
                   onClick="/Project1"
                   />
                  
                </div>
            </motion.div>

           {/* project - (2) */}

            <div className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-20 pt-40 pb-40 p-4 bg-[#91C8E4] rounded-3xl m-10 shadow-xl">

                <div>
                      <img 
                      src="/images/img2.jpg" 
                      alt="project2"
                      width={600}
                      height={600}
                      className="border-4 border-orange-500 rounded-2xl" 
                      />
                </div>

                <div className="flex flex-col justify-start items-start ">
                   <h1 className="font-bold text-5xl">Dopefolio</h1>
                   <p className="text-2xl text-slate-600 mt-8 max-w-[600px]">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>

                   <Button 

                   label="CASE STUDY"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center"
                   fontSize="xl"
                   onClick="/Project2"
                   />
                  
                </div>
            </div>
           {/* project - (3) */}

            <div className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-20 pt-40 pb-40 p-4 bg-[#80BCBD] rounded-3xl m-10 shadow-xl">

                <div>
                      <img 
                      src="/images/img3.jpg" 
                      alt="project3"
                      width={600}
                      height={600}
                      className="border-4 border-orange-500 rounded-2xl" 
                      />
                </div>

                <div className="flex flex-col justify-start items-start ">
                   <h1 className="font-bold text-5xl">Dopefolio</h1>
                   <p className="text-2xl text-slate-600 mt-8 max-w-[600px]">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>

                   <Button 

                   label="CASE STUDY"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center"
                   fontSize="xl"
                   onClick="/Project3"
                   />
                  
                </div>
            </div>
           {/* project - (4) */}

            <div className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-20 pt-40 pb-40 p-4 bg-[#CDF5FD] rounded-3xl m-10 shadow-xl">

                <div>
                      <img 
                      src="/images/img4.jpg" 
                      alt="project4"
                      width={600}
                      height={600}
                      className="border-4 border-orange-500 rounded-2xl" 
                      />
                </div>

                <div className="flex flex-col justify-start items-start ">
                   <h1 className="font-bold text-5xl">Dopefolio</h1>
                   <p className="text-2xl text-slate-600 mt-8 max-w-[600px]">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>

                   <Button 

                   label="CASE STUDY"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center"
                   fontSize="xl"
                   onClick="/Project4"
                   />
                  
                </div>
                
            </div>
           {/* project - (5) */}

            <div className="flex md:flex-row flex-col justify-center items-center md:gap-40 gap-20 pt-40 pb-40 p-4 bg-[#9EB8D9] rounded-3xl m-10 shadow-xl">

                <div>
                      <img 
                      src="/images/img5.jpg" 
                      alt="project5"
                      width={600}
                      height={600}
                      className="border-4 border-orange-500 rounded-2xl" 
                      />
                </div>

                <div className="flex flex-col justify-start items-start ">
                   <h1 className="font-bold text-5xl">Dopefolio</h1>
                   <p className="text-2xl text-slate-600 mt-8 max-w-[600px]">Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally</p>

                   <Button 

                   label="CASE STUDY"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[300px] text-center"
                   fontSize="xl"
                   onClick="/Project5"
                   />
                  
                </div>
                
            </div>
        </section>
    );
};

export default Projects;