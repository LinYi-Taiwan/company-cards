import '../style/member.css';
import chen from '../image/cheer.jpg';
import lu from '../image/lu.jpg';
import vast from '../image/vast.jpg';
import circle from '../image/name_container1.svg';
const member = () => {
    return (
        <div className="member-container" id="member">
            <div className="title">添翼藝人</div>
            <div className="introduction">
                <img className="person" src={chen} alt="" />
                <div className="name-space">陳綺貞</div>
                {/* <img className="name-space" src={circle} alt="" /> */}
            </div>
            <div className="introduction">
                <img className="person" src={lu} alt="" />
                <div className="name-space">盧廣仲</div>
            </div>
            <div className="introduction">
                <img className="person" src={vast} alt="" />
                <div className="name-space">Vast & Hazy</div>
            </div>
        </div>
    );
};

export default member;
