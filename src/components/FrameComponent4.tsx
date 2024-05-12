import { FunctionComponent } from "react";
import BeforeVsAfterImage from "./BeforeVsAfterImage";
import styles from "./FrameComponent4.module.css";

const BeforeVsAfter: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.corporatePartnershipsParent}>
        <h1 className={styles.corporatePartnerships}>Corporate Partnerships</h1>
        <div className={styles.weWorkWithContainer}>
          <p className={styles.weWorkWith}>
            We work with 100+ companies to meet accommodation needs in London.
            Offer a dedicated
          </p>
          <p className={styles.bookingManagerThat}>
            booking manager that can help to find properties for your needs.
          </p>
        </div>
      </div>
      <div className={styles.beforeParent}>
        <BeforeVsAfterImage
          unsplashitC9yfRIM="/unsplashit-c9yfrim@2x.png"
          frame6="Before"
          showUnsplashitC9yfRIMIcon
        />
        <BeforeVsAfterImage
          unsplashitC9yfRIM="/unsplashit-c9yfrim@2x.png"
          frame6="After"
          showUnsplashitC9yfRIMIcon={false}
          propPosition="unset"
          propBorderRadius="12px"
          propBackgroundImage="url('/unsplashit-c9yfrim@2x.png')"
          propBackgroundSize="cover"
          propHeight="unset"
          propWidth="710px"
          propPosition1="relative"
          propMargin="unset"
          propTop="unset"
          propRight="unset"
          propBottom="unset"
          propLeft="unset"
          propOverflow="unset"
          propWidth1="163px"
        />
      </div>
    </section>
  );
};

export default BeforeVsAfter;
