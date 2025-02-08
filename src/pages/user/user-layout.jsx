import PropTypes from "prop-types";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/usersidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="dashboard">{children}</div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes validation
UserLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;


