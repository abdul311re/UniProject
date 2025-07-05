import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHouse,
  faChartBar,
  faUserCheck,
  faMoneyCheckAlt,
  faStar,
  faFileAlt,
  faUserPlus,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Employees");
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize to set sidebar state based on screen size
  useEffect(() => {
    function handleResize() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      if (newWidth >= 1024) {
        setIsOpen(true); // lg and above: sidebar open
      } else {
        setIsOpen(false); // md and below: sidebar closed/hidden
      }
    }
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header toggle button for md and sm */}
      {windowWidth < 1024 && (
        <button
          className="fixed top-1 left-1 z-50 p-3  rounded-lg text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="md" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed overflow-y-auto lg:top-18 top-29 left-0 max-h-screen bg-[#fafafa] shadow-lg transition-all duration-300 z-40
          ${
            windowWidth >= 1024
              ? isOpen
                ? "w-56"
                : "w-16"
              : isOpen
              ? "w-56 translate-x-0"
              : "-translate-x-full"
          }
          
        `}
      >
        {/* Toggle Button inside sidebar for lg and above */}
        {windowWidth >= 1024 && (
          <button
            className={`p-3 text-gray-700 w-full flex ${
              isOpen ? "justify-end pr-4 " : "justify-center pt-2"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle sidebar"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="cursor-pointer" />
          </button>
        )}

        {/* Sidebar Menu */}
        <div className="px-2 pt-0">
          {menuItems.map((item, index) => (
            <NavLink to={item.path || "#"}  key={index}
                className={({ isActive }) =>`border-b border-gray-300 p-3 my-3 flex items-center gap-3 cursor-pointer transition-all rounded-xs
                  ${
                   isActive
                      ? "bg-gradient-to-r from-[#F54B64] to-[#F78361] text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                onClick={() => setActiveItem(item.name)}
              >
                <div className="w-6 flex justify-center">
                  <FontAwesomeIcon icon={item.icon} fontSize={"16px"} />
                </div>
                <span
                  className={`${
                    isOpen ? "block" : "hidden"
                  } transition-all duration-300 text-xs whitespace-nowrap`}
                >
                  {item.name}
                </span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Main content area - add padding based on sidebar state */}
      <div
        className={`transition-all duration-300 ${
          windowWidth >= 1024
            ? isOpen
              ? "pl-56" // sidebar open
              : "pl-16" // sidebar closed
            : "" // no padding on mobile when sidebar is hidden
        }`}
      >
        {/* Your page content will go here */}
      </div>
    </>
  );
}

// Sidebar menu items
export const menuItems = [
  { name: "Dashboard", icon: faHouse, path: "/" },
  { name: "Employees", icon: faUser, path: "/Employees" },
  { name: "Sales", icon: faChartBar, path: "/Sales" },
  { name: "Attendance & Leaves", icon: faUserCheck,path: "/Employeelist" },
  { name: "Payroll & Salary", icon: faMoneyCheckAlt,path: "/Sales" },
  { name: "Leads", icon: faStar ,path: "/Leads"},
  { name: "HR Policies & Documents", icon: faFileAlt,path: "/Sales" },
  { name: "Projects", icon: faUserPlus , path: "/Projects" },
  { name: "Calender", icon: faBell , path: "/Calender" },
  { name: "Employee Entry Form", icon: faBell, path: "/Form" },
];

export default Sidebar;
// Recruitment & Hiring