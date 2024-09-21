import Button from "./Button";
import SideBar from "./SideBar";

const Hero = () => {
    return (
        <>
            <SideBar />
        <section className="flex flex-col justify-center items-center gap-20 bg-[url('/images/hero-pattern.svg')] pb-[300px] pt-[360px] md:-mt-[128px]">
         
            <h1 className="font-bold md:text-7xl text-5xl text-center">HEY, I'M ADARSH SAXENA 
            </h1>

            <p className="text-slate-800 md:text-3xl max-w-[1000px] text-center text-xl px-4">
            A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product
            </p>
            <Button 
            label="PROJECT"
            buttonStyle="bg-indigo-500 px-40 py-8 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer max-md:px-20"
            fontSize="text-2xl"
            />
        </section>
        </>
    );
};

export default Hero;