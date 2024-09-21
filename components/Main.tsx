import Button from "./Button";

const Main = () => {
    return (
        <div className="flex flex-col pt-40 pb-40 bg-slate-50 p-4">
            <div className="flex flex-col  items-center justify-center">
               <h1 className="font-bold text-5xl  text-center items-center">ABOUT ME</h1>
               <span className="block bg-indigo-600 w-10 h-2 rounded-3xl mt-6">
               </span>
               <p className="text-xl md:text-2xl text-slate-600 text-center max-w-[1000px] mt-8 ">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className="flex flex-row max-lg:flex-col justify-start md:gap-20 gap-20 mt-40 ml-10">

            <div className="max-w-[600px] p-10 bg-[#eeeef0] rounded-2xl w-3/4"> 
              <h1 className="text-3xl font-bold text-start">Get to know me!</h1>
              <p className="md:text-2xl text-xl mt-10 text-slate-800 ">
              I'm a <span className="text-slate-600 font-bold"> Frontend Web Developer </span>building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              <br />
              <br />
                I also like sharing content related to the stuff that I have learned over the years in <span className="text-slate-600 font-bold"> Web Development </span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="underline text-indigo-600 font-bold cursor-pointer"> Linkedin </span> where I post useful content related to Web Development and Programming
              <br />
              <br />
               I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
              </p>

              <Button 
               label="CONTACT"
               buttonStyle="bg-indigo-500 px-20  py-6 rounded-2xl text-white shadow-2xl shadow-blue-800 hover:bg-indigo-400 cursor-pointer  mt-10 md:w-[300px] w-[250px] text-center"
               fontSize="xl"
                />
              
              </div>
              
              {/*skills  */}
              
              <div>

              <h1 className="text-3xl font-bold text-start">My Skills</h1>

              <div className="flex flex-wrap gap-2 mt-8 text-slate-600 md:text-2xl text-md">

              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
              <h2  className="px-6 py-4 bg-slate-200 rounded-xl"> CSS </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> JAVASCRIPT </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> REACT </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> NEXT </h2>
              
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> HTML </h2>
              <h2  className="px-6 py-4 bg-slate-200 rounded-xl"> CSS </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> JAVASCRIPT </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> REACT </h2>
              <h2 className="px-6 py-4 bg-slate-200 rounded-xl"> NEXT </h2>
              
              </div>
            
              </div>

              </div>
            </div>

    );
};

export default Main;