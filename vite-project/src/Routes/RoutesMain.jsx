import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../LoginPage/index.jsx"
import { RegisterPage } from "../RegisterPage/register.jsx"
import{DashboardPage} from "../DashboardPage/index.jsx"

export const RoutesMain = () => {
    return (

        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
    )

}