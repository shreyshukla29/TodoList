import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import { FaCalendarAlt } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { VscChecklist } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from 'react-redux';
import {filterTodayTodos,filterUpcomingTodos} from "../Slices/TodoSlice"
function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth <= 640) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [windowWidth]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className={`flex flex-col ${isExpanded ? 'w-[230px]' : 'w-[60px]'} bg-zinc-200 rounded-lg h-full transition-width duration-300`}>
      <div className={`flex ${!isExpanded ? 'justify-center' : 'justify-between'} px-2 py-4 items-center`}>
        <h1 className={`text-2xl font-bold ${!isExpanded && 'hidden'}`}>
          Menu
        </h1>
        <GiHamburgerMenu onClick={toggleSidebar} className="cursor-pointer w-6 h-6" />
      </div>

      <div className="  mt-4 mx-2 flex items-center justify-center">
       
        <input 
          type="text" 
          placeholder="Search" 
          className={` rounded-lg pl-2 py-1  outline-none ${!isExpanded && 'hidden'}`} 
        />
         <FiSearch className={`text-gray-400 mr-2 w-6 h-6 
          ${isExpanded && 'relative right-6 '}`} />
      </div>
      {/* Task section */}
      <div className="mt-6 mx-2">
        <h1 className={`text-md font-semibold text-gray-500 ${!isExpanded && 'hidden'}`}>
          TASKS
        </h1>
        <ul className={`flex flex-col gap-2`}>
          <li className="hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2"
           onClick={()=> dispatch(filterUpcomingTodos())}>
            <MdKeyboardDoubleArrowRight className={`text-gray-400 ${!isExpanded && 'w-6 h-6 my-1'}`} />
            <span className={` ${!isExpanded && 'hidden'}`}
           
           >Upcoming</span>
          </li>
          <li className={`hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2`}
           onClick={()=> dispatch(filterTodayTodos())}>
            <VscChecklist className={`text-gray-400 ${!isExpanded && 'w-6 h-6 my-1'}`} />
            <span className={`${!isExpanded && 'hidden'}`}
           >Today</span>
          </li>
          <li className="hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2">
            <FaCalendarAlt  className={`text-gray-400 ${!isExpanded && 'w-6 h-6 my-1'}`} />
            <span className={`${!isExpanded && 'hidden'}`}>Calendar</span>
          </li>
        </ul>
      </div>

      {/* List section */}
      <div className="mt-6 mx-2">
        <h1 className={`text-md font-semibold text-gray-500 ${!isExpanded && 'hidden'}`}>
          LISTS
        </h1>
        <ul className={`flex flex-col gap-2 ${!isExpanded && 'hidden'}`}>
          <li className="hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span>Personal</span>
          </li>
          <li className="hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            <span>Work</span>
          </li>
          <li className="hover:bg-gray-300 rounded-full px-2 py-1 cursor-pointer flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span>List 1</span>
          </li>
        </ul>
        <button className={`mt-4 flex bg-gray-300 py-1 rounded-full w-full items-center gap-4 px-2 ${!isExpanded && 'hidden'}`}>
          <IoMdAdd className={`w-4 h-4 `} />
          <span className={`${!isExpanded && 'hidden'}`}>Add New List</span>
        </button>
      </div>
    </div>
  );
}


export default Sidebar;
