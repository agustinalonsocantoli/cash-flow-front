import { Navigate, Outlet } from "react-router-dom"

export const RequireAuth = () => {
    const user = { auth: true }
    
    return !user?.auth ? <Navigate to={"/login"} /> : <Outlet />
}