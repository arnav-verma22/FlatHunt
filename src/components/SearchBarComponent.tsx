import { FunctionComponent, memo, useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./SearchBarComponent.module.css";

export type SearchBarComponentType = {
  evasearchFill?: string;
  evapeopleFill?: string;
  evaplusFill?: string;
  evaminusFill?: string;

  /** Action props */
  onButtonSearchClick?: () => void;
};

const SearchBarComponent: FunctionComponent<SearchBarComponentType> = memo(
  ({
    evasearchFill,
    evapeopleFill,
    evaplusFill,
    evaminusFill,
    onButtonSearchClick,
  }) => {
    const [checkDateTimePickerValue, setCheckDateTimePickerValue] =
      useState(null);
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className={styles.search}>
          <div className={styles.dictionaryProcessor}>
            <div className={styles.selectACity}>
              <div className={styles.eventTrigger}>
                <img
                  className={styles.evasearchFillIcon}
                  loading="lazy"
                  alt=""
                  src={evasearchFill}
                />
              </div>
              <b className={styles.selectACity1}>Select a city</b>
            </div>
          </div>
          <div className={styles.listProcessor} />
          <div className={styles.checkWrapper}>
            <div className={styles.check}>
              <DatePicker
                value={checkDateTimePickerValue}
                onChange={(newValue: any) => {
                  setCheckDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": {
                    textColor: "#181a18",
                    fontSize: 18,
                  },
                  input: {
                    color: "#181a18",
                    fontSize: 18,
                    paddingLeft: 0,
                    textAlign: "left",
                    fontWeight: "700",
                  },
                  "& .MuiInputBase-root": {
                    height: 24,
                    gap: "120px",
                    flexDirection: { flexDirection: "row-reverse" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Move-out",
                  },
                  openPickerIcon: {
                    component: () => (
                      <img
                        width="20px"
                        height="20px"
                        src="/evaarrowforwardfill.svg"
                      />
                    ),
                  },
                }}
              />
            </div>
          </div>
          <div className={styles.listProcessor1} />
          <div className={styles.searchInner}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.evapeopleFillWrapper}>
                  <img
                    className={styles.evapeopleFillIcon}
                    alt=""
                    src={evapeopleFill}
                  />
                </div>
                <b className={styles.guests}>Guests</b>
              </div>
              <div className={styles.evaplusFillParent}>
                <img
                  className={styles.evaplusFillIcon}
                  loading="lazy"
                  alt=""
                  src={evaplusFill}
                />
                <b className={styles.b}>1</b>
                <img
                  className={styles.evaminusFillIcon}
                  loading="lazy"
                  alt=""
                  src={evaminusFill}
                />
              </div>
            </div>
          </div>
          <Button
            className={styles.buttonSearch}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#064749",
              borderRadius: "40px",
              "&:hover": { background: "#064749" },
              width: 134,
              height: 48,
            }}
            onClick={onButtonSearchClick}
          >
            Search
          </Button>
        </div>
      </LocalizationProvider>
    );
  }
);

export default SearchBarComponent;
