import { FunctionComponent } from "react";
import styles from "./Description.module.css";

const Description: FunctionComponent = () => {
  return (
    <div className={styles.desriprion}>
      <div className={styles.titletext}>
        <h1 className={styles.desription}>Desription</h1>
        <div className={styles.aTrulyGlobal}>
          A truly global city, London has long been considered a cutting-edge
          metropolis and hub for culture, style and finance. With each borough,
          Tube zone and neighborhood of London sporting its own vibe and
          lifestyle advantages, it can be downright difficult to settle on where
          to look for a furnished apartment in London . Whether you’re a digital
          nomad looking for a studio apartment in London or just seeking a month
          to month rental in London, Blueground has you covered.
        </div>
      </div>
      <div className={styles.titletext1}>
        <b className={styles.inSed}>In sed</b>
        <div
          className={styles.inNullamEget}
        >{`In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum, donec rutrum justo, amet porttitor vitae et. Interdum consectetur dictum mattis gravida sed vulputate. Tempus sagittis cras sagittis viverra erat proin duis enim. `}</div>
      </div>
      <div className={styles.titletext2}>
        <b className={styles.adipiscingRisusFermentum}>
          Adipiscing risus, fermentum
        </b>
        <div
          className={styles.laoreetRisusAccumsan}
        >{`Laoreet risus accumsan pellentesque lacus, in nulla eu elementum. Mollis enim fringilla aenean diam tellus diam morbi ipsum placerat. `}</div>
      </div>
    </div>
  );
};

export default Description;
