import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import NumberOfResults from "../components/NumberOfResults";
import SearchBarComponent from "../components/SearchBarComponent";
import HomeMoreDetails from "../components/HomeMoreDetails";
import HomeMoreDetails2 from "../components/HomeMoreDetails2";
import HomePageLocations from "../components/HomePageLocations";
import HomepageCardExtras from "../components/HomepageCardExtras";
import HomepageCardExtras1 from "../components/HomepageCardExtras1";
import PeopleReviews from "../components/PeopleReviews";
import ReadOurBlog from "../components/ReadOurBlog";
import UsefulLinks from "../components/UsefulLinks";
import FrameComponent15 from "../components/FrameComponent15";
import Footer1 from "../components/Footer1";
import styles from "./Homepage1.module.css";

const Homepage1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLandloardsTextClick = useCallback(() => {
    navigate("/landlords-page");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "Contacts page" to the project
  }, []);

  const onButtonSearchClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <section className={styles.inputCollector}>
        <Header
          logo="/logo@2x.png"
          menuAlignSelf="unset"
          menuFlex="1"
          onLandloardsTextClick={onLandloardsTextClick}
          onBlogTextClick={onBlogTextClick}
          onContactsTextClick={onContactsTextClick}
        />
      </section>
      <NumberOfResults
        results="We rent your property"
        area="Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. "
        propWidth="513px"
        propFlexDirection="row"
        propPadding="0px var(--padding-xl) 261px 0px"
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
        propPadding1="var(--padding-41xl) var(--padding-xl) var(--padding-41xl) var(--padding-61xl)"
        propFontSize="unset"
        propLineHeight="unset"
        propWidth1="unset"
        propGap1="24px"
        propFlex1="1"
        propBorderRadius1="0px var(--br-41xl) var(--br-41xl) 0px"
        propBackgroundColor1="#fff"
        propPosition1="relative"
        propDisplay1="inline-block"
        propColor1="#181a18"
        propTextAlign1="left"
        propMinWidth1="unset"
        propFontSize1="52px"
        propLineHeight1="60px"
        propFontWeight="700"
        propMargin="0"
        propAlignSelf1="unset"
        propWidth2="305px"
        propLetterSpacing="-0.19px"
        propPosition2="relative"
        propColor2="#181a18"
        propTextAlign2="left"
        propDisplay2="inline-block"
        propMinWidth2="unset"
        propFontSize2="18px"
        propLineHeight2="24px"
        propFontWeight1="unset"
        propWidth3="325px"
        propAlignSelf2="unset"
      />
      <section className={styles.arithmeticProcessor}>
        <SearchBarComponent
          evasearchFill="/evasearchfill.svg"
          evapeopleFill="/evapeoplefill.svg"
          evaplusFill="/evaplusfill.svg"
          evaminusFill="/evaminusfill.svg"
          onButtonSearchClick={onButtonSearchClick}
        />
      </section>
      <HomeMoreDetails />
      <HomeMoreDetails2 />
      <HomePageLocations />
      <HomepageCardExtras />
      <HomepageCardExtras1 />
      <PeopleReviews />
      <ReadOurBlog />
      <UsefulLinks />
      <FrameComponent15 />
      <Footer1 />
    </div>
  );
};

export default Homepage1;
