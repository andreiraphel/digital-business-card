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
                <div className="tech-container">
                    <div className="tech">HTML</div>
                    <div className="tech">CSS</div>
                    <div className="tech">JavaScript</div>
                    <div className="tech">Python</div>
                    <div className="tech">C</div>
                    <div className="tech">C++</div>
                    <div className="tech">Flutter</div>
                    <div className="tech">MySQL</div>
                    <div className="tech">PostgreSQL</div>
                    <div className="tech">SQLite</div>
                    <div className="tech">Firebase</div>
                    <div className="tech">React</div>
                    <div className="tech">Node.js</div>
                    <div className="tech">Git</div>
                    <div className="tech">Linux</div>
                </div>
            </div>
            <div className="connect">
                <div className="header connect-header">Connect</div>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-x-twitter"></i> {/* or `fa-twitter` for the old logo */}
                </a>
                <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}