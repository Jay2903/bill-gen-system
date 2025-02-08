import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/user/User-dashboard";
import UserSummary from "./pages/user/user-summary";
import UserActivityBase from "./pages/user/user-activitybase";
import UserPaperSetting from "./pages/user/user-papersetting";
import UserPaperEvaluation from "./pages/user/user-evaluation";
import "./assets/style.css";
function App() {
  return (
    <Router>
      <Routes>
        {/* General Routes */}
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/summary" element={<UserSummary />} />
        <Route path="/user/activitybase" element={<UserActivityBase />} />
        <Route path="/user/papersetting" element={<UserPaperSetting />} />
        <Route path="/user/evaluation" element={<UserPaperEvaluation />} />

      </Routes>
    </Router>
  );
}

export default App;
