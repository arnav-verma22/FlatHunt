import { FunctionComponent } from "react";
import NumberOfResults from "./NumberOfResults";
import styles from "./PriceCard1.module.css";

const PriceCard1: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.highStreetAgents}>High Street Agents</b>
        <div className={styles.frameWrapper}>
          <NumberOfResults
            results="12% "
            area="management fee"
            propWidth="unset"
            propFlexDirection="column"
            propPadding="unset"
            propGap="8px"
            propFlex="unset"
            propBorderRadius="unset"
            propBackgroundColor="unset"
            propMinWidth="unset"
            propAlignSelf="unset"
            propPosition="unset"
            propColor="unset"
            propTextAlign="unset"
            propDisplay="flex"
            propFlexDirection1="row"
            propPadding1="0px var(--padding-sm) 0px var(--padding-mini-5)"
            propFontSize="unset"
            propLineHeight="unset"
            propWidth1="unset"
            propGap1="unset"
            propFlex1="unset"
            propBorderRadius1="unset"
            propBackgroundColor1="unset"
            propPosition1="relative"
            propDisplay1="inline-block"
            propColor1="#181a18"
            propTextAlign1="center"
            propMinWidth1="103px"
            propFontSize1="52px"
            propLineHeight1="60px"
            propFontWeight="unset"
            propMargin="unset"
            propAlignSelf1="unset"
            propWidth2="unset"
            propLetterSpacing="unset"
            propPosition2="relative"
            propColor2="#181a18"
            propTextAlign2="center"
            propDisplay2="unset"
            propMinWidth2="unset"
            propFontSize2="18px"
            propLineHeight2="24px"
            propFontWeight1="unset"
            propWidth3="unset"
            propAlignSelf2="unset"
          />
        </div>
      </div>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.child1} />
      <div className={styles.child2} />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.evacheckmarkFillWrapper}>
              <img
                className={styles.evacheckmarkFillIcon}
                loading="lazy"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.to12Months}>6 to 12 months</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.evacheckmarkFillContainer}>
              <img
                className={styles.evacheckmarkFillIcon1}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.noMaintenance}>No maintenance</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.evacheckmarkFillFrame}>
              <img
                className={styles.evacheckmarkFillIcon2}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.noWeeklyCleaning}>No weekly cleaning</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.evacheckmarkFillWrapper1}>
              <img
                className={styles.evacheckmarkFillIcon3}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.noInteriorDesign}>No interior design</div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.evacheckmarkFillWrapper2}>
              <img
                className={styles.evacheckmarkFillIcon4}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.void}>5% void</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.evacheckmarkFillWrapper3}>
              <img
                className={styles.evacheckmarkFillIcon5}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.div1}>£24,900</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard1;
