import dummyImg from "../assets/webdesign.webp";
import Button from "../common/Button";
import Label from "../common/Label";
import TextInput from "../common/TextInput";

const Login = () => {
    return (
        <div className="bg-[#15294e] flex justify-center items-center w-full h-svh font-serif">
            <div className="bg-white w-1/2 rounded-3xl h-1/2 flex shadow-md shadow-[#787878]">
                <div className="w-1/2">
                    <img src={dummyImg} className="w-full h-full rounded-l-3xl" />
                </div>
                <div className="p-5 w-1/2">
                    <h1 className="text-2xl text-center font-bold uppercase">Login</h1>
                    <form className="mt-5">
                        <div className="flex flex-col gap-2 mt-5">
                            <div className="w-full">
                                <Label labelText={"Username:-"} />
                                <TextInput type={"text"} />
                            </div>
                            <div>
                                <Label labelText={"Password:-"} />
                                <TextInput type={"password"} />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Button btnText={"Continue"} />
                        </div>
                        <div className="mt-5 text-center">
                            <p className="text-sm font-medium">Do not have an account? <a href="#" className="underline uppercase">Register</a> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;