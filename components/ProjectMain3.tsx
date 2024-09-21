import Button from "./Button";

const ProjectMain3 = () => {
    return (
        <section className="flex flex-col justify-center items-center text-start gap-20 mt-40 mb-20 p-10">
            <img 
            src="/images/img3.jpg" 
            alt="project3" 
            width={700}
            height={700}
            className="rounded-2xl border-4 border-orange-600"
            />
            <div className="flex flex-col items-start text-start max-w-[900px]">
                <h1 className="font-bold text-4xl">Project Overview</h1>
                <p className="text-2xl text-slate-700 mt-10">Crown is a web template that I created targeting the restaurant and food industry for people to use for their own restaurant business and build trust and engagement with their customers by providing them with a better User Interface on the Web.

                By taking User Interface ideas by visiting different types of websites of the same industry and even visited platforms like dribble to get inspiration for building a good User Interface that will bring great results.

                Feel free to check out the Project by visiting the Live Link.</p>

                <h1 className="font-bold text-4xl mt-10">Tools Used</h1>

                
                <div className="flex gap-2 mt-20 text-xl text-slate-600 flex-wrap max-w-[800px]">
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
                </div>

                <h1 className="font-bold text-4xl mt-20">See Live</h1>


                <div className="flex flex-row gap-10 mt-20">
                   <Button 
                   label="LIVE LINK"
                   buttonStyle="bg-indigo-500 px-10  py-6 rounded-2xl text-white object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 w-[250px] text-center"
                   fontSize="xl"
                   onClick="Project3"
                   />
                   <Button 
                   label="GO BACK"
                   buttonStyle="outline outline-2 outline-indigo-600 px-10  py-6 rounded-2xl text-black object-contain shadow-2xl shadow-blue-800 hover:bg-indigo-100 cursor-pointer  mt-10 w-[250px] text-center"
                   fontSize="xl"
                   onClick="/"
                   />
                </div>
            </div>
        </section>
    );
};

export default ProjectMain3;