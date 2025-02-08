import UserLayout from "./user-layout";

const UserActivityBase=()=>{
  return (
    <UserLayout>
      <div className="flex flex-col w-full h-full bg-[#f7faff] p-8">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-blue-7 mb-8">
        Activity Base
      </h1>

      {/* Input Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-wrap gap-4 items-center">
        {/* Dropdown: Day Base Activity */}
        <select className="border border-gray-300 rounded-lg px-4 py-2 w-56 text-gray-600 focus:ring focus:ring-blue-200">
          <option>Day Base Activity</option>
          <option>Winter24 ESE</option>
          <option>Summer24 ESE</option>
        </select>

        {/* Dropdown: Role */}
        <select className="border border-gray-300 rounded-lg px-4 py-2 w-56 text-gray-600 focus:ring focus:ring-blue-200">
          <option>Role</option>
          <option>Invigilator</option>
          <option>Evaluator</option>
        </select>

        {/* Date Input: DOC */}
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 w-48 text-gray-600 focus:ring focus:ring-blue-200"
        />

        {/* Date Input: DOE */}
        <input
          type="date"
          className="border border-gray-300 rounded-lg px-4 py-2 w-48 text-gray-600 focus:ring focus:ring-blue-200"
        />

        {/* Number Input: Days */}
        <input
          type="number"
          placeholder="Days"
          className="border border-gray-300 rounded-lg px-4 py-2 w-32 text-gray-600 focus:ring focus:ring-blue-200"
        />

        {/* Add Button */}
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Add
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f7faff]">
              <th className="text-left p-3 text-gray-600 font-medium">Sr No.</th>
              <th className="text-left p-3 text-gray-600 font-medium">
                Activity
              </th>
              <th className="text-left p-3 text-gray-600 font-medium">Role</th>
              <th className="text-left p-3 text-gray-600 font-medium">Days</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 text-gray-800">1</td>
              <td className="p-3 text-gray-800">Winter24 ESE</td>
              <td className="p-3 text-gray-800">Invigilator</td>
              <td className="p-3 text-gray-800">15</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 text-gray-800">2</td>
              <td className="p-3 text-gray-800">OOP</td>
              <td className="p-3 text-gray-800">USCH201</td>
              <td className="p-3 text-gray-800">50</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Preview Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          Preview
        </button>
      </div>
    </div>
    </UserLayout>
  );
};

export default UserActivityBase;