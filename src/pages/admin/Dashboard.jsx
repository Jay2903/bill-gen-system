import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ApprovalSection from "./ApprovalSection";

const statsCards = [
  { title: "Total Users", count: 250, icon: "/images/cards_icon.png" },
  { title: "Bill Generated", count: 200, icon: "/images/cards_icon.png" },
  { title: "Bill Not Generated", count: 50, icon: "/images/cards_icon.png" }
];

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-blue-700">Dashboard</h2>

          {/* Stats Cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsCards.map((card, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-2xl">{card.count}</p>
                </div>
                <img src={card.icon} alt={card.title} className="w-12 h-12" />
              </div>
            ))}
          </div>

          {/* Approval Section */}
          <ApprovalSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;