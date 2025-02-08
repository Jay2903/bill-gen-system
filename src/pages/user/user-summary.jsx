import UserLayout from "./user-layout";

const UserSummary = () => {
  return (
    <UserLayout>
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-blue-700 mb-10">Summary</h1>

      {/* Cards and Button Container */}
      <div className="bg-white shadow-lg rounded-lg w-3/4 h-20 py-10  flex">
        {/* Cards */}
        <div className="flex gap-4 mt-4">
          {[
            { title: "Paper Setting", value: 1000 },
            { title: "Evaluation", value: 1300 },
            { title: "Activity Base", value: 1200 },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 w-56 text-center"
            >
              <h2 className="text-sm font-semibold text-gray-500">
                {item.title}
              </h2>
              <p className="text-xl font-bold text-gray-800 mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          className="bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          aria-label="View Summary Bill"
        >
          Summary Bill
        </button>
      </div>
    </div>
    </UserLayout>
  );
};

export default UserSummary;
