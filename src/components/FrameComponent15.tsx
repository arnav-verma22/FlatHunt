import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./FrameComponent15.css";

const FrameComponent15: FunctionComponent = () => {
  return (
    <section className="dictum-nunc-wrapper">
      <div className="dictum-nunc">
        <img className="image-icon2" alt="" src="/image2@2x.png" />
        <div className="we-rent-your-property">
          <h1 className="dictum-nunc1">Dictum nunc</h1>
          <div className="vel-mattis-integer-pulvinar-mo-parent">
            <div className="vel-mattis-integer">{`Vel mattis integer pulvinar morbi quis amet eu. In nunc facilisis proin fermentum, consectetur cursus. `}</div>
            <FormControl
              className="button-book-with-us"
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
