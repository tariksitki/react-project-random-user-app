
import "./Card.scss";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";


// firstName, lastName, title, cell, email, image, country, city, registerDate, age

const Card = ({data}) => {
    const {image} = data;
    const {firstName} = data;
    const {lastName} = data;
    const {title} = data;
    const {email} = data;
    const {cell} = data;
    const {city} = data;
    const {country} = data;
    const {age} = data;
    const {registerDate} = data;

    return (
        <div className="card-container">
            <div className="card-row1">
                <div className="image-div left">
                    <img className="image" src= {image} alt="" />
                </div>
                <div className="title-div right">
                    <p className="title-name"> {title} {firstName} {lastName}  </p>
                </div>
            </div>

            <div className="card-row2">
                <div className="email-icon-div left">
                <MdEmail />
                </div>
                <div className="email-div right">
                    <p className="email"> {email}  </p>
                </div>
            </div>

            <div className="card-row3">
                <div className="cell-icon-div left">
                    <BsTelephoneFill />
                </div>
                <div className="cell-div right">
                    {cell}
                </div>
            </div>

            <div className="card-row4">
                <div className="location-icon-div left">
                    <MdLocationPin />
                </div>
                <div className="country-div right">
                    {city} - {country}
                </div>
            </div>

            <div className="card-row5">
                <p className="age"> Age: {age} </p>
                <p> Register Date: {registerDate} </p>
            </div>
        </div>
    )
}

export default Card;