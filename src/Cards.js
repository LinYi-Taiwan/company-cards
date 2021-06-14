import './style/cards.css';
import Front from './front';
import Back from './Back';
const cards = () => {
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <Front></Front>
                <Back></Back>
            </div>
        </div>
    );
};

export default cards;
