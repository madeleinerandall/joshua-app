import "./style.scss";
import ActionAreaCard from "../ActionAreaCard/";
import Banner from "../Banner/";
import { Link } from "react-router-dom";
import ScrollToTop from "../../ScrollToTop";

function HomePage() {
  return (
    <main>
      <ScrollToTop />
      <section className="about">
        <div className="gutters">
          <h2 className="padding">
            Sydney Lawyers you can count on. Fast and easy conveyencing.
          </h2>
          <p className="padding">
            For over 10 years Joshua Randall has represented and supported the
            legal interests of a diverse range of individuals and companies
            throughout New South Wales. Putting YOU first is crucial as we
            develop realistic and sustainable legal solutions that work when you
            most need it.
          </p>
        </div>
      </section>
      <ActionAreaCard></ActionAreaCard>
      <Banner></Banner>
      <section className="homecontact">
        <div className="gutters">
          <h2>
            Contact us. Get in touch today for a fast responce within 24hrs.
          </h2>
          <div className="padding">
            <p>
              Randall and Associates are ready to assit you with your legal
              matters. Contact us for fast, easy and affordable service.
            </p>
            <a className="enquire" href="mailto:mail@randallandassoc.com">
              <img className="icon" src="/email.png" alt="email" />
              ENQUIRE ONLINE
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
