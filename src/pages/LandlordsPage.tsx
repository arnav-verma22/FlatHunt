import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import LandLordsPageDetails from "../components/FrameComponent9";
import MoreFeatures from "../components/FrameComponent8";
import Roadmap from "../components/Roadmap";
import BeforeVsAfter from "../components/FrameComponent4";
import NotNeeded from "../components/FrameComponent3";
import Pricing from "../components/FrameComponent2";
import FAQs from "../components/FAQs";
import { useNavigate } from "react-router-dom";
import styles from "./LandlordsPage.module.css";

const LandlordsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <div className={styles.landlordsPage}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <LandLordsPageDetails />
      <MoreFeatures />
      <Roadmap />
      <BeforeVsAfter />
      <NotNeeded />
      <Pricing />
      <FAQs />
      <footer className={styles.landlordsPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.logoParent}>
            <img className={styles.logoIcon} alt="" src="/logo-11@2x.png" />
            <div className={styles.iconsCopyrightWrapper}>
              <div className={styles.iconsCopyright}>
                <div className={styles.contactNumber02033074477}>
                  Contact number: 02033074477
                </div>
                <div className={styles.icon}>
                  <div className={styles.icons}>
                    <img
                      className={styles.evalinkedinFillIcon}
                      alt=""
                      src="/evalinkedinfill2.svg"
                    />
                    <img
                      className={styles.evafacebookFillIcon}
                      alt=""
                      src="/evafacebookfill1.svg"
                    />
                    <img
                      className={styles.evatwitterFillIcon}
                      alt=""
                      src="/evatwitterfill1.svg"
                    />
                  </div>
                  <div className={styles.flexLiving}>© 2021 Flex Living</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.companyParent}>
              <b className={styles.company}>Company</b>
              <div className={styles.home} onClick={onHomeText1Click}>
                Home
              </div>
              <div className={styles.aboutUs}>About us</div>
              <div className={styles.ourTeam}>Our team</div>
            </div>
            <div className={styles.guestsParent}>
              <b className={styles.guests}>Guests</b>
              <div className={styles.blog} onClick={onBlogText1Click}>
                Blog
              </div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.career}>Career</div>
            </div>
            <div className={styles.privacyParent}>
              <b className={styles.privacy}>Privacy</b>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
            </div>
          </div>
          <div className={styles.stayUpToDateParent}>
            <b className={styles.stayUpTo}>Stay up to date</b>
            <div className={styles.beTheFirstToKnowAboutOurParent}>
              <div className={styles.beTheFirst}>
                Be the first to know about our newest apartments
              </div>
              <TextField
                className={styles.inputEmailAddress}
                placeholder="Email address"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "48px",
                    backgroundColor: "#f2f0f2",
                    borderRadius: "12px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#49735a" },
                }}
              />
            </div>
            <Button
              className={styles.buttonSubscribe}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#064749",
                borderRadius: "40px",
                "&:hover": { background: "#064749" },
                width: 158,
                height: 48,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandlordsPage;
