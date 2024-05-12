import { FunctionComponent, memo } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FiltersAndSorting.module.css";

const FiltersAndSorting: FunctionComponent = memo(() => {
  return (
    <div className={styles.filtersAnsSorting}>
      <div className={styles.buttons}>
        <div className={styles.filtres}>
          <FormControl
            className={styles.buttonMoreFilters}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#064749",
              borderRadius: "40px",
              width: "100%",
              height: "48px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "48px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "48px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "48px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 18,
                fontWeight: "Bold",
                fontFamily: "Lato",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "20px",
              },
            }}
          >
            <InputLabel color="success" />
            <Select
              color="success"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="20px"
                  height="20px"
                  src="/evaarrowdownfill.svg"
                  style={{ marginRight: "20px" }}
                />
              )}
            >
              <MenuItem>More filters</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className={styles.parking}>
          <div className={styles.text}>
            <img
              className={styles.faSolidcarAltIcon}
              alt=""
              src="/fasolidcaralt1.svg"
            />
            <div className={styles.parking1}>Parking</div>
          </div>
          <img
            className={styles.evacloseFillIcon}
            alt=""
            src="/evaclosefill.svg"
          />
        </div>
      </div>
      <div className={styles.onMapSortBy}>
        <div className={styles.sortBy}>
          <b className={styles.sortBy1}>Sort by:</b>
          <FormControl
            className={styles.availability}
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              borderRadius: "0px 0px 0px 0px",
              width: "60.9375%",
              height: "24px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "24px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "24px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "24px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#49735a",
                fontSize: 18,
                fontWeight: "Bold",
                fontFamily: "Lato",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <InputLabel color="primary" />
            <Select
              color="primary"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="20px"
                  height="20px"
                  src="/evaarrowdownfill-1.svg"
                  style={{}}
                />
              )}
            >
              <MenuItem>Availability</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
      </div>
    </div>
  );
});

export default FiltersAndSorting;
