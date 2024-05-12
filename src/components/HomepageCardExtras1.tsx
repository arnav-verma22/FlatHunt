import { FunctionComponent } from "react";
import styles from "./HomepageCardExtras1.module.css";

const HomepageCardExtras1: FunctionComponent = () => {
  return (
    <section className={styles.corporatePartnershipsWrapper}>
      <div className={styles.corporatePartnerships}>
        <div className={styles.titletext}>
          <h1 className={styles.corporatePartnerships1}>
            Corporate Partnerships
          </h1>
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
        <div className={styles.features}>
          <div className={styles.div}>
            <img
              className={styles.evasearchOutlineIcon}
              loading="lazy"
              alt=""
              src="/evasearchoutline.svg"
            />
            <b className={styles.bookingManager}>Booking manager</b>
            <div className={styles.weDoThe}>We do the searching for you</div>
          </div>
          <div className={styles.div1}>
            <img
              className={styles.evapersonFillIcon}
              loading="lazy"
              alt=""
              src="/evapersonfill.svg"
            />
            <b className={styles.accountManager}>Account manager</b>
            <div className={styles.preferredPartnerRates}>
              Preferred partner rates
            </div>
          </div>
          <div className={styles.div2}>
            <img
              className={styles.evafileTextFillIcon}
              alt=""
              src="/evafiletextfill.svg"
            />
            <b className={styles.flexibleTerms}>Flexible terms</b>
            <div className={styles.extendOnShort}>Extend on short notice</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageCardExtras1;
