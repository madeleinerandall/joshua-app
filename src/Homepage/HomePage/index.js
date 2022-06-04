import "./style.scss";
import ActionAreaCard from "../ActionAreaCard/";
import Banner from "../Banner/";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="about">
        <div className="gutters">
          <h2 className="padding">
            Sydney Lawyers you can count on. Fast and easy conveyencing.
          </h2>
          <p className="padding">
            For over 21 years Randall and Associates has represented and
            supported the legal interests of a diverse range of industries,
            companies and brands, both globally and domestically, as well as the
            personal and legal needs of thousands of Australians.
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
      {/* /* <div className="body">
        <h1 id="prop">Property & Conveyancing</h1>
        <h3>Buying or selling property - Conveyancing</h3>
        <p>
          Whether you are you buying or selling property in NSW, or need
          assistance with a caveat or by-law, Randall & Associates aim to
          provide a fast, efficient, reliable and friendly service.
        </p>
        <p>
          At Randall & Associates we understand that the process of buying and
          selling property is a huge decision, involving a lot of time, money
          and effort. With such a large investment, it can be very stressful
          dealing with the legalities of your sale or purchase. That’s why we
          offer a conveyancing service that ensures your property conveyance is
          completed quickly and professionally, so that your transaction is as
          stress free as possible. We will review your contract and guide you
          through the legal process right through to the day of settlement.
        </p>
        <h3>
          Why do you need a lawyer/solicitor/conveyancer for your property
          conveyancing?
        </h3>
        <p>
          Whether buying or selling property, you are entering into a legally
          binding contract. Because the contract will be binding between you and
          the other party, it is essential that you understand the terms of the
          agreement.
        </p>
        <p>
          It is also essential that all any additional searches are undertaken
          in order to find any defects, caveats or restrictions, etc that could
          be attached to the property. If any defects, caveats or restrictions,
          etc are found on the property's title, they have the potential to
          seriously change or restrict your use and enjoyment of the property.
          We will guide you through the process of either buying selling your
          property.
        </p>
        <p>We undertake conveyancing services throughout New South Wales.</p>
        <h3>Other Property Law Practice Areas</h3>
        <p>
          In addition to our conveyancing services, we can also assist you with:
        </p>
        <ul>
          <li>Loan Agreements;</li>
          <li>Leases;</li>
          <li>Transfers and re-financing pursuant to Family Court Orders;</li>
          <li>Strata By-laws;</li>
          <li>Land, Community Title and Strata Subdivision;</li>
          <li>Purchase and Sale of Businesses; and</li>
          <li>Commercial and Retail Leasing</li>
        </ul>
        <p>
          For further information or a free no obligation quote for your
          conveyancing please contact us on (02) 8378 7698 or
          mail@randallandassoc.com.
        </p>
        <h1 id="personal">Personal Injury</h1>
        <h3>Injury Law</h3>
        <p>
          Have you suffered an injury in NSW because of the actions or
          negligence of somebody else? Was your injury caused during a motor
          vehicle incident, or during the course of your employment?
        </p>
        <p>Randall & Associates assist injured people with claims for:</p>
        <ul>
          <li>Workers Compensation;</li>
          <li>Hearing loss;</li>
          <li>Personal Injury; and</li>
          <li>Motor Vehicle Injury.</li>
        </ul>
        <p>
          If you would like us to review the circumstances surrounding your
          injury for a free no obligation check of your potential entitlements,
          contact us on (02) 8378 7698 or mail@randallandassoc.com.
        </p>
        <h1 id="wills">Wills & Estates</h1>
        <p>
          Talking about death is never easy, but not having a legally binding
          will means that after your death you may not be leaving your estate
          (otherwise known as your assets) to the people you want to.
        </p>
        <p>
          Whether you are planning for the future, or need assistance with the
          administration of a deceased estate, Randall & Associates offer a
          variety of services to assist you, including:
        </p>
        <ul>
          <li>Wills and testamentary trusts;</li>
          <li>
            Power of Attorney and Guardianship documents (which allow your
            trusted friends or family members to assist you with the ongoing
            management of your affairs in the circumstances that you are no
            longer able to manage them yourself);
          </li>
          <li>
            Applications for Probate (with a will) and Letters of Administration
            (without a will), which is needed for the administration of an
            estate; and
          </li>
          <li>
            Contested Estates – Not every will is legally binding, and in
            certain cases a will can be contested.
          </li>
        </ul>
        <p>
          For further information or a free no obligation quote for our estate
          services, please contact us on (02) 8378 7698 or
          mail@randallandassoc.com.
        </p>
      </div> */}{" "}
    </main>
  );
}

export default HomePage;
