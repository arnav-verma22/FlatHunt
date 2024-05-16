import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./Button1.css";

export type Button1Type = {
  text?: string;
  onClick?: string;
};

const Button1: FunctionComponent<Button1Type> = ({ text, onClick }) => {
  return (
    <Button
      className="button-show-more-apartments"
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "18",
        background: "#064749",
        borderRadius: "40px",
        "&:hover": { background: "#064749" },
        width: 266,
        height: 48,
      }}
      href={onClick}
    >
      {text}
    </Button>
  );
};

export default Button1;
