import { FunctionComponent } from "react";
import styles from "./AmenitiesList2.module.css";

const AmenitiesList2: FunctionComponent = () => {
  return (
    <div className={styles.tVfridgewashingmachine}>
      <div className={styles.tv}>
        <div className={styles.tv1}>
          <div className={styles.tv2}>TV</div>
          <div className={styles.flatscreenTv}>Flatscreen TV</div>
        </div>
        <img
          className={styles.mditelevisionIcon}
          alt=""
          src="/mditelevision.svg"
        />
      </div>
      <div className={styles.fireplace}>
        <div className={styles.fireplace1}>Fireplace</div>
        <img
          className={styles.mdifireplaceIcon}
          loading="lazy"
          alt=""
          src="/mdifireplace.svg"
        />
      </div>
      <div className={styles.fireplace2}>
        <div className={styles.phone}>Phone</div>
        <img
          className={styles.mdiphoneClassicIcon}
          loading="lazy"
          alt=""
          src="/mdiphoneclassic.svg"
        />
      </div>
      <div className={styles.workDesk}>
        <div className={styles.desk}>
          <div className={styles.workDesk1}>Work desk</div>
          <div className={styles.withComputer}>With computer</div>
        </div>
        <img
          className={styles.mdidesktopMacDashboardIcon}
          loading="lazy"
          alt=""
          src="/mdidesktopmacdashboard.svg"
        />
      </div>
    </div>
  );
};

export default AmenitiesList2;
