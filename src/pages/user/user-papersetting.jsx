import UserLayout from "./user-layout";

const UserPaperSetting = () => {
  return (
    <UserLayout>
     <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Paper Setting</h1>

      <div className="bg-white shadow-lg rounded-lg w-3/4 p-6">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2">Sr No.</th>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Solution Set</th>
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
                <td className="px-4 py-2">{course.id}</td>
                <td className="px-4 py-2">{course.name}</td>
                <td className="px-4 py-2">{course.code}</td>
                <td className="px-4 py-2">{course.quantity}</td>
                <td className="px-4 py-2">{course.solution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300"
      >
        Preview
      </button>
    </div>
    </UserLayout>
  );
};

export default UserPaperSetting;