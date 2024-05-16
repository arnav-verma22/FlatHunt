import { FunctionComponent } from "react";
import AmenitiesList2 from "./AmenitiesList2";
import AmenitiesList1 from "./AmenitiesList1";
import "./AmenitiesList.css";

const AmenitiesList: FunctionComponent = () => {
  return (
    <div className="points2">
      <AmenitiesList2 />
      <AmenitiesList1
        fridge="Fridge"
        mdifridge="/mdifridge.svg"
        kettle="Kettle"
        mdikettle="/mdikettle.svg"
        coffeeMachine="Coffee machine"
        mdicoffeeMaker="/mdicoffeemaker.svg"
        dishes="Dishes"
        mdipotSteam="/mdipotsteam.svg"
      />
      <AmenitiesList1
        fridge="Washing machine"
        mdifridge="/mdiwashingmachine.svg"
        kettle="Dryer"
        mdikettle="/mditumbledryer.svg"
        coffeeMachine="Iron"
        mdicoffeeMaker="/mdicurling.svg"
        dishes="Wardrobe"
        mdipotSteam="/mdiwardrobe.svg"
        propWidth="17.5rem"
        propPadding="0rem 0rem var(--padding-5xs)"
        propGap="16px"
        propMinWidth="unset"
        propAlignSelf="stretch"
        propGap1="20px"
        propDisplay="unset"
        propMinWidth1="unset"
        propColor="#181a18"
        propTextDecoration="unset"
        propFontWeight="unset"
        propHeight="2.5rem"
        propWidth1="2.5rem"
        propAlignSelf1="stretch"
        propGap2="20px"
        propColor1="#181a18"
        propDisplay1="inline-block"
        propMinWidth2="2.938rem"
        propTextDecoration1="unset"
        propFontWeight1="unset"
        propHeight1="2.5rem"
        propWidth2="2.5rem"
        propAlignSelf2="stretch"
        propGap3="20px"
        propMinWidth3="2.063rem"
        propColor2="#181a18"
        propDisplay2="inline-block"
        propTextDecoration2="unset"
        propFontWeight2="unset"
        propHeight2="2.5rem"
        propWidth3="2.5rem"
        propAlignSelf3="stretch"
        propGap4="20px"
        propMinWidth4="5.063rem"
        propColor3="#181a18"
        propDisplay3="inline-block"
        propTextDecoration3="unset"
        propFontWeight3="unset"
        propHeight3="2.5rem"
        propWidth4="2.5rem"
      />
    </div>
  );
};

export default AmenitiesList;
