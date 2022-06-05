import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollToSection2(href) {
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <header>
      <div className="section">
        <img className="phone" src="/phone-icon-white.png" alt="phone" />
        <h2>(02) 8378 7698</h2>

        <div id="mySidenav" className="sidenav">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <a href="/">Home</a>
          <a href="/#prop">Services</a>
          <Link to="/contact">Contact us</Link>
          <Link to="/Tc">T and C's</Link>
        </div>
        <span onClick={openNav}>
          <span className="material-icons md-48">menu</span>
        </span>

        <div className="items">
          <a href="#prop" onClick={scrollToSection}>
            Property & Conveyancing
          </a>

          <a href="#personal" onClick={scrollToSection}>
            Personal Injury
          </a>

          <a onClick={() => scrollToSection2("#wills")}>Wills & Estates</a>

          <Link className="butt" to="/contact">
            <img
              className="bubble"
              src="/speech-bubble.png"
              alt="speech bubble"
            />
            ENQUIRE NOW
          </Link>
        </div>
      </div>

      <div className="hero" />
    </header>
  );
}

export default Header;
