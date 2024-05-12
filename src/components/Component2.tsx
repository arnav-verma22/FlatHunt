import { FunctionComponent } from "react";
import styles from "./Component2.module.css";

export type Component2Type = {
  evalockFill?: string;
  guaranteedRent?: string;
  weDoTheSearchingForYou?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  evalockFill,
  guaranteedRent,
  weDoTheSearchingForYou,
}) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.evalockFillIcon}
        loading="lazy"
        alt=""
        src={evalockFill}
      />
      <b className={styles.guaranteedRent}>{guaranteedRent}</b>
      <div className={styles.weDoThe}>{weDoTheSearchingForYou}</div>
    </div>
  );
};

export default Component2;
