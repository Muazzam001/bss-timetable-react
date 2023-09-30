import AppRoutes from "./AppRoutes.jsx";
import {useState} from 'react';
import {TimetableContext} from "./utils/timetableContext.js";

export default function App() {
    const [defaultValue, setDefaultVlaue] = useState("");

    return (
        <TimetableContext.Provider value={{ 
            defaultValue, 
            setDefaultVlaue
            }}>
            <AppRoutes />
        </TimetableContext.Provider>
    );
}
