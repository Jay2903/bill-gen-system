import UserLayout from "./user-layout";

const UserSummary = () => {
  return (
    <UserLayout>
      <div className="flex flex-col w-full h-full bg-[#f7faff] p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">Summary</h1>

        {/* Cards and Button Container */}
        <div className="bg-white shadow-lg rounded-lg h-20 flex items-center p-2">
          {/* Cards */}
          <div className="flex gap-4">
            {[
              { title: "Paper Setting", value: 1000 },
              { title: "Evaluation", value: 1300 },
              { title: "Activity Base", value: 1200 },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-2 w-46 text-center border border-gray-300"
              >
                <h2 className="text-sm font-semibold text-gray-500">
                  {item.title}
                </h2>
                <p className="text-xl font-bold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Button aligned to the right */}
          <button className="ml-auto p-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300">
            Summary Bill
          </button>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserSummary;

