import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Footer.css";

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
    <footer className="data-container" style={dataContainerStyle}>
      <div className="shape-handler">
        <div className="logo-group" style={frameDiv1Style}>
          <img className="logo-icon3" alt="" src={logo} />
          <div className="layer-sorter">
            <div className="icons-copyright1">
              <div className="contact-number-020330744771">
                Contact number: 02033074477
              </div>
              <div className="icons-parent">
                <div className="icons1">
                  <img
                    className="evalinkedin-fill-icon1"
                    loading="lazy"
                    alt=""
                    src={evalinkedinFill}
                  />
                  <img
                    className="evafacebook-fill-icon1"
                    alt=""
                    src={evafacebookFill}
                  />
                  <img
                    className="evatwitter-fill-icon1"
                    alt=""
                    src={evatwitterFill}
                  />
                </div>
                <div className="flex-living1">© 2021 Flex Living</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="company-group">
            <b className="company1">Company</b>
            <div className="home2" onClick={onHomeText1Click}>
              Home
            </div>
            <div className="about-us1">About us</div>
            <div className="our-team1">Our team</div>
          </div>
          <div className="guests-container">
            <b className="guests6">Guests</b>
            <div className="blog2" onClick={onBlogText1Click}>
              Blog
            </div>
            <div className="faq1">FAQ</div>
            <div className="career1">Career</div>
          </div>
          <div className="symbol-linker">
            <b className="privacy1">Privacy</b>
            <div className="terms-of-service1">Terms of Service</div>
            <div className="privacy-policy1">Privacy Policy</div>
          </div>
        </div>
        <div className="instance-maker">
          <div className="style-manager">
            <b className="stay-up-to1">Stay up to date</b>
            <div className="be-the-first1">
              Be the first to know about our newest apartments
            </div>
          </div>
          <TextField
            className="input-email-address1"
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
            className="button-subscribe1"
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
