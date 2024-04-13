const TextInput = ({ type, value, ...props }) => {
    return (
        <input
            type={type}
            value={value}
            className="border border-gray-500 w-full p-2 focus:outline-none mt-1 rounded text-sm"
            {...props}
        />
    );
}
TextInput.propTypes = {
    type: String,
    value: String,
    handleOnChange: Function
}
export default TextInput;