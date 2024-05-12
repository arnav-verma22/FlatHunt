import { FunctionComponent } from "react";
import AmenitiesList from "./AmenitiesList";
import styles from "./Amenities.module.css";

const Amenities: FunctionComponent = () => {
  return (
    <div className={styles.amenities}>
      <h1 className={styles.amenities1}>Amenities</h1>
      <AmenitiesList />
    </div>
  );
};

export default Amenities;
