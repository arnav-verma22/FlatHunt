import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styles from "./FrameComponent15.module.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <section className={styles.dictumNuncWrapper}>
      <div className={styles.dictumNunc}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.weRentYourProperty}>
          <h1 className={styles.dictumNunc1}>Dictum nunc</h1>
          <div className={styles.velMattisIntegerPulvinarMoParent}>
            <div
              className={styles.velMattisInteger}
            >{`Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. `}</div>
            <FormControl
              className={styles.buttonBookWithUs}
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
                <MenuItem>Choose city</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent15;
