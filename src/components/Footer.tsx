import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./Footer.module.css";

export type FooterType = {
  logo?: string;
  evalinkedinFill?: string;
  evafacebookFill?: string;
  evatwitterFill?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];

  /** Action props */
  onHomeText1Click?: () => void;
  onBlogText1Click?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  logo,
  evalinkedinFill,
  evafacebookFill,
  evatwitterFill,
  propAlignSelf,
  propPadding,
  propWidth,
  propPadding1,
  onHomeText1Click,
  onBlogText1Click,
}) => {
  const dataContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <footer className={styles.dataContainer} style={dataContainerStyle}>
      <div className={styles.shapeHandler}>
        <div className={styles.logoParent} style={frameDiv1Style}>
          <img className={styles.logoIcon} alt="" src={logo} />
          <div className={styles.layerSorter}>
            <div className={styles.iconsCopyright}>
              <div className={styles.contactNumber02033074477}>
                Contact number: 02033074477
              </div>
              <div className={styles.iconsParent}>
                <div className={styles.icons}>
                  <img
                    className={styles.evalinkedinFillIcon}
                    loading="lazy"
                    alt=""
                    src={evalinkedinFill}
                  />
                  <img
                    className={styles.evafacebookFillIcon}
                    alt=""
                    src={evafacebookFill}
                  />
                  <img
                    className={styles.evatwitterFillIcon}
                    alt=""
                    src={evatwitterFill}
                  />
                </div>
                <div className={styles.flexLiving}>© 2021 Flex Living</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
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
          <div className={styles.symbolLinker}>
            <b className={styles.privacy}>Privacy</b>
            <div className={styles.termsOfService}>Terms of Service</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.instanceMaker}>
          <div className={styles.styleManager}>
            <b className={styles.stayUpTo}>Stay up to date</b>
            <div className={styles.beTheFirst}>
              Be the first to know about our newest apartments
            </div>
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
  );
};

export default Footer;
