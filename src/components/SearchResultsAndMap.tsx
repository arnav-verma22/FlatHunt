import { FunctionComponent, memo } from "react";
import Apartments from "./Apartments";
import SearchMap from "./SearchMap";
import styles from "./SearchResultsAndMap.module.css";

const SearchResultsAndMap: FunctionComponent = memo(() => {
  return (
    <section className={styles.logicGate}>
      <div className={styles.apartmentsParent}>
        <Apartments />
        <SearchMap />
      </div>
    </section>
  );
});

export default SearchResultsAndMap;
