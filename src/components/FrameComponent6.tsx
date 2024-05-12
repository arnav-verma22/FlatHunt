import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.evapantoneFillIcon}
          loading="lazy"
          alt=""
          src="/evapantonefill.svg"
        />
      </div>
      <div className={styles.timeToDecorateWrapper}>
        <h1 className={styles.timeToDecorate}>Time to decorate</h1>
      </div>
      <div className={styles.adipiscingMagnaUtJustoEtParent}>
        <div className={styles.adipiscingMagnaUt}>
          Adipiscing magna ut justo, et. Sem pellentesque eu risus euismod et.
          Sapien est tellus dapibus sed varius lorem tellus, turpis nisl.
          Elementum scelerisque elit in nibh aliquet phasellus.
        </div>
        <div className={styles.magnisCongueNequeSociis} />
      </div>
    </div>
  );
};

export default FrameComponent6;
