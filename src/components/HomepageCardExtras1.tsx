import { FunctionComponent } from "react";
import "./HomepageCardExtras1.css";

const HomepageCardExtras1: FunctionComponent = () => {
  return (
    <section className="corporate-partnerships-wrapper">
      <div className="corporate-partnerships">
        <div className="titletext4">
          <h1 className="corporate-partnerships1">Corporate Partnerships</h1>
          <div className="we-work-with-container">
            <p className="we-work-with">
              We work with 100+ companies to meet accommodation needs in London.
              Offer a dedicated
            </p>
            <p className="booking-manager-that">
              booking manager that can help to find properties for your needs.
            </p>
          </div>
        </div>
        <div className="features2">
          <div className="div15">
            <img
              className="evasearch-outline-icon"
              loading="lazy"
              alt=""
              src="/evasearchoutline.svg"
            />
            <b className="booking-manager">Booking manager</b>
            <div className="we-do-the">We do the searching for you</div>
          </div>
          <div className="div16">
            <img
              className="evaperson-fill-icon"
              loading="lazy"
              alt=""
              src="/evapersonfill.svg"
            />
            <b className="account-manager">Account manager</b>
            <div className="preferred-partner-rates">
              Preferred partner rates
            </div>
          </div>
          <div className="div17">
            <img
              className="evafile-text-fill-icon"
              alt=""
              src="/evafiletextfill.svg"
            />
            <b className="flexible-terms">Flexible terms</b>
            <div className="extend-on-short">Extend on short notice</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCardExtras1;
