import React, { useState } from "react";

import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
const BillGenerated = () => {
  const [activeSection, setActiveSection] = useState("Bill Generated");

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header />
      

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-blue-700">Status / Bill Generated</h2>
          <div className="mt-4 p-4 bg-white shadow-md rounded">
            <h3 className="text-lg font-semibold">Bill Generated Users</h3>
            <table className="w-full mt-2 border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Sr No</th>
                  <th className="border p-2">Faculty Name</th>
                  <th className="border p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Maria</td>
                  <td className="border p-2 text-green-600">✔</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillGenerated;
