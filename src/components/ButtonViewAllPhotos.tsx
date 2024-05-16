import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ButtonViewAllPhotos.css";

const ButtonViewAllPhotos: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonViewAllPhotosClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  return (
    <Button
      className="button-view-all-photos"
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "18",
        background: "#064749",
        borderRadius: "40px",
        "&:hover": { background: "#064749" },
        width: 203,
        height: 48,
      }}
      onClick={onButtonViewAllPhotosClick}
    >
      View all photos
    </Button>
  );
};

export default ButtonViewAllPhotos;
