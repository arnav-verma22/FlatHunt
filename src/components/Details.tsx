import { FunctionComponent } from "react";
import KeyDetails from "./KeyDetails";
import Description from "./Description";
import styles from "./Details.module.css";

const Details: FunctionComponent = () => {
  return (
    <div className={styles.details}>
      <KeyDetails />
      <Description />
    </div>
  );
};

export default Details;
