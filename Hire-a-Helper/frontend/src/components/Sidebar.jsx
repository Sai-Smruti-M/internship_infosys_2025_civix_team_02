import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white flex flex-col p-4 border-r border-gray-700">
        
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center mb-6">
          <img
  src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
  alt="User Avatar"
  className="w-16 h-16 rounded-full mb-2"/>

          <h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-900">test@gmail.com</p>
        </div>

       
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <FaHome size={20} />
            <span>Feed</span>
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <FaClipboardList size={20} />
            <span>My Tasks</span>
          </NavLink>

          <NavLink
            to="/requests"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <FaFolderOpen size={20} />
            <span>Requests</span>
          </NavLink>

          <NavLink
            to="/my-requests"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <FaFolderOpen size={20} />
            <span>My Requests</span>
          </NavLink>

          <NavLink
            to="/add-task"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <FiPlus size={20} />
            <span>Add Task</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-2 rounded-lg transition ${
                isActive ? "bg-teal-500" : "hover:bg-teal-500"
              }`
            }
          >
            <IoMdSettings size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>
    </>
  )
}

export default Sidebar;
