
const Footer = () => {
    return (

        <section className=" bg-slate-100 flex flex-col px-10 items-center pt-40">

       <h1 className="font-bold text-xl text-black"> ADARSH SAXENA </h1>

               <ul  className="flex flex-wrap gap-[60px] pt-10">
                <li>
                    <img 
                    src="icons/instagram.svg" 
                    alt="instagram"
                    width={40}
                    height={40}
                    className="" 
                    />
                </li>
                <li>
                <img 
                    src="icons/github.svg" 
                    alt="instagram"
                    width={40}
                    height={40}
                    className="" 
                    />
                </li>
                <li>
                <img 
                    src="icons/leetcode.png" 
                    alt="instagram"
                    width={40}
                    height={40}
                    className="" 
                    />
                </li>
                <li>
                <img 
                    src="icons/twitter.svg" 
                    alt="instagram"
                    width={40}
                    height={40}
                    className="" 
                    />
                </li>
                <li>
                <img 
                    src="icons/youtube.svg" 
                    alt="instagram"
                    width={40}
                    height={40}
                    className="" 
                    />
                </li>
               </ul>

        <div className="flex flex-col items-center mt-10 ">
          <hr className="w-3/4 text-black"/>
          <p className="mt-20 mb-20 text-xl text-black">©️ Copyright 2024 Made by <span className="font-bold underline hover:text-indigo-400 cursor-pointer"> Adarsh Saxena </span></p>
        </div>
 
        </section>
    );
};

export default Footer;