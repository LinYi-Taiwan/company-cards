import '../style/video.css';
const video = () => {
    return (
        <section className="video-container" id="video">
            <div className="title">影音</div>
            <iframe
                className="video"
                src="https://www.youtube.com/embed/J_HaRfB3gV0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <div className="video-description">
                盧廣仲 Crowd Lu【Life Box】Official Music Video（THE ALL- NEW FORD 旅玩家 2021 年度主題曲）
            </div>
        </section>
    );
};

export default video;
