import { Route, Routes } from "react-router-dom"
import { General } from "./views/General"

export const Dashboard = () => {
    return(
        <Routes>
            <Route 
                index 
                element={
                    <General />
                } 
            />
        </Routes>
    )
}