import './style/front.css';
import logo from './image/logo.png';
const front = () => {
    return (
        <div className="flip-card-front">
            <img className="logo" src={logo} alt="" />
        </div>
    );
};

export default front;
