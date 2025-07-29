import andreiPhoto from "../assets/andrei-formal.JPG"

export default function Body() {
    return (
        <div className="body-container">
            <div className="info">
                <div className="photo-container">
                    <img src={andreiPhoto} alt="Andrei Formal Photo" className="photo" />
                </div>
                <h2 className="name">ANDREI RAPHEL AMANG</h2>
                <h4 className="profession">Software Developer</h4>
            </div>
            <div className="contact">
                <div className="header contact-header">Contact</div>
                <p><i class="fas fa-envelope"></i> andreiraphel@gmail.com</p>
                <p><i class="fas fa-phone"></i> +63 993 924 8675</p>
                <p><i class="fas fa-map-marker-alt"></i> Tagbilaran City, Bohol, Philippines</p>
                <p><i class="fas fa-globe"></i> andreiraphel.github.io/my-website/</p>
            </div>
            <div className="core-tech">
                <div className="header core-tech-header">Core Technologies</div>
            </div>
            <div className="connect">
                <div className="header connect-header">Connect</div>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    );
}