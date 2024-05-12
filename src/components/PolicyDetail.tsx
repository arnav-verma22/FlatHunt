import { FunctionComponent } from "react";
import styles from "./PolicyDetail.module.css";

const PolicyDetail: FunctionComponent = () => {
  return (
    <div className={styles.policyDetail}>
      <div className={styles.policyDetail1}>
        <h1 className={styles.policyDetail2}>Policy detail</h1>
      </div>
      <div className={styles.dataAggregator}>
        <div className={styles.hourseRules}>
          <b className={styles.houseRules}>House rules</b>
          <div className={styles.points}>
            <div className={styles.mapButtonPlus}>
              <img
                className={styles.evaclockFillIcon}
                loading="lazy"
                alt=""
                src="/evaclockfill1.svg"
              />
              <div className={styles.checkinTime}>Checkin time</div>
            </div>
            <div className={styles.mapButtonPlus1}>
              <img
                className={styles.evaclockFillIcon1}
                loading="lazy"
                alt=""
                src="/evaclockfill1.svg"
              />
              <div className={styles.checkoutTime}>Checkout time</div>
            </div>
            <div className={styles.mapButtonPlus2}>
              <img
                className={styles.foundationnoSmokingIcon}
                loading="lazy"
                alt=""
                src="/foundationnosmoking.svg"
              />
              <div className={styles.noSmoking}>No smoking</div>
            </div>
            <div className={styles.mapButtonPlus3}>
              <img
                className={styles.ictwotonePetsIcon}
                loading="lazy"
                alt=""
                src="/ictwotonepets.svg"
              />
              <div className={styles.noPets}>No pets</div>
            </div>
            <div className={styles.mapButtonPlus4}>
              <img
                className={styles.bxbxsPartyIcon}
                loading="lazy"
                alt=""
                src="/bxbxsparty.svg"
              />
              <div className={styles.noPartiesOr}>No parties or events</div>
            </div>
          </div>
        </div>
        <div className={styles.cancellationPolicy}>
          <b className={styles.cancellationPolicy1}>Cancellation Policy</b>
          <div className={styles.div}>
            <img
              className={styles.evacloseCircleFillIcon}
              loading="lazy"
              alt=""
              src="/evaclosecirclefill.svg"
            />
            <div className={styles.freeCancellationUpContainer}>
              <p
                className={styles.freeCancellationUp}
              >{`Free Cancellation up to 24hrs `}</p>
              <p className={styles.beforeCheckin}>before checkin</p>
            </div>
          </div>
        </div>
        <div className={styles.healthSafty}>
          <b className={styles.healthSafty1}>{`Health & Safty`}</b>
          <div className={styles.div1}>
            <img
              className={styles.evashieldFillIcon}
              alt=""
              src="/evashieldfill.svg"
            />
            <div className={styles.cleanerInAccordanceContainer}>
              <p
                className={styles.cleanerInAccordance}
              >{`Cleaner in accordance with our `}</p>
              <p className={styles.covidSafeCleaning}>
                COVID safe cleaning policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDetail;
