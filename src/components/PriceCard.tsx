import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./PriceCard.css";

const PriceCard: FunctionComponent = () => {
  return (
    <div className="div5">
      <div className="rectangle-group">
        <div className="frame-child2" />
        <b className="flex-living-guaranteed">
          Flex Living (guaranteed Rental)
        </b>
        <div className="frame-wrapper4">
          <div className="fixed-price-parent">
            <h1 className="fixed-price">Fixed price</h1>
            <div className="monthly-wrapper">
              <div className="monthly">monthly</div>
            </div>
          </div>
        </div>
      </div>
      <div className="child4" />
      <div className="child5" />
      <div className="child6" />
      <div className="child7" />
      <div className="child8" />
      <div className="child9" />
      <div className="inner2">
        <div className="frame-parent12">
          <div className="frame-parent13">
            <div className="evacheckmark-fill-wrapper4">
              <img
                className="evacheckmark-fill-icon6"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="to-5-years">3 to 5 years</div>
          </div>
          <div className="frame-parent14">
            <div className="evacheckmark-fill-wrapper5">
              <img
                className="evacheckmark-fill-icon7"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="free-maintenance">Free maintenance</div>
          </div>
          <div className="frame-parent15">
            <div className="evacheckmark-fill-wrapper6">
              <img
                className="evacheckmark-fill-icon8"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="weekly-cleaning">Weekly cleaning</div>
          </div>
          <div className="frame-parent16">
            <div className="evacheckmark-fill-wrapper7">
              <img
                className="evacheckmark-fill-icon9"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="interior-design">Interior design</div>
          </div>
          <div className="frame-parent17">
            <div className="evacheckmark-fill-wrapper8">
              <img
                className="evacheckmark-fill-icon10"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="no-void">No void</div>
          </div>
          <div className="frame-parent18">
            <div className="evacheckmark-fill-wrapper9">
              <img
                className="evacheckmark-fill-icon11"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="div6">£30,000</div>
          </div>
          <div className="button-get-started-wrapper">
            <Button
              className="button-get-started"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#064749",
                borderRadius: "40px",
                "&:hover": { background: "#064749" },
                width: 171,
                height: 48,
              }}
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
