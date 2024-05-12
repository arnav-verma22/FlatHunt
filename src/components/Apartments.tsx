import { FunctionComponent, memo } from "react";
import PropertyCards from "./PropertyCards";
import Button1 from "./Button1";
import styles from "./Apartments.module.css";

const Apartments: FunctionComponent = memo(() => {
  return (
    <div className={styles.apartments}>
      <PropertyCards />
      <Button1 text="Show more apartments" />
    </div>
  );
});

export default Apartments;
