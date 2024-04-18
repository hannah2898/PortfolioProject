

export default function Header() {
  //The return statement below returns a JSX element (one root element but you can have others inside the root element).
  return(

<header>
            <div id="header">
                <div className="logo"><a className="logo" href="#">Hanna</a></div>
                <div className="hamburger-menu">
                    <img src="../src/assets/images/menu.512x341.png" alt="Hamburger Menu"/>
                    <div className="menu-options">
                      <a href="#home">HOME</a>
                      <a href="#skills">SKILLS</a>
                      <a href="#Latest-Works">PROJECTS</a>
                      <a href="#forms">CONTACT</a>
                    </div>
                  </div>
                <nav id="menu-items" className="sidenav">
                    <div className="menu"><a href="#home">HOME</a></div>
                    <div className="menu"><a href="#skills">SKILLS</a></div>
                    <div className="menu"><a href="#Latest-Works">PROJECTS</a></div>
                    <div className="menu"><a href="#forms">CONTACT</a></div>
                </nav>
            </div>
        </header>
  );
}