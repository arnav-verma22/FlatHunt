import { FunctionComponent } from "react";
import Details from "./Details";
import OptionToBook from "./OptionToBook";
import styles from "./DetailAndBooking.module.css";

const DetailAndBooking: FunctionComponent = () => {
  return (
    <div className={styles.whileLoop}>
      <Details />
      <OptionToBook />
    </div>
  );
};

export default DetailAndBooking;
