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
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Sidebar Container
const StyledSidebar = styled.div`
  position: fixed;
  top: 64px; /* height of header */
  left: 0;
  height: calc(100vh - 64px);
  background-color: #fafafa;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 40;
  overflow-y: auto;
  transition: all 0.3s ease;
  width: auto;
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  scrollbar-width: thin;
  scrollbar-color: white transparent;
`;

// Sidebar toggle button container
const ToggleButton = styled.button`
 padding-left: 4px;
  color: #4b5563;
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isOpen ? "flex-end" : "center")};
  padding-right: ${(props) => (props.isOpen ? "1rem" : "0")};
  padding-top: ${(props) => (props.isOpen ? "0" : "0.5rem")};
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsOpen(width >= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth =
    windowWidth >= 1024
      ? isOpen
        ? "w-56"
        : "w-16"
      : isOpen
      ? "w-56"
      : "-translate-x-full";

  return (
    <>
      {/* Mobile Toggle Button */}
      {windowWidth < 1024 && (
        <button
          className="fixed top-20 left-2 z-50 p-2 rounded-lg text-white bg-gray-800 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      )}

      {/* Sidebar */}
      <StyledSidebar className={`transition-all duration-300 ${sidebarWidth}`}>
        {/* Desktop Toggle */}
        {windowWidth >= 1024 && (
          <ToggleButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="cursor-pointer pt-5" />
          </ToggleButton>
        )}

        {/* Menu */}
        <div className="px-2 pt-2 pb-4">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path || "#"}
              key={index}
              className={({ isActive }) =>
                `border-b border-gray-300 p-3 my-3 flex items-center gap-3 cursor-pointer transition-all rounded
                 ${
                   isActive
                     ? "bg-gradient-to-r from-[#F54B64] to-[#F78361] text-white"
                     : "text-gray-700 hover:bg-gray-200"
                 }`
              }
            >
              <div className="w-6 flex justify-center">
                <FontAwesomeIcon icon={item.icon} fontSize="16px" className="" />
              </div>
              <span className={`${isOpen ? "block" : "hidden"} text-xs whitespace-nowrap`}>
                {item.name}
              </span>
            </NavLink>
          ))}
        </div>
      </StyledSidebar>

      {/* Main content padding */}
      <div
        className={`transition-all duration-300 ${
          windowWidth >= 1024 ? (isOpen ? "pl-56" : "pl-16") : ""
        }`}
      >
        {/* Page content goes here */}
      </div>
    </>
  );
}

export const menuItems = [
  { name: "Dashboard", icon: faHouse, path: "/" },
  { name: "Employees", icon: faUser, path: "/Employees" },
  { name: "Sales", icon: faChartBar, path: "/Sales" },
  { name: "Todo List", icon: faUserCheck, path: "/Todo" },
  { name: "Payroll & Salary", icon: faMoneyCheckAlt, path: "/Payroll" },
  { name: "Leads", icon: faStar, path: "/Leads" },
  { name: "HR Policies & Documents", icon: faFileAlt, path: "/Policies" },
  { name: "Projects", icon: faUserPlus, path: "/Projects" },
  { name: "Calender", icon: faBell, path: "/Calender" },
  { name: "Employee Entry Form", icon: faBell, path: "/Form" },
  { name: "Recruitment & Hiring", icon: faUserPlus, path: "/Hiring" },
];

export default Sidebar;
