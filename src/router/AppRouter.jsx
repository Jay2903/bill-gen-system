import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Loginpage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/admin/Dashboard";
import ChooseFile from "../pages/admin/choose_file_page";
import Data from "../pages/admin/Data";
import BillGeneratedUser from "../pages/admin/status/BillGeneratedUser";
import BillNotGeneratedUser from "../pages/admin/status/BillNotGeneratedUser";
import UserDashboard from "../pages/user/User-dashboard";
import UserSummary from "../pages/user/user-summary";
import UserActivityBase from "../pages/user/user-activitybase";
import UserPaperSetting from "../pages/user/user-papersetting";
import UserPaperEvaluation from "../pages/user/user-evaluation";


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Admin Routes */}
                <Route path="/admin-dashboard" element={<Dashboard />} />

                {/* ChooseFile route */}
                <Route path="/admin/choose-file" element={<ChooseFile />} />

                {/* Data route */}
                <Route path="/admin/data" element={<Data />} />

                {/* Status route with sub-routes for Bill Generated and Bill Not Generated */}
                <Route path="/admin/status">
                    <Route index element={<BillGeneratedUser />} />
                    <Route path="bill-generated" element={<BillGeneratedUser />} />
                    <Route path="bill-not-generated" element={<BillNotGeneratedUser />} />
                </Route>
                 {/* User Routes */}
       
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/summary" element={<UserSummary />} />
        <Route path="/user/activitybase" element={<UserActivityBase />} />
        <Route path="/user/papersetting" element={<UserPaperSetting />} />
        <Route path="/user/evaluation" element={<UserPaperEvaluation />} />

        </Routes>
        </Router>
    );
};

export default AppRouter;