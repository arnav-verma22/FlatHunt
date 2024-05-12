import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./PriceCard.module.css";

const PriceCard: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.flexLivingGuaranteed}>
          Flex Living (guaranteed Rental)
        </b>
        <div className={styles.frameWrapper}>
          <div className={styles.fixedPriceParent}>
            <h1 className={styles.fixedPrice}>Fixed price</h1>
            <div className={styles.monthlyWrapper}>
              <div className={styles.monthly}>monthly</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.child} />
      <div className={styles.item} />
      <div className={styles.inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.child1} />
      <div className={styles.child2} />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.evacheckmarkFillWrapper}>
              <img
                className={styles.evacheckmarkFillIcon}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.to5Years}>3 to 5 years</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.evacheckmarkFillContainer}>
              <img
                className={styles.evacheckmarkFillIcon1}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.freeMaintenance}>Free maintenance</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.evacheckmarkFillFrame}>
              <img
                className={styles.evacheckmarkFillIcon2}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.weeklyCleaning}>Weekly cleaning</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.evacheckmarkFillWrapper1}>
              <img
                className={styles.evacheckmarkFillIcon3}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.interiorDesign}>Interior design</div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.evacheckmarkFillWrapper2}>
              <img
                className={styles.evacheckmarkFillIcon4}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.noVoid}>No void</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.evacheckmarkFillWrapper3}>
              <img
                className={styles.evacheckmarkFillIcon5}
                alt=""
                src="/evacheckmarkfill1.svg"
              />
            </div>
            <div className={styles.div1}>£30,000</div>
          </div>
          <div className={styles.buttonGetStartedWrapper}>
            <Button
              className={styles.buttonGetStarted}
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
