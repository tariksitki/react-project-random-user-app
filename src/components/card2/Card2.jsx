
import "./Card2.scss";
import { GiClick } from "react-icons/gi";

const Card2 = () => {
    return (
        <div className="card2">
            <div className="icon-div">
                <GiClick />
            </div>

            <div className="text-div">
                <h2 className="text">Please Click on The Button</h2>
            </div>
        </div>
    )
};

export default Card2;