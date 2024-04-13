const Button = ({ btnText, ...props }) => {
    return (<button
        className="bg-[#15294e] text-white font-semibold rounded-lg px-3 py-2"
        {...props}
    >
        {btnText}
    </button>);
}
Button.propTypes = {
    btnText: String,
}
export default Button;