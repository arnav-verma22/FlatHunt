import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import NumberOfResults from "../components/NumberOfResults";
import FrameComponent from "../components/FrameComponent";
import styles from "./Filtres.module.css";

const Filtres: FunctionComponent = () => {
  const onIconClick = useCallback(() => {
    // Please sync "Menu open – mob" to the project
  }, []);

  const onButtonBackClick = useCallback(() => {
    // Please sync "Dates" to the project
  }, []);

  const onButtonContinueClick = useCallback(() => {
    // Please sync "Booking page" to the project
  }, []);

  return (
    <div className={styles.filtres}>
      <header className={styles.menuMob}>
        <div className={styles.logo}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo1@2x.png"
          />
        </div>
        <div className={styles.iconWrapper}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon.svg"
            onClick={onIconClick}
          />
        </div>
      </header>
      <div className={styles.filtresInner}>
        <NumberOfResults
          results="London"
          area="24.02 – 28.02"
          propWidth="unset"
          propFlexDirection="column"
          propPadding="unset"
          propGap="4px"
          propFlex="unset"
          propBorderRadius="unset"
          propBackgroundColor="unset"
          propMinWidth="unset"
          propAlignSelf="unset"
          propPosition="unset"
          propColor="unset"
          propTextAlign="unset"
          propDisplay="flex"
          propFlexDirection1="row"
          propPadding1="0px var(--padding-3xs)"
          propFontSize="unset"
          propLineHeight="unset"
          propWidth1="unset"
          propGap1="unset"
          propFlex1="unset"
          propBorderRadius1="unset"
          propBackgroundColor1="unset"
          propPosition1="relative"
          propDisplay1="inline-block"
          propColor1="#000"
          propTextAlign1="left"
          propMinWidth1="67px"
          propFontSize1="20px"
          propLineHeight1="24px"
          propFontWeight="unset"
          propMargin="unset"
          propAlignSelf1="unset"
          propWidth2="unset"
          propLetterSpacing="unset"
          propPosition2="relative"
          propColor2="#181a18"
          propTextAlign2="left"
          propDisplay2="inline-block"
          propMinWidth2="87px"
          propFontSize2="14px"
          propLineHeight2="18px"
          propFontWeight1="unset"
          propWidth3="unset"
          propAlignSelf2="unset"
        />
      </div>
      <main className={styles.filtresChild}>
        <FrameComponent />
      </main>
      <footer className={styles.backButtonWrapper}>
        <div className={styles.backButton}>
          <Button
            className={styles.buttonBack}
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#181a18",
              fontSize: "16",
              borderColor: "#064749",
              borderRadius: "40px",
              "&:hover": { borderColor: "#064749" },
              width: 99,
              height: 44,
            }}
            onClick={onButtonBackClick}
          >
            Back
          </Button>
          <Button
            className={styles.buttonContinue}
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#064749",
              borderRadius: "40px",
              "&:hover": { background: "#064749" },
              width: 130,
              height: 44,
            }}
            onClick={onButtonContinueClick}
          >
            Continue
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Filtres;
