import '../style/news.css';
import logo from '../image/logo.png';
import chen_album from '../image/chen_album.jpeg';
import lu_album from '../image/lu_album.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Carousel } from 'react-responsive-carousel';

const news = () => {
    return (
        <section className="carousel-container">
            <div className="title">最新消息</div>
            <Carousel showArrows={false} showThumbs={false} showStatus={false}>
                <div>
                    <img className="carousel-img" src={lu_album} alt="" />
                    <div className="description">「每個人的初戀，都跟史詩電影一樣偉大。」</div>
                </div>
                <div>
                    <img className="carousel-img" src={chen_album} alt="" />
                    <div className="description">生活是拼圖，不完美的片段，造就完整生命。</div>
                </div>
                <div>
                    <img src={logo} className="carousel-img" alt="" />
                    <div className="description">添翼</div>
                </div>
            </Carousel>
        </section>
    );
};

export default news;
