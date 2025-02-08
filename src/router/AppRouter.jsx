import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/Loginpage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/admin/Dashboard";
import ChooseFile from "../pages/admin/choose_file_page";
import Data from "../pages/admin/Data";
import BillGeneratedUser from "../pages/admin/status/BillGeneratedUser";
import BillNotGeneratedUser from "../pages/admin/status/BillNotGeneratedUser";

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
            </Routes>
        </Router>
    );
};

export default AppRouter;