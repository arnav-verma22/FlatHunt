import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";
import styles from "./SearchBar.module.css";

export type SearchBarType = {
  city?: string;
};

const SearchBar: FunctionComponent<SearchBarType> = memo(
  ({ city = "Select a city" }) => {
    const navigate = useNavigate();

    const onButtonSearchClick = useCallback(() => {
      navigate("/booking-page");
    }, [navigate]);

    return (
      <div className={styles.searchWrapper}>
        <SearchBarComponent
          evasearchFill="/evasearchfill.svg"
          evapeopleFill="/evapeoplefill.svg"
          evaplusFill="/evaplusfill1.svg"
          evaminusFill="/evaminusfill.svg"
          onButtonSearchClick={onButtonSearchClick}
        />
      </div>
    );
  }
);

export default SearchBar;
