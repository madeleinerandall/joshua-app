import "./Footer.scss";

function Footer() {
  return (
    <>
      <section>
        <div>
          <img className="logo2" src="/logo.jpg" alt="logo" />

          <ul>
            <h4>Contact Info</h4>
            <p>(02) 837 876 98</p>
            <a href="mailto:jrandall@randallandassoc.com">
              jrandall@randallandassoc.com
            </a>
            <p>Video appointments available on request.</p>
          </ul>

          <ul>
            <h4>Practice Areas</h4>
            <a href="#prop">Property & Conveyancing</a>
            <a href="#personal">Personal Injury</a>
            <a href="#wills">Wills & Estates</a>
          </ul>

          <ul>
            <h4>Terms & Conditions</h4>
            <a href="#">T & C's</a>
          </ul>
        </div>
      </section>

      <footer>
        <div>
          <p>
            Copyright © Randall & Associates Pty Ltd, 2022. All rights reserved.
          </p>
          <ul className="services">
            <a href="/">Home</a>
            <a href="#prop">Services</a>
            <a href="">Contact us</a>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
