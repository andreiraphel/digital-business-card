import andreiPhoto from "../assets/andrei-formal.JPG"

export default function Body() {
    return (
        <div className="body-container">
            <div className="info">
                <div className="photo-container">
                    <img src={andreiPhoto} alt="Andrei Formal Photo" className="photo" />
                </div>
                <h1 className="name">Andrei Raphel Amang</h1>
                <h2 className="profession">Software Developer</h2>
            </div>
            <div className="core-tech">
                <h3>Core Technologies</h3>
            </div>
            <div className="contact">
                <h3 className="email">andreiraphel@gmail.com</h3>
                <h3 className="number">+639939248675</h3>
            </div>
            <div className="connect">
                <h3>connect</h3>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    );
}