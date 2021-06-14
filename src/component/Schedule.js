import '../style/schedule.css';
const schedule = () => {
    return (
        <section className="schedule-container" id="schedule">
            <div className="title">活動行程</div>
            <div className="detail">
                <div className="date">2021/02/02</div>
                <div className="up">
                    <div className="speaker">陳綺貞</div>
                    <div className="type">講座</div>
                </div>
                <div className="content">靠音樂活過三十歲系列講座-台大音樂節</div>
            </div>
            <div className="detail">
                <div className="date">2021/02/05</div>
                <div className="up">
                    <div className="speaker">盧廣仲</div>
                    <div className="type">演出</div>
                </div>
                <div className="content">2020 文化大學校園演唱會</div>
            </div>
            <div className="detail">
                <div className="date">2021/02/02</div>
                <div className="up">
                    <div className="speaker">Vast & Hazy</div>
                    <div className="type">講座</div>
                </div>
                <div className="content">線上直播演唱會</div>
            </div>
        </section>
    );
};

export default schedule;
