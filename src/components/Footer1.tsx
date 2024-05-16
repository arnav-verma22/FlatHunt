import { FunctionComponent, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./Footer1.css";

const Footer1: FunctionComponent = () => {
  const onBlogText1Click = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <footer className="homepage-child">
      <div className="frame-parent14">
        <div className="logo-container">
          <img className="logo-icon4" alt="" src="/logo-1@2x.png" />
          <div className="icons-copyright-container">
            <div className="icons-copyright2">
              <div className="contact-number-020330744772">
                Contact number: 02033074477
              </div>
              <div className="icons-group">
                <div className="icons2">
                  <img
                    className="evalinkedin-fill-icon2"
                    loading="lazy"
                    alt=""
                    src="/evalinkedinfill.svg"
                  />
                  <img
                    className="evafacebook-fill-icon2"
                    loading="lazy"
                    alt=""
                    src="/evafacebookfill.svg"
                  />
                  <img
                    className="evatwitter-fill-icon2"
                    loading="lazy"
                    alt=""
                    src="/evatwitterfill.svg"
                  />
                </div>
                <div className="flex-living2">© 2021 Flex Living</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent15">
          <div className="company-container">
            <b className="company2">Company</b>
            <div className="home3">Home</div>
            <div className="about-us2">About us</div>
            <div className="our-team2">Our team</div>
          </div>
          <div className="guests-parent1">
            <b className="guests8">Guests</b>
            <div className="blog3" onClick={onBlogText1Click}>
              Blog
            </div>
            <div className="faq2">FAQ</div>
            <div className="career2">Career</div>
          </div>
          <div className="privacy-group">
            <b className="privacy2">Privacy</b>
            <div className="terms-of-service2">Terms of Service</div>
            <div className="privacy-policy2">Privacy Policy</div>
          </div>
        </div>
        <div className="stay-up-to-date-group">
          <b className="stay-up-to2">Stay up to date</b>
          <div className="be-the-first-to-know-about-our-group">
            <div className="be-the-first2">
              Be the first to know about our newest apartments
            </div>
            <TextField
              className="input-email-address2"
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
            className="button-subscribe2"
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

export default Footer1;
