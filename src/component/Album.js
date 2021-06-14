import '../style/album.css';
const album = () => {
    return (
        <section className="album-container">
            <div className="title">出品</div>
            <div className="album-box">
                <div className="album">
                    <img
                        className="cover"
                        src="https://www.team-ear.com/upload_image/releases/releases_ea0cafa7e10b9442d6256bf33863550f_272.jpg"
                        alt=""
                    />
                    <div className="album-text-box">
                        <div className="album-text-left">
                            <div className="album-title">Life Box</div>
                            <div className="album-editor">盧廣仲</div>
                        </div>
                        <div className="album-create-time">2021/03/05</div>
                    </div>
                </div>
                <div className="album">
                    <img
                        className="cover"
                        src="https://www.team-ear.com/upload_image/releases/releases_ff7524df703e8707d38b44df397d9cab_272.jpg"
                        alt=""
                    />
                    <div className="album-text-box">
                        <div className="album-text-left">
                            <div className="album-title">完整的我</div>
                            <div className="album-editor">陳綺貞</div>
                        </div>
                        <div className="album-create-time">2021/03/05</div>
                    </div>
                </div>
                <div className="album">
                    <img
                        className="cover"
                        src="https://www.team-ear.com/upload_image/releases/releases_aa3a3566def6f7a6a948af8238508567_272.jpg"
                        alt=""
                    />
                    <div className="album-text-box">
                        <div className="album-text-left">
                            <div className="album-title">Life Box</div>
                            <div className="album-editor">盧廣仲</div>
                        </div>
                        <div className="album-create-time">2021/03/05</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default album;
