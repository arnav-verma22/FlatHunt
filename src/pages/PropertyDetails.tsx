import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import PropertyDetailsContainer from "../components/PropertyDetailsContainer";
import Footer from "../components/Footer";
import "./PropertyDetails.css";

const PropertyDetails: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLandloardsTextClick = useCallback(() => {
    navigate("/landlords-page");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "Contacts page" to the project
  }, []);

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <div className="property-details">
      <div className="logic-gate">
        <Header
          logo="/logo@2x.png"
          menuAlignSelf="stretch"
          menuFlex="unset"
          onHomeTextClick={onHomeTextClick}
          onLandloardsTextClick={onLandloardsTextClick}
          onBlogTextClick={onBlogTextClick}
          onContactsTextClick={onContactsTextClick}
        />
        <ImageGallery />
      </div>
      <PropertyDetailsContainer />
      <Footer
        logo="/logo-1@2x.png"
        evalinkedinFill="/evalinkedinfill1.svg"
        evafacebookFill="/evafacebookfill.svg"
        evatwitterFill="/evatwitterfill.svg"
        propAlignSelf="unset"
        propPadding="0rem var(--padding-41xl)"
        propWidth="88.75rem"
        propPadding1="unset"
        onHomeText1Click={onHomeText1Click}
        onBlogText1Click={onBlogText1Click}
      />
    </div>
  );
};

export default PropertyDetails;
