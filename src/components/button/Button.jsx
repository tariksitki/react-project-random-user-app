
import "./Button.scss";

const Button = ({handleClick}) => {
    return (
        <div className="button-div">
            <button className="button" onClick={handleClick} >RANDOM USER</button>
        </div>
    )
}

export default Button;