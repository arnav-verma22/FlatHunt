import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./PriceCard.css";

const PriceCard: FunctionComponent = () => {
  return (
    <div className="div36">
      <div className="rectangle-parent1">
        <div className="frame-child6" />
        <b className="flex-living-guaranteed">
          Flex Living (guaranteed Rental)
        </b>
        <div className="frame-wrapper10">
          <div className="fixed-price-parent">
            <h1 className="fixed-price">Fixed price</h1>
            <div className="monthly-wrapper">
              <div className="monthly">monthly</div>
            </div>
          </div>
        </div>
      </div>
      <div className="child6" />
      <div className="child7" />
      <div className="child8" />
      <div className="child9" />
      <div className="child10" />
      <div className="child11" />
      <div className="inner2">
        <div className="frame-parent30">
          <div className="frame-parent31">
            <div className="evacheckmark-fill-wrapper4">
              <img
                className="evacheckmark-fill-icon7"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="to-5-years">3 to 5 years</div>
          </div>
          <div className="frame-parent32">
            <div className="evacheckmark-fill-wrapper5">
              <img
                className="evacheckmark-fill-icon8"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="free-maintenance">Free maintenance</div>
          </div>
          <div className="frame-parent33">
            <div className="evacheckmark-fill-wrapper6">
              <img
                className="evacheckmark-fill-icon9"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="weekly-cleaning">Weekly cleaning</div>
          </div>
          <div className="frame-parent34">
            <div className="evacheckmark-fill-wrapper7">
              <img
                className="evacheckmark-fill-icon10"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="interior-design">Interior design</div>
          </div>
          <div className="frame-parent35">
            <div className="evacheckmark-fill-wrapper8">
              <img
                className="evacheckmark-fill-icon11"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="no-void">No void</div>
          </div>
          <div className="frame-parent36">
            <div className="evacheckmark-fill-wrapper9">
              <img
                className="evacheckmark-fill-icon12"
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className="div37">£30,000</div>
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
