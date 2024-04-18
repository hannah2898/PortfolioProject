

export default function Footer() {
    return(
<footer>
        <div className="footer">
            <div className="footer-content">
            <div className="logo"><a className="logo" href="#">Hanna</a></div>
            <div className="Copyright"><p>©2023. All rights reserved</p></div>
            </div>
            <div className="footer-content">
                <p>Contact Us:</p>
                <div className="icons">
                <div className="icon"><a href="#"><img src="../src/assets/images/Facebook.png" alt="facebook icon"/></a></div>
                <div className="icon"><a href="#"><img src="../src/assets/images/Instagram.png" alt="Instagram"/></a></div>
                <div className="icon"><a href="https://www.linkedin.com/in/hanna-george-948b61193/"><img src="../src/assets/images/Linkdn.png" alt="LinkdIn"/></a></div>
            </div>
            </div>
        </div>
    </footer>
    );
}
