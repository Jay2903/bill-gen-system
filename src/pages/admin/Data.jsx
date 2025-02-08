import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Data = ({ fileData }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-blue-700">Data</h2>

          {/* Display File Data */}
          <div className="mt-6 bg-white p-4 shadow-md rounded-lg overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  {fileData && fileData[0].map((header, index) => (
                    <th key={index} className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fileData &&
                  fileData.slice(1).map((row, index) => (
                    <tr key={index} className="border-b">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2 text-sm text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
