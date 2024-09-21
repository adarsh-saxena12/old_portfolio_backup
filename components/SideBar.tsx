
const SideBar = () => {
    
    return (
        <div className="absolute hidden lg:block p-4 bg-white object-contain mt-80 shadow-indigo-300 shadow-2xl">
            <ul className="flex flex-col gap-3">
                <a href="/" className="hover:bg-indigo-200 p-3 rounded-xl">
                 <img 
                 src="/icons/instagram.svg" 
                 alt="instagram" 
                 width={40}
                 height={40}
                 />
                </a>
                <a href="/" className=" hover:bg-indigo-200 p-3 rounded-xl">
                 <img 
                 src="/icons/twitter.svg" 
                 alt="instagram" 
                 width={40}
                 height={40}
                 />
                </a>
                <a href="/" className=" hover:bg-indigo-200 p-3 rounded-xl">
                 <img 
                 src="/icons/youtube.svg" 
                 alt="instagram" 
                 width={40}
                 height={40}
                 />
                </a>
                <a href="/" className=" hover:bg-indigo-200 p-3 rounded-xl">
                 <img 
                 src="/icons/github.svg" 
                 alt="instagram" 
                 width={40}
                 height={40}
                 />
                </a>
                <a href="/" className=" hover:bg-indigo-200 p-3 rounded-xl">
                 <img 
                 src="/icons/leetcode.png" 
                 alt="instagram" 
                 width={40}
                 height={40}
                 />
                </a>
                
            </ul>
        </div>
    );
};

export default SideBar;

