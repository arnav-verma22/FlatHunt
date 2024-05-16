import { FunctionComponent } from "react";
import NumberOfResults from "./NumberOfResults";
import PriceCard1 from "./PriceCard1";
import PriceCard from "./PriceCard";
import "./FrameComponent2.css";

const Pricing: FunctionComponent = () => {
  return (
    <section className="landlords-page-child">
      <div className="frame-parent19">
        <NumberOfResults
          results="Pricing"
          area="Compare our pricing model to high street agents"
          propWidth="68.563rem"
          propFlexDirection="row"
          propPadding="0rem var(--padding-xl)"
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
          propWidth1="23.813rem"
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
          propLineHeight1="3.375rem"
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
          propLineHeight2="1.5rem"
          propFontWeight1="unset"
          propWidth3="unset"
          propAlignSelf2="unset"
        />
        <div className="parent">
          <PriceCard1 />
          <div className="data-processor">
            <h1 className="vs">Vs</h1>
          </div>
          <PriceCard />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
