import "./ActionAreaCard.scss";

export default function ActionAreaCard() {
  return (
    <section id="actioncard">
      <div className="cards">
        <ul>
          <img src="/cottage.svg" alt="cottage" />
          <h4>Property & Conveyancing</h4>
          <p>
            Whether you are you buying or selling property in NSW, or need
            assistance with a caveat or by-law, Randall & Associates aim to
            provide a fast, efficient, reliable and friendly service.
          </p>
        </ul>
        <ul>
          <img src="/personal_injury.svg" alt="personal injury" />
          <h4>Personal Injury</h4>
          <p>
            Have you suffered an injury in NSW because of the actions or
            negligence of somebody else? Was your injury caused during a motor
            vehicle incident, or during the course of your employment?
          </p>
        </ul>
        <ul>
          <img src="/care.svg" alt="care" />
          <h4>Wills & Estates</h4>
          <p>
            Whether you are planning for the future, or need assistance with the
            administration of a deceased estate, Randall & Associates offer a
            variety of services to assist you
          </p>
        </ul>
      </div>
    </section>
  );
}
