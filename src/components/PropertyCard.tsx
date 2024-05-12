import { FunctionComponent } from "react";
import NumberOfResults from "./NumberOfResults";
import styles from "./PropertyCard.module.css";

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
    <div className={styles.div} onClick={onContainer4Click}>
      <img className={styles.child} alt="" src={image} />
      <div className={styles.text}>
        <img className={styles.titlesubtitleIcon} alt="" src={propertName} />
        <div className={styles.div1}>
          <div className={styles.points}>
            <div className={styles.bedroomBath}>
              <div className={styles.bedroom}>
                <img
                  className={styles.fluentbed24FilledIcon}
                  alt=""
                  src={fluentbed24Filled}
                />
                <div className={styles.bedroom1}>{bedroom}</div>
              </div>
              <div className={styles.bath}>
                <img
                  className={styles.faSolidbathIcon}
                  alt=""
                  src="/fasolidbath1.svg"
                />
                <div className={styles.bath1}>{bath}</div>
              </div>
              <div className={styles.wifi}>
                <img
                  className={styles.evawifiFillIcon}
                  alt=""
                  src="/evawififill1.svg"
                />
                <div className={styles.wifi1}>WiFi</div>
              </div>
            </div>
            <div
              className={styles.cityView}
            >{`City view  |  3rd floor  |  Elevator | Parking `}</div>
          </div>
          <div className={styles.priceavailability}>
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
              propMinWidth="130px"
              propAlignSelf="unset"
              propPosition="relative"
              propColor="#fff"
              propTextAlign="left"
              propDisplay="unset"
              propFlexDirection1="unset"
              propPadding1="unset"
              propFontSize="16px"
              propLineHeight="20px"
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
            <div className={styles.from3490MonthContainer}>
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
