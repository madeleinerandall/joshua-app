import "./style.scss";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <section id="actioncard">
      <div className="cards">
        <ul>
          <Link to="/property-and-conveyancing">
            <img src="/cottage.svg" alt="cottage" />
            <h4>Property & Conveyancing</h4>
          </Link>
          <Link to="/personal-injury">
            <img src="/personal_injury.svg" alt="personal injury" />
            <h4>Personal Injury</h4>
          </Link>
          <Link to="/wills-and-estates">
            <img src="/care3.svg" alt="care" />
            <h4>Wills & Estates</h4>
          </Link>
          <a href="https://www.linkedin.com/in/joshua-randall-a43ab462/">
            <img src="/about2.svg" alt="about" />
            <h4>About us</h4>
          </a>
        </ul>
      </div>
    </section>
  );
}
