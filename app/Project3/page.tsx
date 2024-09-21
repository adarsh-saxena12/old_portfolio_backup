import Button from "@/components/Button";
import ProjectMain3 from "@/components/ProjectMain3";

const page = () => {
    return (
        <>
        <section className="flex flex-col justify-center items-center gap-20 
        bg-[url('/images/hero-pattern.svg')] pb-[300px] pt-[200px] md:-mt-[128px]">

            <h1 className="font-bold text-7xl max-md:text-6xl text-center">CROWN TEMPLATE 
            </h1>

            <p className="text-slate-600 text-3xl max-w-[1000px] text-center max-md:text-xl p-6">
            This page contains the case study of Crown Website Template which includes the Project Overview, Tools Used and Live Links to the official product.
            </p>
            <Button 
            label="LIVE LINK"
            buttonStyle="bg-indigo-500 px-40 py-8 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer max-md:px-20"
            fontSize="text-2xl"
            />
        </section>
         <ProjectMain3 />
        </>
    );
};

export default page;