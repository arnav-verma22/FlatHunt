import { FunctionComponent } from "react";
import AllDetails from "./AllDetails";
import styles from "./PropertyDetailsContainer.module.css";

const PropertyDetailsContainer: FunctionComponent = () => {
  return (
    <main className={styles.function}>
      <AllDetails />
    </main>
  );
};

export default PropertyDetailsContainer;
