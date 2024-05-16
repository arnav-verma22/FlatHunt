import { FunctionComponent } from "react";
import NumberOfResults from "./NumberOfResults";
import "./PropertyCard.css";

export type PropertyCardType = {
  image?: string;
  fluentbed24Filled?: string;
  bedroom?: string;
  bath?: string;
  prop?: string;
  propertName?: string;

  /** Action props */
  onContainer4Click?: () => void;
};

const PropertyCard: FunctionComponent<PropertyCardType> = ({
  image,
  fluentbed24Filled,
  bedroom,
  bath,
  prop,
  onContainer4Click,
  propertName,
}) => {
  return (
    <div className="div10" onClick={onContainer4Click}>
      <img className="child" alt="" src={image} />
      <div className="text1">
        <img className="titlesubtitle-icon" alt="" src={propertName} />
        <div className="div11">
          <div className="points4">
            <div className="bedroom-bath1">
              <div className="bedroom2">
                <img
                  className="fluentbed-24-filled-icon2"
                  alt=""
                  src={fluentbed24Filled}
                />
                <div className="bedroom3">{bedroom}</div>
              </div>
              <div className="bath2">
                <img
                  className="fa-solidbath-icon2"
                  alt=""
                  src="/fasolidbath1.svg"
                />
                <div className="bath3">{bath}</div>
              </div>
              <div className="wifi">
                <img
                  className="evawifi-fill-icon"
                  alt=""
                  src="/evawififill1.svg"
                />
                <div className="wifi1">WiFi</div>
              </div>
            </div>
            <div className="city-view">{`City view  |  3rd floor  |  Elevator | Parking `}</div>
          </div>
          <div className="priceavailability">
            <NumberOfResults
              results="Available "
              area="28 Nov 2021"
              propWidth="unset"
              propFlexDirection="row"
              propPadding="var(--padding-9xs) var(--padding-xl)"
              propGap="unset"
              propFlex="1"
              propBorderRadius="30px"
              propBackgroundColor="#49735a"
              propMinWidth="8.125rem"
              propAlignSelf="unset"
              propPosition="relative"
              propColor="#fff"
              propTextAlign="left"
              propDisplay="unset"
              propFlexDirection1="unset"
              propPadding1="unset"
              propFontSize="16px"
              propLineHeight="1.25rem"
              propWidth1="unset"
              propGap1="unset"
              propFlex1="unset"
              propBorderRadius1="unset"
              propBackgroundColor1="unset"
              propPosition1="unset"
              propDisplay1="unset"
              propColor1="unset"
              propTextAlign1="unset"
              propMinWidth1="unset"
              propFontSize1="unset"
              propLineHeight1="unset"
              propFontWeight="unset"
              propMargin="unset"
              propAlignSelf1="unset"
              propWidth2="unset"
              propLetterSpacing="unset"
              propPosition2="unset"
              propColor2="unset"
              propTextAlign2="unset"
              propDisplay2="unset"
              propMinWidth2="unset"
              propFontSize2="unset"
              propLineHeight2="unset"
              propFontWeight1="bold"
              propWidth3="unset"
              propAlignSelf2="unset"
            />
            <div className="from-3490-month-container">
              <span>{`from `}</span>
              <b>{prop}</b>
              <span> /month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
