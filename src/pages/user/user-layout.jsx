import PropTypes from "prop-types";
import Header from "../../components/Header";
import Usersidebar from "../../components/usersidebar";
const UserLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
    {/* Full-width Navbar */}
    <div className="w-full">
      <Header />
    </div>
  
    {/* Sidebar & Main Content Layout */}
    <div className="flex flex-row flex-grow">
      {/* Sidebar (Starts Below Navbar) */}
      <div className="w-64 text-black p-4 h-screen">
        <Usersidebar />
      </div>
  
      {/* Main Content (Remains Unchanged) */}
      <div className="flex flex-col flex-grow bg-gray-100 overflow-auto">
        {children}
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


