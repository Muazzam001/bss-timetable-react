import { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import ManageSchool from './pages/ManageSchool';
import Whole from './pages/Whole';

class AppRoutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Login/>}/>
                    <Route path={`/manage-school`} element={<ManageSchool/>}/>
                    <Route path={`/timetable-whole`} element={<Whole/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;
