import UserLayout from "./user-layout";

const UserPaperEvaluation = () => {
  return (
    <UserLayout>
      <div className="flex flex-col w-full h-full bg-[#f7faff] p-8">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Evaluation</h1>

        <div className="bg-white shadow-lg rounded-lg p-6">
          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2 whitespace-nowrap">Sr No.</th>
                  <th className="px-4 py-2 whitespace-nowrap">Category</th>
                  <th className="px-4 py-2 whitespace-nowrap">TH/PR</th>
                  <th className="px-4 py-2 whitespace-nowrap">Course Code</th>
                  <th className="px-4 py-2 whitespace-nowrap">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, category: "Evaluation TH", type: "TH", code: "UCSHL101", quantity: 80 },
                  { id: 2, category: "Evaluation PR", type: "PR", code: "USCH201", quantity: 50 },
                  { id: 3, category: "Moderation TH", type: "TH", code: "UCHS420", quantity: 10 },
                ].map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 whitespace-nowrap">{item.id}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.category}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.type}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.code}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{item.quantity}</td>
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

export default UserPaperEvaluation;
