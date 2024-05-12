import { FunctionComponent } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  morbiPulvinar?: string;
  euVulputateMiCrasQuamLect?: string;
};

const Component: FunctionComponent<ComponentType> = ({
  morbiPulvinar,
  euVulputateMiCrasQuamLect,
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.evaawardFillWrapper}>
        <img
          className={styles.evaawardFillIcon}
          loading="lazy"
          alt=""
          src="/evaawardfill.svg"
        />
      </div>
      <h1 className={styles.morbiPulvinar}>{morbiPulvinar}</h1>
      <div className={styles.euVulputateMi}>{euVulputateMiCrasQuamLect}</div>
    </div>
  );
};

export default Component;
