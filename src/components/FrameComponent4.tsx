import { FunctionComponent } from "react";
import BeforeVsAfterImage from "./BeforeVsAfterImage";
import "./FrameComponent4.css";

const BeforeVsAfter: FunctionComponent = () => {
  return (
    <section className="frame-parent22">
      <div className="corporate-partnerships-parent">
        <h1 className="corporate-partnerships3">Corporate Partnerships</h1>
        <div className="we-work-with-container2">
          <p className="we-work-with2">
            We work with 100+ companies to meet accommodation needs in London.
            Offer a dedicated
          </p>
          <p className="booking-manager-that2">
            booking manager that can help to find properties for your needs.
          </p>
        </div>
      </div>
      <div className="before-parent">
        <BeforeVsAfterImage
          unsplashitC9yfRIM="/unsplashit-c9yfrim@2x.png"
          frame6="Before"
          showUnsplashitC9yfRIMIcon
        />
        <BeforeVsAfterImage
          unsplashitC9yfRIM="/unsplashit-c9yfrim1@2x.png"
          frame6="After"
          showUnsplashitC9yfRIMIcon={false}
          propPosition="unset"
          propBorderRadius="12px"
          propBackgroundImage="url('/unsplashit-c9yfrim1@2x.png')"
          propBackgroundSize="cover"
          propHeight="unset"
          propWidth="44.375rem"
          propPosition1="relative"
          propMargin="unset"
          propTop="unset"
          propRight="unset"
          propBottom="unset"
          propLeft="unset"
          propOverflow="unset"
          propWidth1="10.188rem"
        />
      </div>
    </section>
  );
};

export default BeforeVsAfter;
