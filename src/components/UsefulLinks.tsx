import { FunctionComponent } from "react";
import AmenitiesList1 from "./AmenitiesList1";
import "./UsefulLinks.css";

const UsefulLinks: FunctionComponent = () => {
  return (
    <section className="useful-links-wrapper">
      <div className="useful-links">
        <h1 className="useful-links1">Useful links</h1>
        <div className="links">
          <div className="div25">
            <div className="div26">
              <b className="west-london-apartments">West London Apartments</b>
              <img
                className="evaarrow-forward-outline-icon"
                loading="lazy"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className="div27">
              <b className="riverside-apartments">Riverside Apartments</b>
              <img
                className="evaarrow-forward-outline-icon1"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className="div28">
              <b className="apartments-in-finance">
                Apartments in Finance Sector City of London
              </b>
              <img
                className="evaarrow-forward-outline-icon2"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className="div29">
              <b className="apartments-in-soho">Apartments in Soho, Fitrovia</b>
              <img
                className="evaarrow-forward-outline-icon3"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className="div30">
              <b className="east-london-aaprtments">East London Aaprtments</b>
              <img
                className="evaarrow-forward-outline-icon4"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
          </div>
          <AmenitiesList1
            fridge="Suitable for Families or Groups"
            mdifridge="/evaarrowforwardoutline.svg"
            kettle="Apartments with Parking"
            mdikettle="/evaarrowforwardoutline.svg"
            coffeeMachine="Apartments with Elevator"
            mdicoffeeMaker="/evaarrowforwardoutline.svg"
            dishes="Apartments suitable for physical disabilities"
            mdipotSteam="/evaarrowforwardoutline.svg"
            propWidth="unset"
            propPadding="unset"
            propGap="11px"
            propMinWidth="23.688rem"
            propAlignSelf="unset"
            propGap1="9px"
            propDisplay="unset"
            propMinWidth1="unset"
            propColor="4px solid #064749"
            propTextDecoration="underline"
            propFontWeight="bold"
            propHeight="1.25rem"
            propWidth1="1.25rem"
            propAlignSelf1="unset"
            propGap2="10px"
            propColor1="4px solid #064749"
            propDisplay1="unset"
            propMinWidth2="unset"
            propTextDecoration1="underline"
            propFontWeight1="bold"
            propHeight1="1.25rem"
            propWidth2="1.25rem"
            propAlignSelf2="unset"
            propGap3="10px"
            propMinWidth3="unset"
            propColor2="4px solid #064749"
            propDisplay2="unset"
            propTextDecoration2="underline"
            propFontWeight2="bold"
            propHeight2="1.25rem"
            propWidth3="1.25rem"
            propAlignSelf3="unset"
            propGap4="8px"
            propMinWidth4="unset"
            propColor3="4px solid #064749"
            propDisplay3="unset"
            propTextDecoration3="underline"
            propFontWeight3="bold"
            propHeight3="1.25rem"
            propWidth4="1.25rem"
          />
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
