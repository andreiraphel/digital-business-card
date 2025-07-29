import myLogo from "../assets/aa-nobg.png";

export default function Navbar() {
    return (
        <>
            <a href="/" ><img src={myLogo} alt="logo" className="my-logo" /></a>
            <ul className="nav-list">
                <li className="nav-option"><a href="#">ABOUT ME</a></li>
                <li className="nav-option"><a href="#">MY WORK</a></li>
                <li className="nav-option"><a href="#">MY RESUME</a></li>
                <li className="nav-option"><a href="#">CONTACT</a></li>
            </ul>
        </>      
    );
}