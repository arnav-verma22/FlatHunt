import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomePageLocations.module.css";

const HomePageLocations: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonViewAllSpacesClick = useCallback(() => {
    navigate("/booking-page");
  }, [navigate]);

  return (
    <section className={styles.aWorldOfChoiceWrapper}>
      <div className={styles.aWorldOfChoice}>
        <h1 className={styles.chooseYourLocation}>Choose your location</h1>
        <div className={styles.features}>
          <div className={styles.shoreditchParent}>
            <b className={styles.shoreditch}>Shoreditch</b>
            <img
              className={styles.unsplashkzogdvybHmIcon}
              loading="lazy"
              alt=""
              src="/unsplashkzogdvyb-hm@2x.png"
            />
          </div>
          <div className={styles.cityOfLondonParent}>
            <b className={styles.cityOfLondon}>City of London</b>
            <img
              className={styles.unsplashtrpi4zxpaquIcon}
              loading="lazy"
              alt=""
              src="/unsplashtrpi4zxpaqu@2x.png"
            />
          </div>
          <div className={styles.theWestEndParent}>
            <b className={styles.theWestEnd}>The West End</b>
            <img
              className={styles.unsplash7aftbn2jo4Icon}
              loading="lazy"
              alt=""
              src="/unsplash-7aftbn2jo4@2x.png"
            />
          </div>
          <div className={styles.kensingtonParent}>
            <b className={styles.kensington}>Kensington</b>
            <img
              className={styles.unsplashu3gtiojlmpgIcon}
              loading="lazy"
              alt=""
              src="/unsplashu3gtiojlmpg@2x.png"
            />
          </div>
          <div className={styles.kingstonUponThamesParent}>
            <b className={styles.kingstonUponThames}>Kingston-Upon-Thames</b>
            <img
              className={styles.unsplash19szvauj7kaIcon}
              loading="lazy"
              alt=""
              src="/unsplash19szvauj7ka@2x.png"
            />
          </div>
          <div className={styles.hammersmithParent}>
            <b className={styles.hammersmith}>Hammersmith</b>
            <img
              className={styles.unsplashyxlzv4sg4egIcon}
              loading="lazy"
              alt=""
              src="/unsplashyxlzv4sg4eg@2x.png"
            />
          </div>
        </div>
        <Button
          className={styles.buttonViewAllSpaces}
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
