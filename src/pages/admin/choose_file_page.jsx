import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import XLSX library to parse Excel files
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const ChooseFile = ({ setFileData }) => {
  const [activeSection, setActiveSection] = useState("Choose File");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      setFile(selectedFile);
      readExcelFile(selectedFile);
    } else {
      alert("Please upload a valid Excel file (.xlsx)");
    }
  };

  const readExcelFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Convert sheet to JSON
      setFileData(jsonData); // Pass data to parent (Data page)
    };
    reader.readAsBinaryString(file);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-blue-700">Choose File</h2>

          {/* File Upload Card */}
          <div className="mt-6 bg-white p-4 shadow-md rounded-lg w-full max-w-md">
            <label className="block text-gray-600 text-sm">Choose a File</label>
            <input
              type="file"
              accept=".xlsx"
              onChange={handleFileChange}
              className="mt-2 p-2 w-full border rounded-md text-sm cursor-pointer"
            />
            {/* Display the file name if selected */}
            {file && (
              <div className="mt-2">
                <p className="text-sm text-green-600 truncate w-full">{file.name}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseFile;
