
import dummyImg from "../assets/webdesign.webp";
import Button from "../common/Button";
import Services from "./services";

const Dashboard = () => {
    return (
        <div>
            <div className="border-b shadow-md flex justify-between items-center p-3 px-5">
                <img src={dummyImg} className="w-20 h-16 rounded" />
                <div className="h-10">
                    <Button btnText={"Logout"} />
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