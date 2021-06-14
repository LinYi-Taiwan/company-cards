import '../style/category.css';

const category = () => {
    return (
        <section className="category-container">
            <div className="title">分類</div>
            <div className="link-container">
                <a href="#about">關於添翼</a>
                <a href="#member">添翼藝人</a>
                <a href="#schedule">活動行程</a>
                <a href="#album">出品</a>
                <a href="#contact">聯絡添翼</a>
                <a href="#video">影音</a>
            </div>
        </section>
    );
};

export default category;
