
import { removeCookie } from "../CommonFunctions/Cookies";
import dummyImg from "../assets/webdesign.webp";
import Button from "../common/Button";
import { LOGOUT_USER } from "../store/Reducers/user";
import Services from "./services";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        removeCookie("userData")
        dispatch(LOGOUT_USER())
    }
    return (
        <div>
            <div className="border-b shadow-md flex justify-between items-center p-3 px-5">
                <img src={dummyImg} className="w-20 h-16 rounded" />
                <div className="h-10">
                    <Button btnText={"Logout"} onClick={handleLogout} />
                </div>
            </div>
            <div className="mt-4">
                <p className="text-center text-3xl font-semibold">Welcome to Dashboard</p>
            </div>
            <Services />
        </div>
    );
}
export default Dashboard;