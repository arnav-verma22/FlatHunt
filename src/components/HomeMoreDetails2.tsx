import { FunctionComponent } from "react";
import Component5 from "./Component5";
import "./HomeMoreDetails2.css";

const HomeMoreDetails2: FunctionComponent = () => {
  return (
    <section className="id-aliquam-wrapper">
      <div className="id-aliquam">
        <div className="titletext4">
          <h1 className="id-aliquam-molestie">
            Id aliquam molestie nunc quis turpis imperdiet quis
          </h1>
          <div className="euismod-condimentum-tempus">
            Euismod condimentum tempus quis nibh. Accumsan imperdiet non
            vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam
            enim adipiscing interdum purus.
          </div>
        </div>
        <div className="features1">
          <Component5
            evacalendarFill="/evacalendarfill-1.svg"
            flexibleLiving="Flexible living"
            stayAsLongOrAsLittleAsYou="Stay as Long or as little as you need with month-to-"
            monthContracts="month contracts"
          />
          <div className="div20">
            <img
              className="mdisofa-icon"
              loading="lazy"
              alt=""
              src="/mdisofa.svg"
            />
            <b className="move-in-ready">Move-in ready</b>
            <div className="ready-to-move">
              Ready to move in with everything you need
            </div>
          </div>
          <Component5
            evacalendarFill="/evawififill.svg"
            flexibleLiving="High-speed Wi-Fi"
            stayAsLongOrAsLittleAsYou="Best in class internet speeds suitable for working "
            monthContracts="from home"
          />
          <div className="div21">
            <img
              className="evamessage-circle-fill-icon"
              loading="lazy"
              alt=""
              src="/evamessagecirclefill.svg"
            />
            <b className="support">24/7 support</b>
            <div className="on-hand-team">
              On hand team for any issues you have
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMoreDetails2;
