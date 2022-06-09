import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="media gutters">
          <img className="logo2" src="/logo.svg" alt="logo" />

          <ul>
            <h4>Contact Info</h4>
            <p>(02) 8378 7698</p>
            <a href="mailto:mail@randallandassoc.com">
              mail@randallandassoc.com
            </a>
            <Link to="/contact">Video appointments available on request.</Link>
            <p></p>
          </ul>

          <ul>
            <h4>Practice Areas</h4>
            <Link to="/property-and-conveyancing">Property & Conveyancing</Link>
            <Link to="/personal-injury">Personal Injury</Link>
            <Link to="/wills-and-estates">Wills & Estates</Link>
          </ul>

          <ul>
            <h4>Terms & Conditions</h4>
            <Link to="/tc">T & C's</Link>
          </ul>
        </div>
      </section>

      <footer>
        <div className="gutters">
          <p>
            Copyright © Randall & Associates Pty Ltd, 2022. All rights reserved.
          </p>
          <ul className="services">
            <Link to="/">Home</Link>
            {/* <Link to="/#prop">Services</a> */}
            <Link to="/contact">Contact us</Link>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
