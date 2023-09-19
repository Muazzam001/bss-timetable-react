import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import ResetPassword from './pages/resetPassword';
import ManageSchool from './pages/manageSchool';
import Whole from './pages/timetable/whole/whole';
import SelectTimetable from './pages/timetable/selectTimetable/selectTimetable';


class AppRoutes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path={`/`} element={<Login />} />
					<Route path={`/forgot-password`} element={<ForgotPassword />} />
					<Route path={`/reset-password`} element={<ResetPassword />} />
					<Route path={`/manage-school`} element={<ManageSchool />} />
					<Route path={`/timetable-whole`} element={<Whole />} />
					<Route path={`/select-timetable`} element={<SelectTimetable />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default AppRoutes
