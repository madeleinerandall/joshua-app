import "./Header.scss";

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

  return (
    <header>
      <div className="section">
        <h2>Call: (02) 837 876 98</h2>
        <div className="items">
          <a href="#prop" onClick={scrollToSection}>
            Property & Conveyancing
          </a>

          <a href="#personal" onClick={scrollToSection}>
            Personal Injury
          </a>

          <a onClick={() => scrollToSection2("#wills")}>Wills & Estates</a>

          <a className="butt">
            <img
              className="bubble"
              src="/speech-bubble.png"
              alt="speech bubble"
            />
            ENQUIRE NOW
          </a>
        </div>
      </div>
      <img className="logo" src="/logo.jpg" alt="logo" />
    </header>
  );
}

export default Header;
