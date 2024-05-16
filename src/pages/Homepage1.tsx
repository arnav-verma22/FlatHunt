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
import "./Homepage1.css";

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
    <div className="homepage">
      <img className="image-icon" alt="" src="/image1@2x.png" />
      <section className="input-collector">
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
        propWidth="32.063rem"
        propFlexDirection="row"
        propPadding="0rem var(--padding-xl) 16.312rem 0rem"
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
        propLineHeight1="3.75rem"
        propFontWeight="700"
        propMargin="0"
        propAlignSelf1="unset"
        propWidth2="19.063rem"
        propLetterSpacing="-0.19px"
        propPosition2="relative"
        propColor2="#181a18"
        propTextAlign2="left"
        propDisplay2="inline-block"
        propMinWidth2="unset"
        propFontSize2="18px"
        propLineHeight2="1.5rem"
        propFontWeight1="unset"
        propWidth3="20.313rem"
        propAlignSelf2="unset"
      />
      <section className="arithmetic-processor">
        <SearchBarComponent
          evasearchFill="/evasearchfill.svg"
          evapeopleFill="/evapeoplefill2.svg"
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
