import { FunctionComponent, memo } from "react";
import SearchBar from "./SearchBar";
import FiltersAndSorting from "./FiltersAndSorting";
import NumberOfResults from "./NumberOfResults";
import "./SearchFilter.css";

const SearchFilter: FunctionComponent = memo(() => {
  return (
    <section className="search-filter">
      <div className="bg1" />
      <SearchBar city="Select a city" />
      <FiltersAndSorting />
      <NumberOfResults results="52 results" area=" in “Springfeild IL”" />
    </section>
  );
});

export default SearchFilter;
