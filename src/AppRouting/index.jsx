import {Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux"
import Dashboard from '../App/dashboard'
import SignUp from "../App/signup";
import Login from "../App/login";
const AppRouting = () => {
    const { user } = useSelector((state) => {
        return {
            user: state.user
        }
    })
    const AuthenticatedRouteMiddleware = ({ children }) => {
        if (user?.token) {
            return children
        } else {
            return <SignUp />
        }
    }
    return (
        <div>

            <Routes>
                <Route element={<AuthenticatedRouteMiddleware><Dashboard /></AuthenticatedRouteMiddleware>} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<SignUp />} path="/signup" />
            </Routes>
        </div >
    );
}
export default AppRouting;