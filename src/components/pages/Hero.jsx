import andreiFormal from "../../assets/andrei-formal.JPG";

export default function Hero(){
    return (
        <section className="hero">
            <div className="hero-div">
                <div className="small-info">
                    <div className="small-info-name">
                        ANDREI RAPHEL AMANG
                    </div>
                    <div className="small-info-content">
                        Hi! I am Andrei Raphel Amang, a Computer Engineering Graduate 
                        from Bohol Island State University Batch 2025
                    </div>
                </div>
                <div className="hero-photo">
                    <img src={andreiFormal} alt="Andrei in a Suit" className="andrei-photo" />
                </div> 
            </div>
        </section>
    );
}