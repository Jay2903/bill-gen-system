import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  // User Sidebar Items
  { name: "User Dashboard", icon: "/images/user_dashboard_icon.png", path: "/user/dashboard" },
  { name: "User Summary", icon: "/images/user_summary_icon.png", path: "/user/summary" },
  { name: "Activity Base", icon: "/images/user_activity_icon.png", path: "/user/activitybase" },
  { name: "Paper Setting", icon: "/images/user_paper_icon.png", path: "/user/papersetting" },
  { name: "Evaluation", icon: "/images/user_eval_icon.png", path: "/user/evaluation" },
  
  // Logout (common for both)
  { name: "Logout", icon: "/images/Admin_logout_icon.png", path: "/logout" }
];

const Sidebar = () => {
  const [statusOpen, setStatusOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-54 ">
      {/* Sidebar Header */}
      {/* <h2 className="text-xl font-bold text-blue-900 mb-4">Quick Bill</h2> */}

      <ul className="space-y-2 text-blue-900">
        {sidebarItems.map((item, index) => (
          <li key={index} className="relative">
            {item.subItems ? (
              <div
                className="cursor-pointer"
                onMouseEnter={() => setStatusOpen(true)}
                onMouseLeave={() => setStatusOpen(false)}
              >
                {/* Status Item */}
                <div className="flex items-center p-2 rounded-md transition hover:bg-gray-200">
                  <img src={item.icon} alt={item.name} className="w-5  mr-3" />
                  {item.name}
                </div>

                {/* Dropdown menu for Status */}
                {statusOpen && (
                  <ul className="mt-1  rounded-md shadow-md overflow-hidden transition-all duration-200">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="p-2 hover:bg-gray-200">
                        <Link
                          to={subItem.path}
                          className={`flex items-center ${
                            location.pathname === subItem.path ? "text-blue-600" : "text-gray-900"
                          }`}
                        >
                          <img src={subItem.icon} alt={subItem.name} className="w-4 h-4 mr-2" />
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded-md transition hover:bg-gray-200 ${
                  location.pathname === item.path ? "text-blue-600" : "text-gray-900"
                }`}
              >
                <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
