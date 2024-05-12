import { FunctionComponent } from "react";
import AmenitiesList1 from "./AmenitiesList1";
import styles from "./UsefulLinks.module.css";

const UsefulLinks: FunctionComponent = () => {
  return (
    <section className={styles.usefulLinksWrapper}>
      <div className={styles.usefulLinks}>
        <h1 className={styles.usefulLinks1}>Useful links</h1>
        <div className={styles.links}>
          <div className={styles.div}>
            <div className={styles.div1}>
              <b className={styles.westLondonApartments}>
                West London Apartments
              </b>
              <img
                className={styles.evaarrowForwardOutlineIcon}
                loading="lazy"
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className={styles.div2}>
              <b className={styles.riversideApartments}>Riverside Apartments</b>
              <img
                className={styles.evaarrowForwardOutlineIcon1}
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className={styles.div3}>
              <b className={styles.apartmentsInFinance}>
                Apartments in Finance Sector City of London
              </b>
              <img
                className={styles.evaarrowForwardOutlineIcon2}
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className={styles.div4}>
              <b className={styles.apartmentsInSoho}>
                Apartments in Soho, Fitrovia
              </b>
              <img
                className={styles.evaarrowForwardOutlineIcon3}
                alt=""
                src="/evaarrowforwardoutline.svg"
              />
            </div>
            <div className={styles.div5}>
              <b className={styles.eastLondonAaprtments}>
                East London Aaprtments
              </b>
              <img
                className={styles.evaarrowForwardOutlineIcon4}
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
            propMinWidth="379px"
            propAlignSelf="unset"
            propGap1="9px"
            propDisplay="unset"
            propMinWidth1="unset"
            propColor="4px solid #064749"
            propTextDecoration="underline"
            propFontWeight="bold"
            propHeight="20px"
            propWidth1="20px"
            propAlignSelf1="unset"
            propGap2="10px"
            propColor1="4px solid #064749"
            propDisplay1="unset"
            propMinWidth2="unset"
            propTextDecoration1="underline"
            propFontWeight1="bold"
            propHeight1="20px"
            propWidth2="20px"
            propAlignSelf2="unset"
            propGap3="10px"
            propMinWidth3="unset"
            propColor2="4px solid #064749"
            propDisplay2="unset"
            propTextDecoration2="underline"
            propFontWeight2="bold"
            propHeight2="20px"
            propWidth3="20px"
            propAlignSelf3="unset"
            propGap4="8px"
            propMinWidth4="unset"
            propColor3="4px solid #064749"
            propDisplay3="unset"
            propTextDecoration3="underline"
            propFontWeight3="bold"
            propHeight3="20px"
            propWidth4="20px"
          />
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
