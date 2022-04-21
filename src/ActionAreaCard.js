import "./ActionAreaCard.scss";

export default function ActionAreaCard() {
  return (
    <section id="actioncard">
      <div className="cards">
        <ul>
          <img src="/cottage.svg" alt="cottage" />
          <h4>Property & Conveyancing</h4>
        </ul>
        <ul>
          <img src="/personal_injury.svg" alt="personal injury" />
          <h4>Personal Injury</h4>
        </ul>
        <ul>
          <img src="/care.svg" alt="care" />
          <h4>Wills & Estates</h4>
        </ul>
      </div>
    </section>
  );
}
