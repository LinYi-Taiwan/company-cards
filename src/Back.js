import './style/back.css';
import News from './component/News';
import Album from './component/Album';
import Category from './component/Category';
import About from './component/About';
import Member from './component/Member';
import Schedule from './component/Schedule';
import Video from './component/Video';
import Contact from './component/Contact';
const back = () => {
    return (
        <div className="flip-card-back">
            <News></News>
            <Category></Category>
            <About></About>
            <Member></Member>
            <Schedule></Schedule>
            <Album></Album>
            <Video></Video>
            <Contact></Contact>
        </div>
    );
};

export default back;
