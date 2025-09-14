import React from "react";
import { FaBell, FaSearch, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Feed = () => {
  const tasks = [
    {
      id: 1,
      category: "moving",
      title: "Helping to moving a furniture",
      description:
        "Need help moving furniture from my apartment to a new house. Heavy lifting required. Will provide...",
      location: "Downtown Seattle,WA",
      date: "Jul 5, 2024 2:00PM-6:00PM",
      user: "Sarah Johnson",
      button: "Request Sent",
      image:
        "https://images.pexels.com/photos/4246009/pexels-photo-4246009.jpeg",
    },
    {
      id: 2,
      category: "gardening",
      title: "Garden Cleanup",
      description:
        "Looking for someone to help clean up my backyard garden. Weeding, pruning, and general cleanup...",
      location: "Bellevue, WA",
      date: "Jul 6, 2024 9:00AM - 1:00PM",
      user: "Robert Wilson",
      button: "Request Sent",
      image:
        "https://images.pexels.com/photos/26827231/pexels-photo-26827231.jpeg",
    },
    {
      id: 3,
      category: "painting",
      title: "Room Painting Project",
      description:
        "Need help painting two bedrooms. Paint and supplies provided. Looking for someone with painting...",
      location: "Redmond, WA",
      date: "Jul 7, 2024 8:00AM - 5:00PM",
      user: "Emily Chen",
      button: "Request Sent",
      image:
        "https://images.pexels.com/photos/4792518/pexels-photo-4792518.jpeg",
    },

  ];

  return (
    <div className="ml-64 flex flex-col w-[calc(100%-16rem)] bg-gray-900 text-white min-h-screen">
      
      
      <div className="sticky top-0 z-20 flex justify-between items-center bg-gray-900 p-6 border-b border-gray-700">
        <div>
          <h1 className="text-3xl font-bold">Feed</h1>
          <p className="text-gray-400">Find Tasks that need help</p>
        </div>
        <div className="relative">
          <FaBell size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>
      </div>

      
      <div className="sticky top-[88px] z-20 bg-gray-900 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
  
  <div className="flex items-center bg-white text-black px-4 py-2 rounded-lg w-1/2">
    <FaSearch className="text-gray-500 mr-2" />
    <input
      type="text"
      placeholder="Search tasks..."
      className="w-full outline-none"
    />
  </div>

 <Link to='/add-task'>
 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-4">
    + Add New Task
  </button>
 </Link>
  
</div>

      
      <div className="flex-1 overflow-y-auto px-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white text-black rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={task.image}
                alt={task.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-blue-200 text-blue-700 text-xs px-3 py-1 rounded-full capitalize">
                    {task.category}
                  </span>
                  <span className="text-gray-500 text-sm">Jul 3</span>
                </div>
                <h2 className="font-semibold text-lg mb-1">{task.title}</h2>
                <p className="text-gray-600 text-sm mb-3">
                  {task.description}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <FaMapMarkerAlt className="mr-2" />
                  {task.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FaRegClock className="mr-2" />
                  {task.date}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">
                        {task.user[0]}
                      </span>
                    </div>
                    <span className="text-gray-700">{task.user}</span>
                  </div>
                  <button className="bg-green-400 text-white px-3 py-1 rounded-lg text-sm">
                    {task.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
