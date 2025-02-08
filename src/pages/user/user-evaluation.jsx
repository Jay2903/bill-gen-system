import UserLayout from "./user-layout";

const UserPaperEvaluation= () => {
  return (
    <UserLayout>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Evaluation</h1>

      <div className="bg-white shadow-lg rounded-lg w-3/4 p-6">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-2">Sr No.</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">TH/PR</th>
              <th className="px-4 py-2">Course Code</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, category: "Evaluation TH", type: "TH", code: "UCSHL101", quantity: 80 },
              { id: 2, category: "Evaluation PR", type: "PR", code: "USCH201", quantity: 50 },
              { id: 3, category: "Moderation TH", type: "TH", code: "UCHS420", quantity: 10 },
            ].map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.code}</td>
                <td className="px-4 py-2">{item.quantity}</td>
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

export default UserPaperEvaluation;