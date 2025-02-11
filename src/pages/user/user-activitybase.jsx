import UserLayout from "./user-layout";

const UserActivityBase = () => {
  return (
    <UserLayout>
      <div className="flex flex-col w-full h-full bg-[#f7faff] p-8">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Activity Base</h1>

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
          <button className="ml-auto p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300">
            Add
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#f7faff]">
                  <th className="text-left p-3 text-gray-600 font-medium whitespace-nowrap">Sr No.</th>
                  <th className="text-left p-3 text-gray-600 font-medium whitespace-nowrap">Activity</th>
                  <th className="text-left p-3 text-gray-600 font-medium whitespace-nowrap">Role</th>
                  <th className="text-left p-3 text-gray-600 font-medium whitespace-nowrap">Days</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, activity: "Winter24 ESE", role: "Invigilator", days: 15 },
                  { id: 2, activity: "Summer24 ESE", role: "Evaluator", days: 10 },
                ].map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3 text-gray-800 whitespace-nowrap">{item.id}</td>
                    <td className="p-3 text-gray-800 whitespace-nowrap">{item.activity}</td>
                    <td className="p-3 text-gray-800 whitespace-nowrap">{item.role}</td>
                    <td className="p-3 text-gray-800 whitespace-nowrap">{item.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
