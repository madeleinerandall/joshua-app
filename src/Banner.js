import "./Banner.scss";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section id="banner">
      <div className="banner">
        <h1>
          We make things easy, efficient and worry-free. Talk to us today.
        </h1>
        <Link className="button" to="/contact">
          MORE ABOUT US
        </Link>
        <Link className="button" to="/contact">
          MORE ABOUT US
        </Link>
      </div>
    </section>
  );
}
