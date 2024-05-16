import { FunctionComponent } from "react";
import Component2 from "./Component2";
import "./FrameComponent8.css";

const MoreFeatures: FunctionComponent = () => {
  return (
    <section className="corporate-partnerships-container">
      <div className="corporate-partnerships2">
        <div className="titletext11">
          <h1 className="better-than-property">
            Better than Property Management
          </h1>
          <div className="we-work-with-container1">
            <p className="we-work-with1">
              We work with 100+ companies to meet accommodation needs in London.
              Offer a dedicated
            </p>
            <p className="booking-manager-that1">
              booking manager that can help to find properties for your needs.
            </p>
          </div>
        </div>
        <div className="features3">
          <Component2
            evalockFill="/evalockfill.svg"
            guaranteedRent="Guaranteed rent"
            weDoTheSearchingForYou="We do the searching for you"
          />
          <Component2
            evalockFill="/evapricetagsfill.svg"
            guaranteedRent="No fees"
            weDoTheSearchingForYou="Preferred partner rates"
          />
          <Component2
            evalockFill="/icroundapartment.svg"
            guaranteedRent="No voids"
            weDoTheSearchingForYou="Preferred partner rates"
          />
          <Component2
            evalockFill="/fluentaccesstime24filled.svg"
            guaranteedRent="24/7 maintenance"
            weDoTheSearchingForYou="Extend on short notice"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
