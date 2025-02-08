import UserLayout from "./user-layout";

const UserDashboard = () => {
  return (
    <UserLayout>
    <div className="dashboard">
      <div className="term-selector">
        <label htmlFor="term">Term</label>
        <select id="term">
          <option value="Winter24">Winter24</option>
          <option value="Spring24">Spring24</option>
          <option value="Fall24">Fall24</option>
        </select>
      </div>
    </div>
    </UserLayout>
  );
};

export default UserDashboard;

