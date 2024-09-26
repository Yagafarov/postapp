import React, { useState } from 'react';
import LinkItem from './LinkItem';
import { FaChartBar } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { auth, signOut } from '../../firebase'; 
import { SiNginxproxymanager } from "react-icons/si";

export const links = [
  { href: "/", icon: SiNginxproxymanager, text: "Панели управления" },
  { href: "/statistics", icon: FaChartBar, text: "Статистика" },
  { href: "/login", icon: IoIosLogOut, text: "Выход" }, // Logout button
];

const Sidebar = ({ isSidebarOpen, toggleSidebar, onLogout }) => {
  const [selectedLink, setSelectedLink] = useState('/');

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out using Firebase authentication
      if (onLogout) {
        onLogout(); // Call the onLogout prop function after successful logout
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleClick = (href) => {
    if (href === '/login') {
      handleLogout(); // If the logout link is clicked, trigger the logout
    } else {
      setSelectedLink(href); // Update selected link
      toggleSidebar(); // Close sidebar for other links
    }
  };

  return (
    <aside className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {
            links.map((link, index) => (
              <LinkItem
                key={index}
                {...link}
                isSelected={link.href === selectedLink}
                onClick={() => handleClick(link.href)} // Handle click event for each link
              />
            ))
          }
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
