import { FunctionComponent, memo } from "react";
import styles from "./SearchMap.module.css";

const SearchMap: FunctionComponent = memo(() => {
  return (
    <div className={styles.map}>
      <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      <div className={styles.buttonPlusParent}>
        <div className={styles.buttonPlus}>
          <img
            className={styles.evaplusFillIcon}
            alt=""
            src="/evaplusfill-11.svg"
          />
        </div>
        <div className={styles.buttonMinus}>
          <img
            className={styles.evaminusFillIcon}
            alt=""
            src="/evaminusfill-1.svg"
          />
        </div>
      </div>
      <div className={styles.mapInner}>
        <div className={styles.bgParent}>
          <div className={styles.bg} />
          <b className={styles.b}>2</b>
        </div>
      </div>
      <div className={styles.mapChild}>
        <div className={styles.frameParent}>
          <div className={styles.bgGroup}>
            <div className={styles.bg1} />
            <b className={styles.b1}>20</b>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.bgContainer}>
              <div className={styles.bg2} />
              <b className={styles.b2}>12</b>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.bgParent1}>
                  <div className={styles.bg3} />
                  <b className={styles.b3}>16</b>
                </div>
              </div>
              <div className={styles.bgParent2}>
                <div className={styles.bg4} />
                <b className={styles.b4}>1</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mapInner1}>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper1}>
            <div className={styles.bgParent3}>
              <div className={styles.bg5} />
              <b className={styles.b5}>8</b>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.bgParent4}>
              <div className={styles.bg6} />
              <b className={styles.fAQtitle}>40</b>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.bgParent5}>
                <div className={styles.bg7} />
                <b className={styles.b6}>2</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SearchMap;
