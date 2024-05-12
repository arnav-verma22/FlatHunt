import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.evabriefcaseFillParent}>
        <img
          className={styles.evabriefcaseFillIcon}
          loading="lazy"
          alt=""
          src="/evabriefcasefill.svg"
        />
        <h1 className={styles.movingIn}>{`Moving in & Moving up!`}</h1>
        <div className={styles.sitLectusParturient}>
          Sit lectus parturient diam ac congue elementum praesent blandit.
          Tristique ut ut venenatis tortor, id elementum. Integer tristique
          viverra enim libero.
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.evasunFillParent}>
          <img
            className={styles.evasunFillIcon}
            loading="lazy"
            alt=""
            src="/evasunfill.svg"
          />
          <h1 className={styles.sitBack}>{`Sit back & Relax`}</h1>
          <div className={styles.euismodCommodoFeugiat}>
            Euismod commodo feugiat purus egestas diam. Facilisi sed senectus
            consequat risus. Porta purus nec dui odio vehicula.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
