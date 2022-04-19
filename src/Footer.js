import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section>
        <div>
          <img className="logo2" src="/logo.svg" alt="logo" />

          <ul>
            <h4>Contact Info</h4>
            <p>(02) 837 876 98</p>
            <a href="mailto:mail@randallandassoc.com">
              mail@randallandassoc.com
            </a>
            <Link to="/contact">Video appointments available on request.</Link>
            <p></p>
          </ul>

          <ul>
            <h4>Practice Areas</h4>
            <a href="/#prop">Property & Conveyancing</a>
            <a href="/#personal">Personal Injury</a>
            <a href="/#wills">Wills & Estates</a>
          </ul>

          <ul>
            <h4>Terms & Conditions</h4>
            <Link to="/tc">T & C's</Link>
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
            <a href="/#prop">Services</a>
            <Link to="/contact">Contact us</Link>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
