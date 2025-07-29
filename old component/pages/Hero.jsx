import andreiFormal from "../../assets/andrei-formal.JPG";

export default function Hero(){
    return (
        <section className="hero">
            <div className="hero-div">
                <div className="small-info">
                    <div className="small-info-position">
                        Software Engineer
                    </div>
                    <div className="small-info-name">
                        ANDREI RAPHEL AMANG
                    </div>
                    <div className="small-info-content">
                        Hey there! I'm Andrei, a fresh Computer Engineering graduate
                         who loves to build, code, and learn. I enjoy creating cool 
                         stuff on the web and leveling up my dev skills every day.
                    </div>
                </div>
                <div className="hero-photo">
                    <img src={andreiFormal} alt="Andrei in a Suit" className="andrei-photo" />
                </div> 
            </div>
        </section>
    );
}