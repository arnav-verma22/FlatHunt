import { FunctionComponent, memo } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import "./PostPropertyForm.css";

const PostPropertyForm: FunctionComponent = memo(() => {
  return (
    <div className="form">
      <form className="main">
        <div className="titledescription">
          <h1 className="earn-more-from">
            Earn more from your property, do less
          </h1>
          <div className="find-out-if">
            Find out if your property meets our criteria
          </div>
        </div>
        <div className="form1">
          <div className="inputs">
            <TextField
              className="input-1-big"
              placeholder="Name *"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
                "& .MuiInputBase-input": { color: "#49735a" },
              }}
            />
            <TextField
              className="input-1-big1"
              placeholder="Email *"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
                "& .MuiInputBase-input": { color: "#49735a" },
              }}
            />
            <TextField
              className="input-1-big2"
              placeholder="Phone number *"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                },
                "& .MuiInputBase-input": { color: "#49735a" },
              }}
            />
          </div>
          <div className="property-details1">
            <b className="property-details2">Property details</b>
            <div className="inputs1">
              <FormControl
                className="input-1-big3"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  width: "48.27586206896552%",
                  height: "52px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#49735a",
                    fontSize: 16,
                    fontWeight: "☞",
                    fontFamily: "AvertaCY-Regular",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
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
                  <MenuItem>City *</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <FormControl
                className="input-1-big4"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  width: "48.27586206896552%",
                  height: "52px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "52px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#49735a",
                    fontSize: 16,
                    fontWeight: "☞",
                    fontFamily: "AvertaCY-Regular",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "20px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="20px"
                      height="20px"
                      src="/evaarrowdownfill-1.svg"
                      style={{ marginRight: "20px" }}
                    />
                  )}
                >
                  <MenuItem>Area *</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <FormControl
              className="input-1-big5"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                width: "100%",
                height: "52px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "52px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "52px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "52px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "52px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#49735a",
                  fontSize: 16,
                  fontWeight: "☞",
                  fontFamily: "AvertaCY-Regular",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "20px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="20px"
                    height="20px"
                    src="/evaarrowdownfill-2.svg"
                    style={{ marginRight: "20px" }}
                  />
                )}
              >
                <MenuItem># of bedrooms *</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <Button
          className="button-1-big"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#064749",
            borderRadius: "30px",
            "&:hover": { background: "#064749" },
            width: 137,
            height: 48,
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
});

export default PostPropertyForm;
