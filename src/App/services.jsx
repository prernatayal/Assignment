import Card from "../common/card";
import dummyImg from "../assets/webdesign.webp";

const Services = () => {

    const services = [
        {
            image: dummyImg,
            altText: "s1",
            title: "Website Designing", 
        },
        {
            image: dummyImg,
            altText: "s1",
            title: "Website Development"
        },
        {
            image: dummyImg,
            altText: "s1",
            title: "Digital Marketing"
        },
    ]

    return (
        <div className="mt-8 px-5">
            <h1 className="text-xl uppercase font-semibold font-serif text-center">Our Services</h1>
            <div className="mt-10 grid grid-cols-3 gap-8 px-5">
                {services?.map((item, i) => {
                    return (
                        <div key={i} className="">
                            <Card service={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Services;