import { FunctionComponent } from "react";
import MoreImages from "./MoreImages";
import MoreDetails from "./MoreDetails";
import "./HomeMoreDetails.css";

const HomeMoreDetails: FunctionComponent = () => {
  return (
    <section className="homepage-inner">
      <div className="images-1-parent">
        <MoreImages
          image1="/rectangle-225@2x.png"
          image2="/image-15@2x.png"
          image3="/image-14@2x.png"
          image4="/image-13@2x.png"
          unsplashqeIuFR5vPm8IconGap="unset"
          unsplashqeIuFR5vPm8IconMinWidth="26rem"
          unsplashqeIuFR5vPm8IconFlex="1"
          propGap="unset"
          propAlignSelf="stretch"
          propRowGap="20px"
          propHeight="unset"
          propWidth="unset"
          propBorderRadius="var(--br-41xl) 0px 0px 0px"
          propMinHeight="11.813rem"
          propAlignSelf1="stretch"
          propFlex="1"
          propOverflow="hidden"
          propMaxHeight="100%"
          propMinWidth="13rem"
          propHeight1="unset"
          propWidth1="unset"
          propBorderRadius1="unset"
          propMinHeight1="11.813rem"
          propAlignSelf2="stretch"
          propFlex1="1"
          propOverflow1="hidden"
          propMaxHeight1="100%"
          propMinWidth1="13rem"
          propGap1="unset"
          propAlignSelf3="stretch"
          propRowGap1="20px"
          propHeight2="unset"
          propWidth2="unset"
          propBorderRadius2="0px 0px 0px var(--br-41xl)"
          propMinHeight2="11.813rem"
          propAlignSelf4="stretch"
          propFlex2="1"
          propOverflow2="hidden"
          propMaxHeight2="100%"
          propMinWidth2="13rem"
          propHeight3="unset"
          propWidth3="unset"
          propBorderRadius3="unset"
          propMinHeight3="11.813rem"
          propAlignSelf5="stretch"
          propFlex3="1"
          propOverflow3="hidden"
          propMaxHeight3="100%"
          propMinWidth3="13rem"
        />
        <MoreDetails description="We believe in a world where finding a home is just a click away. " />
      </div>
    </section>
  );
};

export default HomeMoreDetails;
