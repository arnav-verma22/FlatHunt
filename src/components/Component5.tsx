import { FunctionComponent } from "react";
import styles from "./Component5.module.css";

export type Component5Type = {
  evacalendarFill?: string;
  flexibleLiving?: string;
  stayAsLongOrAsLittleAsYou?: string;
  monthContracts?: string;
};

const Component5: FunctionComponent<Component5Type> = ({
  evacalendarFill,
  flexibleLiving,
  stayAsLongOrAsLittleAsYou,
  monthContracts,
}) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.evacalendarFillIcon}
        alt=""
        src={evacalendarFill}
      />
      <b className={styles.flexibleLiving}>{flexibleLiving}</b>
      <div className={styles.stayAsLongContainer}>
        <p className={styles.stayAsLong}>{stayAsLongOrAsLittleAsYou}</p>
        <p className={styles.monthContracts}>{monthContracts}</p>
      </div>
    </div>
  );
};

export default Component5;
