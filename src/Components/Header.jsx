import Arlogow from "../../public/wmremove-transformed.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass, faBell, faCalendarWeek, faMessage } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-2  bg-[#191b1f] sticky top-0 z-30">
            {/* Left Section */}
            <div className="flex items-center">
                <div className="text-white w-10 lg:w-12 ml-5 md:ml-0">
                    <img src={Arlogow} alt="Logo" className="w-full h-auto" />
                </div>
                <div className="h-6 sm:h-8 mx-2 w-[1px] sm:w-[2px] bg-[#A7A7A7]"></div>
                <div>
                    <p className="font-bold text-white text-lg sm:text-xl px-2">Home</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-1 sm:gap-2 ">
                {/* Search Bar - Moves to bottom on mobile */}
                <div className="group flex items-center bg-white h-8 w-8 rounded-full transition-all duration-300 hover:w-[290px] hover:rounded-xl ">
                
                {/* Search Icon - Stays centered initially, moves left on hover */}
                  <button className="w-8 h-8 flex items-center pl-2 justify-center transition-all duration-300 group-hover:pl-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>

                {/* Input Field - Expands on hover */}
                   <input type="text" className="  flex h-9 w-full  placeholder-red-500 bg-transparent px-3 py-1 text-base  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" placeholder="Search lead, contact and more ..." />
                 </div>



                <div className="w-8 h-8 p-1 rounded-full bg-gradient-to-r from-[#F54B64] to-[#F78361] md:flex items-center justify-center  hidden  ">
                    <FontAwesomeIcon icon={faPlus} color="black" />
                </div>
                
                <div className="h-6 sm:h-8 w-[1px] sm:w-[2px] mx-1 sm:mx-2 bg-[#A7A7A7] hidden md:block"></div>
                
                <div className="flex lg:gap-1 gap-1">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMessage} color="#f7f6f6" fontSize={"17px"} />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <FontAwesomeIcon icon={faBell} color="#f7f6f6" fontSize={"17px"} />
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCalendarWeek} color="#f7f6f6" fontSize={"17px"} />
                    </div>
                </div>
                
                <div className="h-6 sm:h-8 w-[1px] sm:w-[2px] mx-1 sm:mx-2 bg-[#A7A7A7] hidden md:block"></div>
                
                <div className="flex items-center ">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#F54B64] to-[#F78361] rounded-full overflow-hidden hidden md:block">
                        <img src={Arlogow} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="hidden sm:block pl-2">
                        <p className="text-white text-sm">Abdul Rehman</p>
                        <p className="text-white text-xs text-gray-400">Founder, Artistics Rule</p>
                    </div>
                </div>
            </div>

            {/* Mobile Search Bar - Fixed at bottom */}
            <div className="flex  md:hidden fixed top-14 left-0 right-0 bg-[#191b1f] p-2  items-center border-t border-gray-700">
                <div className="flex items-center bg-white h-10 w-full rounded-lg px-3">
                    <button className="w-8 h-10 flex items-center justify-center">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <input 
                        type="text" 
                        className="flex h-10 w-full placeholder-grey-500 bg-transparent px-2 py-1 text-sm focus-visible:outline-none" 
                        placeholder="Search lead, contact and more..." 
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;