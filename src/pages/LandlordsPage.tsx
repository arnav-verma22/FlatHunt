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
import "./LandlordsPage.css";

const LandlordsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogText1Click = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  return (
    <div className="landlords-page">
      <img className="image-icon" alt="" src="/image@2x.png" />
      <LandLordsPageDetails />
      <MoreFeatures />
      <Roadmap />
      <BeforeVsAfter />
      <NotNeeded />
      <Pricing />
      <FAQs />
      <footer className="landlords-page-inner">
        <div className="frame-parent">
          <div className="logo-parent">
            <img className="logo-icon" alt="" src="/logo-11@2x.png" />
            <div className="icons-copyright-wrapper">
              <div className="icons-copyright">
                <div className="contact-number-02033074477">
                  Contact number: 02033074477
                </div>
                <div className="icon">
                  <div className="icons">
                    <img
                      className="evalinkedin-fill-icon"
                      alt=""
                      src="/evalinkedinfill2.svg"
                    />
                    <img
                      className="evafacebook-fill-icon"
                      alt=""
                      src="/evafacebookfill1.svg"
                    />
                    <img
                      className="evatwitter-fill-icon"
                      alt=""
                      src="/evatwitterfill1.svg"
                    />
                  </div>
                  <div className="flex-living">© 2021 Flex Living</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-group">
            <div className="company-parent">
              <b className="company">Company</b>
              <div className="home" onClick={onHomeText1Click}>
                Home
              </div>
              <div className="about-us">About us</div>
              <div className="our-team">Our team</div>
            </div>
            <div className="guests-parent">
              <b className="guests">Guests</b>
              <div className="blog" onClick={onBlogText1Click}>
                Blog
              </div>
              <div className="faq">FAQ</div>
              <div className="career">Career</div>
            </div>
            <div className="privacy-parent">
              <b className="privacy">Privacy</b>
              <div className="terms-of-service">Terms of Service</div>
              <div className="privacy-policy">Privacy Policy</div>
            </div>
          </div>
          <div className="stay-up-to-date-parent">
            <b className="stay-up-to">Stay up to date</b>
            <div className="be-the-first-to-know-about-our-parent">
              <div className="be-the-first">
                Be the first to know about our newest apartments
              </div>
              <TextField
                className="input-email-address"
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
              className="button-subscribe"
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
