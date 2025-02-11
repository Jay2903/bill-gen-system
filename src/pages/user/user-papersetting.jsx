import UserLayout from "./user-layout";

const UserPaperSetting = () => {
  return (
    <UserLayout>
      <div className="flex flex-col w-full h-full bg-[#f7faff] p-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Paper Setting</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2 whitespace-nowrap">Sr No.</th>
                  <th className="px-4 py-2 whitespace-nowrap">Course Name</th>
                  <th className="px-4 py-2 whitespace-nowrap">Course Code</th>
                  <th className="px-4 py-2 whitespace-nowrap">Quantity</th>
                  <th className="px-4 py-2 whitespace-nowrap">Solution Set</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, name: "DSA", code: "USCL201", quantity: 20, solution: 2 },
                  { id: 2, name: "OOP", code: "USCH201", quantity: 50, solution: 0 },
                  { id: 3, name: "Java", code: "USCH201", quantity: 50, solution: 0 },
                  { id: 4, name: "DBMS", code: "USCH201", quantity: 50, solution: 0 },
                ].map((course, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 whitespace-nowrap">{course.id}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{course.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{course.code}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{course.quantity}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{course.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Preview
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserPaperSetting;
