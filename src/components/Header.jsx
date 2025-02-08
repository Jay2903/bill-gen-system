import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-blue-900">Quick Bill</h1>
        <span className="text-gray-700">Hi Admin!</span>
      </div>
    </header>
  );
};

export default Header;
