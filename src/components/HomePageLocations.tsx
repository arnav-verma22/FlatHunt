import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./HomePageLocations.css";

const HomePageLocations: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonViewAllSpacesClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  return (
    <section className="a-world-of-choice-wrapper">
      <div className="a-world-of-choice">
        <h1 className="choose-your-location">Choose your location</h1>
        <div className="features1">
          <div className="shoreditch-parent">
            <b className="shoreditch">Shoreditch</b>
            <img
              className="unsplashkzogdvyb-hm-icon"
              loading="lazy"
              alt=""
              src="/unsplashkzogdvyb-hm@2x.png"
            />
          </div>
          <div className="city-of-london-parent">
            <b className="city-of-london">City of London</b>
            <img
              className="unsplashtrpi4zxpaqu-icon"
              loading="lazy"
              alt=""
              src="/unsplashtrpi4zxpaqu@2x.png"
            />
          </div>
          <div className="the-west-end-parent">
            <b className="the-west-end">The West End</b>
            <img
              className="unsplash-7aftbn2jo4-icon"
              loading="lazy"
              alt=""
              src="/unsplash-7aftbn2jo4@2x.png"
            />
          </div>
          <div className="kensington-parent">
            <b className="kensington">Kensington</b>
            <img
              className="unsplashu3gtiojlmpg-icon"
              loading="lazy"
              alt=""
              src="/unsplashu3gtiojlmpg@2x.png"
            />
          </div>
          <div className="kingston-upon-thames-parent">
            <b className="kingston-upon-thames">Kingston-Upon-Thames</b>
            <img
              className="unsplash19szvauj7ka-icon"
              loading="lazy"
              alt=""
              src="/unsplash19szvauj7ka@2x.png"
            />
          </div>
          <div className="hammersmith-parent">
            <b className="hammersmith">Hammersmith</b>
            <img
              className="unsplashyxlzv4sg4eg-icon"
              loading="lazy"
              alt=""
              src="/unsplashyxlzv4sg4eg@2x.png"
            />
          </div>
        </div>
        <Button
          className="button-view-all-spaces"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#064749",
            borderRadius: "40px",
            "&:hover": { background: "#064749" },
            width: 201,
            height: 48,
          }}
          onClick={onButtonViewAllSpacesClick}
        >
          View all spaces
        </Button>
      </div>
    </section>
  );
};

export default HomePageLocations;
