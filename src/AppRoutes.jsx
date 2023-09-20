import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '@/src/pages/login.jsx';
import ForgotPassword from '@/src/pages/forgotPassword.jsx';
import ResetPassword from '@/src/pages/resetPassword.jsx';
import ManageSchool from '@/src/pages/manageSchool.jsx';
import Whole from '@/src/pages/timetable/whole/whole.jsx';
import SelectTimetable from '@/src/pages/timetable/selectTimetable/selectTimetable.jsx';

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
