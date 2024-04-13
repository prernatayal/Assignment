import { useState } from "react";
import dummyImg from "../assets/webdesign.webp";
import Button from "../common/Button";
import Label from "../common/Label";
import TextInput from "../common/TextInput";

const SignUp = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        let [name, value] = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="bg-[#15294e] flex justify-center items-center w-full h-svh font-serif">
            <div className="bg-white w-1/2 rounded-3xl h-1/2 flex shadow-md shadow-[#787878]">
                <div className="w-1/2">
                    <img src={dummyImg} className="w-full h-full rounded-l-3xl" />
                </div>
                <div className="p-5 w-1/2">
                    <h1 className="text-2xl text-center font-bold">SIGNUP</h1>
                    <form className="mt-5" onSubmit={handleSubmit} >
                        <div className="flex flex-col gap-2">
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
                            <Button type="submit" btnText={"Continue & Signup"} />
                        </div>
                        <div className="mt-5 text-center">
                            <p className="text-sm font-medium">Already Registered? <a href="#" className="underline">LOGIN</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignUp;