import '../App.css'

export default function Home() {
    return(
        <section id="home">
        <div className="intro">
        <h2 className="text1">Hey There,</h2>
        <h2 className="text2">I'm Hanna</h2>
        <div className="about">
        <p className="para1">I enjoy the journey of</p>
        <p className="para2">turning ideas into code.</p>
    </div>
    </div>
    <div className="intro">
        <div id="Hanna"><img  src="../src/assets/images/Hanna.png" alt="Hanna"/></div>
    </div>
</section>
    );
}