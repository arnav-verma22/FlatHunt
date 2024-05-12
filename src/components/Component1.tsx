import { FunctionComponent } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  consequatRisus?: string;
  euismodCommodoFeugiatPuru?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  consequatRisus,
  euismodCommodoFeugiatPuru,
}) => {
  return (
    <div className={styles.div}>
      <input className={styles.valueContainer} type="checkbox" />
      <h1 className={styles.consequatRisus}>{consequatRisus}</h1>
      <div className={styles.euismodCommodoFeugiat}>
        {euismodCommodoFeugiatPuru}
      </div>
    </div>
  );
};

export default Component1;
