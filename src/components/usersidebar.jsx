import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
     <h2 className="logo">Quick Bill</h2>
      <ul className="menu">
      <li><Link to="/user/dashboard">Dashboard</Link></li>
        <li><Link to="/user/summary">Summary</Link></li>
        <li><Link to="/user/activitybase">Activity Base</Link></li>
        <li><Link to="/user/papersetting">Paper setting</Link></li>
        <li><Link to="/user/evaluation">Evaluation</Link></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;