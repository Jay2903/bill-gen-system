import UserLayout from "./user-layout";

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className="flex flex-col w-full min-h-screen bg-[#f7faff] p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Dashboard Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full  mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Term Selector */}
          <div className="flex flex-col w-full md:w-auto">
            <label htmlFor="term" className="text-gray-700 font-semibold mb-2">
              Select Term
            </label>
            <select
              id="term"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-56 text-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option>Winter24 ESE</option>
              <option>Summer24 ESE</option>
              <option>SummerTerm24</option>
            </select>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;

