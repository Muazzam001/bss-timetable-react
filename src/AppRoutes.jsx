import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ManageSchool from './pages/ManageSchool';
import Whole from './pages/Whole';

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Login/>}/>
                    <Route path={`/forgot-password`} element={<ForgotPassword/>}/>
                    <Route path={`/reset-password`} element={<ResetPassword/>}/>
                    <Route path={`/manage-school`} element={<ManageSchool/>}/>
                    <Route path={`/timetable-whole`} element={<Whole/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
