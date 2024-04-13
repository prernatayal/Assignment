import dummyImg from "../assets/webdesign.webp";
import Button from "../common/Button";
import Label from "../common/Label";
import TextInput from "../common/TextInput";
import { login } from "../CommonFunctions/ReqresService";
import { useDispatch } from "react-redux"
import { UPDATE_USER } from "../store/Reducers/user";
import { setCookie } from "../CommonFunctions/Cookies";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Log in
            const loginResponse = await login(formData.email, formData.password);
            const token = loginResponse.token;
            dispatch(UPDATE_USER(loginResponse))
            setCookie('userData', loginResponse, 2);
            navigate("/")
        } catch (error) {
            console.error('Error:', error.message);
        }
    };


    return (
        <div className="bg-[#15294e] flex justify-center items-center w-full h-svh font-serif">
            <div className="bg-white sm:w-1/2 m-4 sm:m-0 rounded-3xl flex flex-col sm:flex-row shadow-md shadow-[#787878]">
                <div className="sm:w-1/2">
                    <img src={dummyImg} className="w-full h-full sm:rounded-l-3xl rounded-t-3xl" />
                </div>
                <div className="p-5 sm:w-1/2">
                    <h1 className="text-2xl text-center font-bold uppercase">Login</h1>
                    <form className="mt-5" onSubmit={handleSubmit} >
                        <div className="flex flex-col gap-2 mt-5">
                            <div className="w-full">
                                <Label labelText={"Email:-"} />
                                <TextInput type={"email"} required={true} value={formData?.email}
                                    name="email"
                                    onChange={handleChange} />
                            </div>
                            <div>
                                <Label labelText={"Password:-"} />
                                <TextInput type={"password"} required={true} value={formData?.password}
                                    name="password"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button type="submit" btnText={"Continue"} />
                        </div>
                        <div className="mt-5 text-center">
                            <p className="text-sm font-medium">Do not have an account? <button onClick={() => navigate("/signup")} className="underline uppercase">Register</button> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;