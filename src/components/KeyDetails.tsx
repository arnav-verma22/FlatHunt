import { FunctionComponent } from "react";
import styles from "./KeyDetails.module.css";

const KeyDetails: FunctionComponent = () => {
  return (
    <div className={styles.keyDetails}>
      <div className={styles.apartmentNameLocation}>
        <h1 className={styles.rhoncusSuspendisse}>Rhoncus suspendisse</h1>
        <div className={styles.londonNottingHill}>London, Notting Hill</div>
      </div>
      <div className={styles.points}>
        <div className={styles.bedroomBath}>
          <div className={styles.bedroom}>
            <img
              className={styles.fluentbed24FilledIcon}
              loading="lazy"
              alt=""
              src="/fluentbed24filled.svg"
            />
            <div className={styles.bedroom1}>2 bedroom</div>
          </div>
          <div className={styles.bath}>
            <img
              className={styles.faSolidbathIcon}
              loading="lazy"
              alt=""
              src="/fasolidbath.svg"
            />
            <div className={styles.bath1}>2 bath</div>
          </div>
        </div>
        <div
          className={styles.sqftCity}
        >{`500 sq.ft | City view  |  3rd floor  |  Elevator `}</div>
      </div>
    </div>
  );
};

export default KeyDetails;
