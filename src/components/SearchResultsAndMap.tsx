import { FunctionComponent, memo } from "react";
import Apartments from "./Apartments";
import SearchMap from "./SearchMap";
import "./SearchResultsAndMap.css";

const SearchResultsAndMap: FunctionComponent = memo(() => {
  return (
    <section className="logic-gate1">
      <div className="apartments-parent">
        <Apartments />
        <SearchMap />
      </div>
    </section>
  );
});

export default SearchResultsAndMap;
