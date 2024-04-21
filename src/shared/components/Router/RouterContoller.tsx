import { Flex } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import { RequireAuth } from "./RequireAuth"
import { Dashboard } from "../../../pages/Dashboard/Dashboard"

export const RouterController = () => {
    const user = { auth: true }

    return (
        <Routes>
            <Route
                path='login/*'
                element={
                    !user?.auth
                        ? <Flex />
                        : <Navigate to={"/"} />
                }
            />

            <Route
                path='register/*'
                element={
                    !user?.auth
                        ? <Flex />
                        : <Navigate to={"/"} />
                }
            />

            <Route
                path='*'
                element={
                    !user?.auth
                        ? <Navigate to={"/login"} />
                        : <Navigate to={"/"} />
                }
            />

            <Route element={ <RequireAuth /> } >
                <Route path='/' element={<Dashboard />} />
            </Route>

            <Route element={ <RequireAuth /> } >
                <Route path='activity/*' element={<Flex />} />
            </Route>

            <Route element={ <RequireAuth /> } >
                <Route path='accounts/*' element={<Flex />} />
            </Route>

            <Route element={ <RequireAuth /> } >
                <Route path='profile/*' element={<Flex />} />
            </Route>
        </Routes>
    )
}