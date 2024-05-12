import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import styles from "./Roadmap.module.css";

const Roadmap: FunctionComponent = () => {
  return (
    <section className={styles.feugiatProinNamTristiqueEgWrapper}>
      <div className={styles.feugiatProinNamTristiqueEg}>
        <div className={styles.bg} />
        <div className={styles.images} />
        <div className={styles.feugiatProinNamTristiqueEgInner}>
          <div className={styles.frameParent}>
            <div className={styles.howItWorksWrapper}>
              <h1 className={styles.howItWorks}>How it Works</h1>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameWrapper}>
                <div className={styles.evaemailFillParent}>
                  <img
                    className={styles.evaemailFillIcon}
                    loading="lazy"
                    alt=""
                    src="/evaemailfill.svg"
                  />
                  <div className={styles.ellipseWrapper}>
                    <div className={styles.frameChild} />
                  </div>
                </div>
              </div>
              <h1 className={styles.getInTouch}>Get in touch</h1>
              <div className={styles.utIdCras}>
                Ut id cras malesuada dolor. Consectetur eget malesuada enim
                massa viverra mauris
              </div>
            </div>
          </div>
        </div>
        <FrameComponent7 />
        <FrameComponent6 />
        <FrameComponent5 />
      </div>
    </section>
  );
};

export default Roadmap;
