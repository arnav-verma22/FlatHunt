import { FunctionComponent } from "react";
import MoreImages from "./MoreImages";
import MoreDetails from "./MoreDetails";
import styles from "./HomeMoreDetails.module.css";

const HomeMoreDetails: FunctionComponent = () => {
  return (
    <section className={styles.homepageInner}>
      <div className={styles.images1Parent}>
        <MoreImages
          image1="/rectangle-225@2x.png"
          image2="/image-15@2x.png"
          image3="/image-14@2x.png"
          image4="/image-13@2x.png"
          unsplashqeIuFR5vPm8IconGap="unset"
          unsplashqeIuFR5vPm8IconMinWidth="416px"
          unsplashqeIuFR5vPm8IconFlex="1"
          propGap="unset"
          propAlignSelf="stretch"
          propRowGap="20px"
          propHeight="unset"
          propWidth="unset"
          propBorderRadius="var(--br-41xl) 0px 0px 0px"
          propMinHeight="189px"
          propAlignSelf1="stretch"
          propFlex="1"
          propOverflow="hidden"
          propMaxHeight="100%"
          propMinWidth="208px"
          propHeight1="unset"
          propWidth1="unset"
          propBorderRadius1="unset"
          propMinHeight1="189px"
          propAlignSelf2="stretch"
          propFlex1="1"
          propOverflow1="hidden"
          propMaxHeight1="100%"
          propMinWidth1="208px"
          propGap1="unset"
          propAlignSelf3="stretch"
          propRowGap1="20px"
          propHeight2="unset"
          propWidth2="unset"
          propBorderRadius2="0px 0px 0px var(--br-41xl)"
          propMinHeight2="189px"
          propAlignSelf4="stretch"
          propFlex2="1"
          propOverflow2="hidden"
          propMaxHeight2="100%"
          propMinWidth2="208px"
          propHeight3="unset"
          propWidth3="unset"
          propBorderRadius3="unset"
          propMinHeight3="189px"
          propAlignSelf5="stretch"
          propFlex3="1"
          propOverflow3="hidden"
          propMaxHeight3="100%"
          propMinWidth3="208px"
        />
        <MoreDetails description="We believe in a world where finding a home is just a click away. " />
      </div>
    </section>
  );
};

export default HomeMoreDetails;
