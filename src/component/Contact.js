import '../style/contact.css';
const contact = () => {
    return (
        <section className="contact-container" id="contact">
            <div className="title">聯絡添翼</div>
            <div className="contact-box">
                <div className="contact">
                    <div className="contact-title">活動邀約</div>
                    <div className="contact-method">teamear@gmail.com</div>
                </div>
                <div className="contact">
                    <div className="contact-title">鼓勵添翼/資訊洽詢</div>
                    <div className="contact-method">teamear@gmail.com</div>
                </div>
                <div className="contact">
                    <div className="contact-title">售票客服</div>
                    <div className="contact-method">teamear@gmail.com</div>
                </div>
                <div className="contact">
                    <div className="contact-title">我要投稿</div>
                    <div className="contact-method">teamear@gmail.com</div>
                </div>
            </div>
        </section>
    );
};

export default contact;
