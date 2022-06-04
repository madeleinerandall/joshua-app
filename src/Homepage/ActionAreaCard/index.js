import "./style.scss";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <section id="actioncard">
      <div className="cards">
        <ul>
          <Link to="">
            <img src="/cottage.svg" alt="cottage" />
            <h4>Property & Conveyancing</h4>
          </Link>
          <Link to="">
            <img src="/personal_injury.svg" alt="personal injury" />
            <h4>Personal Injury</h4>
          </Link>
          <Link to="">
            <img src="/care3.svg" alt="care" />
            <h4>Wills & Estates</h4>
          </Link>
          <Link to="">
            <img src="/about2.svg" alt="about" />
            <h4>About us</h4>
          </Link>
        </ul>
      </div>
    </section>
  );
}
