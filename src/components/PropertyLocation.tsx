import { FunctionComponent } from "react";
import styles from "./PropertyLocation.module.css";

const PropertyLocation: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.locationWrapper}>
        <h1 className={styles.location}>Location</h1>
      </div>
      <div className={styles.map}>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
        <div className={styles.buttonPlusParent}>
          <div className={styles.buttonPlus}>
            <img
              className={styles.evaplusFillIcon}
              loading="lazy"
              alt=""
              src="/evaplusfill-1.svg"
            />
          </div>
          <div className={styles.buttonMinus}>
            <img
              className={styles.evaminusFillIcon}
              loading="lazy"
              alt=""
              src="/evaminusfill-1.svg"
            />
          </div>
        </div>
        <div className={styles.wrapper}>
          <img className={styles.icon} loading="lazy" alt="" src="/40.svg" />
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
