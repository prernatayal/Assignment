const Label = ({labelText})=>{
    return (<p className="font-semibold">{labelText}</p>);
} 

Label.propTypes={
    labelText: String
}

export default Label;
