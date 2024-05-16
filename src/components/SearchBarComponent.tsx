import { FunctionComponent, memo, useState } from "react";
import { TextField, Icon, Button } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./SearchBarComponent.css";

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
        <div className="search">
          <div className="dictionary-processor">
            <div className="select-a-city">
              <div className="event-trigger">
                <img
                  className="evasearch-fill-icon"
                  loading="lazy"
                  alt=""
                  src={evasearchFill}
                />
              </div>
              <b className="select-a-city1">Select a city</b>
            </div>
          </div>
          <div className="list-processor" />
          <div className="check-wrapper">
            <div className="check1">
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
          <div className="list-processor1" />
          <div className="search-inner">
            <div className="frame-parent30">
              <div className="frame-parent31">
                <div className="evapeople-fill-wrapper">
                  <img
                    className="evapeople-fill-icon3"
                    alt=""
                    src={evapeopleFill}
                  />
                </div>
                <b className="guests7">Guests</b>
              </div>
              <div className="evaplus-fill-parent">
                <img
                  className="evaplus-fill-icon3"
                  loading="lazy"
                  alt=""
                  src={evaplusFill}
                />
                <b className="b9">1</b>
                <img
                  className="evaminus-fill-icon3"
                  loading="lazy"
                  alt=""
                  src={evaminusFill}
                />
              </div>
            </div>
          </div>
          <Button
            className="button-search"
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
