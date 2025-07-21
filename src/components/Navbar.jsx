import myLogo from "../assets/aa-nobg.png";

export default function Navbar() {
    return (
        <>
            <img src={myLogo} alt="logo" className="my-logo" />
            <ul className="nav-list">
                <li className="nav-option"><a href="#">ABOUT ME</a></li>
                <li className="nav-option"><a href="#">MY WORK</a></li>
                <li className="nav-option"><a href="#">MY RESUME</a></li>
                <li className="nav-option"><a href="#">CONTACT</a></li>
            </ul>
        </>      
    );
}