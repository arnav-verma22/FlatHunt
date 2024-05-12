import { FunctionComponent } from "react";
import NumberOfResults from "./NumberOfResults";
import PriceCard1 from "./PriceCard1";
import PriceCard from "./PriceCard";
import styles from "./FrameComponent2.module.css";

const Pricing: FunctionComponent = () => {
  return (
    <section className={styles.landlordsPageInner}>
      <div className={styles.frameParent}>
        <NumberOfResults
          results="Pricing"
          area="Compare our pricing model to high street agents"
          propWidth="1097px"
          propFlexDirection="row"
          propPadding="0px var(--padding-xl)"
          propGap="unset"
          propFlex="unset"
          propBorderRadius="unset"
          propBackgroundColor="unset"
          propMinWidth="unset"
          propAlignSelf="unset"
          propPosition="unset"
          propColor="unset"
          propTextAlign="unset"
          propDisplay="flex"
          propFlexDirection1="column"
          propPadding1="unset"
          propFontSize="unset"
          propLineHeight="unset"
          propWidth1="381px"
          propGap1="16px"
          propFlex1="unset"
          propBorderRadius1="unset"
          propBackgroundColor1="unset"
          propPosition1="relative"
          propDisplay1="unset"
          propColor1="#181a18"
          propTextAlign1="center"
          propMinWidth1="unset"
          propFontSize1="48px"
          propLineHeight1="54px"
          propFontWeight="700"
          propMargin="0"
          propAlignSelf1="stretch"
          propWidth2="unset"
          propLetterSpacing="unset"
          propPosition2="relative"
          propColor2="#181a18"
          propTextAlign2="left"
          propDisplay2="unset"
          propMinWidth2="unset"
          propFontSize2="18px"
          propLineHeight2="24px"
          propFontWeight1="unset"
          propWidth3="unset"
          propAlignSelf2="unset"
        />
        <div className={styles.parent}>
          <PriceCard1 />
          <div className={styles.dataProcessor}>
            <h1 className={styles.vs}>Vs</h1>
          </div>
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
