import { FunctionComponent, memo } from "react";
import SearchBar from "./SearchBar";
import FiltersAndSorting from "./FiltersAndSorting";
import NumberOfResults from "./NumberOfResults";
import styles from "./SearchFilter.module.css";

const SearchFilter: FunctionComponent = memo(() => {
  return (
    <section className={styles.searchFilter}>
      <div className={styles.bg} />
      <SearchBar city="Select a city" />
      <FiltersAndSorting />
      <NumberOfResults results="52 results" area=" in “Springfeild IL”" />
    </section>
  );
});

export default SearchFilter;
