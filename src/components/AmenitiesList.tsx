import { FunctionComponent } from "react";
import AmenitiesList2 from "./AmenitiesList2";
import AmenitiesList1 from "./AmenitiesList1";
import styles from "./AmenitiesList.module.css";

const AmenitiesList: FunctionComponent = () => {
  return (
    <div className={styles.points}>
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
        propWidth="280px"
        propPadding="0px 0px var(--padding-5xs)"
        propGap="16px"
        propMinWidth="unset"
        propAlignSelf="stretch"
        propGap1="20px"
        propDisplay="unset"
        propMinWidth1="unset"
        propColor="#181a18"
        propTextDecoration="unset"
        propFontWeight="unset"
        propHeight="40px"
        propWidth1="40px"
        propAlignSelf1="stretch"
        propGap2="20px"
        propColor1="#181a18"
        propDisplay1="inline-block"
        propMinWidth2="47px"
        propTextDecoration1="unset"
        propFontWeight1="unset"
        propHeight1="40px"
        propWidth2="40px"
        propAlignSelf2="stretch"
        propGap3="20px"
        propMinWidth3="33px"
        propColor2="#181a18"
        propDisplay2="inline-block"
        propTextDecoration2="unset"
        propFontWeight2="unset"
        propHeight2="40px"
        propWidth3="40px"
        propAlignSelf3="stretch"
        propGap4="20px"
        propMinWidth4="81px"
        propColor3="#181a18"
        propDisplay3="inline-block"
        propTextDecoration3="unset"
        propFontWeight3="unset"
        propHeight3="40px"
        propWidth4="40px"
      />
    </div>
  );
};

export default AmenitiesList;
