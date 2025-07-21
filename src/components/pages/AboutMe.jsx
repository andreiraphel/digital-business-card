import jp1 from "../../assets/japan/jp-1.jpg";
import jp2 from "../../assets/japan/jp-2.jpg";
import jp3 from "../../assets/japan/jp-3.jpg";
import jp4 from "../../assets/japan/jp-4.jpg";
import jp5 from "../../assets/japan/jp-5.jpg";
import jp6 from "../../assets/japan/jp-6.jpg";
import jp7 from "../../assets/japan/jp-7.jpg";
import jp8 from "../../assets/japan/jp-8.jpg";
import jp9 from "../../assets/japan/jp-9.jpg";


const images = [
    jp1, jp2, jp3, jp4, jp5, jp6, jp7,
    jp8, jp9 ];

export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me-div">
                <h1>ABOUT ME</h1>
                <p>
                    Hello! I'm <strong>Andrei Raphel Amang</strong>, a passionate Computer Engineering graduate from
                    <strong> Bohol Island State University</strong>, Batch 2025. I’m deeply interested in software development,
                    system design but my curiosity doesn’t stop there.
                    I also enjoy exploring other fields in tech, like computer hardware, networking, and cybersecurity.
                    I love understanding how all the layers of technology work together, from low-level circuits to high-level code.
                </p>
                <p>
                    I'm currently honing my skills in <strong>React, JavaScript, Python, and PHP</strong> to build fast and scalable applications.
                    Whether it's backend logic or frontend interaction, I enjoy bridging both worlds.
                </p>
                

                <div className="hobbies">
                    <h2>Life Outside Code</h2>
                    <p>
                        Outside of tech, I love exploring and traveling. The furthest I’ve been from home so far is 
                        <strong> Japan!!!</strong> — and it was an unforgettable experience. The culture, the food, the design, 
                        and the technology all deeply inspire me. Visiting Japan for the first time opened my eyes to how big the 
                        world really is and how much more there is to learn, explore, and improve within myself. It was a humbling 
                        and inspiring experience.
                    </p>
                    <p>
                        Here are a few phots I captured during my trip — moments that remind me why I keep pushing forward 
                        in both life and code.
                    </p>
                    <div className="hobby-gallery">
                        {images.map((src, index) => (
                        <img key={index} src={src} alt={`Japan trip ${index + 1}`} />
                        ))}
                    </div>
                    <p>
                        I’m also into gaming and building custom PCs. When I’m not coding, you’ll probably catch me
                        exploring game worlds or tweaking hardware builds.
                    </p>
                </div>
            </div>
        </section>
    );
}