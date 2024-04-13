
const Card = ({ service }) => {
    return (
        <div className="border shadow-lg rounded">
            <img src={service?.image} className="rounded" alt={service?.altText} /> 
            <p className="p-3 font-semibold text-center text-lg">{service?.title}</p>

        </div>
    );
}

Card.propTypes={
    service: Object
}

export default Card;