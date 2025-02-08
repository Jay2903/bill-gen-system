import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard", icon: "/images/admin_dash_icon.png", path: "/admin-dashboard" },
  { name: "Choose File", icon: "/images/admin_choose_file_icon.png", path: "/admin/choose-file" },
  { name: "Data", icon: "/images/admin_data_icon.png", path: "/admin/data" },
  {
    name: "Status",
    icon: "/images/admin_status_icon.png",
    subItems: [
      { name: "Bill Generated", path: "/admin/status/bill-generated", icon: "/images/Bill_gen_image_admin.png" },
      { name: "Bill Not Generated", path: "/admin/status/bill-not-generated", icon: "/images/bill_not_gen_img_admin.png" }
    ]
  },
  { name: "Approvals", icon: "/images/admin_approval_icon.png", path: "/admin/approvals" },
  { name: "User", icon: "/images/admin_user_image.png", path: "/admin/user" },
  { name: "Summary", icon: "/images/admin_summary_icon.png", path: "/admin/summary" },
  { name: "Logout", icon: "/images/Admin_logout_icon.png", path: "/logout" }
];

const Sidebar = () => {
  const [statusOpen, setStatusOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="w-64 bg-white shadow-md p-5">
      <ul className="space-y-2 text-blue-900">
        {sidebarItems.map((item, index) => (
          <li key={index} className="relative">
            {item.subItems ? (
              <div
                className="cursor-pointer"
                onMouseEnter={() => setStatusOpen(true)}
                onMouseLeave={() => setStatusOpen(false)}
              >
                {/* Status item */}
                <div className="flex items-center p-2 rounded-md transition hover:bg-gray-200">
                  <img src={item.icon} alt={item.name} className="w-5 h-5 mr-3" />
                  {item.name}
                </div>

                {/* Dropdown menu below status */}
                {statusOpen && (
                  <ul className="mt-1 bg-gray-100 rounded-md shadow-md overflow-hidden transition-all duration-200">
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
