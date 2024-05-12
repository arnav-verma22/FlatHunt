import { FunctionComponent } from "react";
import Component5 from "./Component5";
import styles from "./HomeMoreDetails2.module.css";

const HomeMoreDetails2: FunctionComponent = () => {
  return (
    <section className={styles.idAliquamWrapper}>
      <div className={styles.idAliquam}>
        <div className={styles.titletext}>
          <h1 className={styles.idAliquamMolestie}>
            Id aliquam molestie nunc quis turpis imperdiet quis
          </h1>
          <div className={styles.euismodCondimentumTempus}>
            Euismod condimentum tempus quis nibh. Accumsan imperdiet non
            vulputate venenatis, lorem amet, purus amet, sagittis. Cum orci quam
            enim adipiscing interdum purus.
          </div>
        </div>
        <div className={styles.features}>
          <Component5
            evacalendarFill="/evacalendarfill-1.svg"
            flexibleLiving="Flexible living"
            stayAsLongOrAsLittleAsYou="Stay as Long or as little as you need with month-to-"
            monthContracts="month contracts"
          />
          <div className={styles.div}>
            <img
              className={styles.mdisofaIcon}
              loading="lazy"
              alt=""
              src="/mdisofa.svg"
            />
            <b className={styles.moveInReady}>Move-in ready</b>
            <div className={styles.readyToMove}>
              Ready to move in with everything you need
            </div>
          </div>
          <Component5
            evacalendarFill="/evawififill.svg"
            flexibleLiving="High-speed Wi-Fi"
            stayAsLongOrAsLittleAsYou="Best in class internet speeds suitable for working "
            monthContracts="from home"
          />
          <div className={styles.div1}>
            <img
              className={styles.evamessageCircleFillIcon}
              loading="lazy"
              alt=""
              src="/evamessagecirclefill.svg"
            />
            <b className={styles.support}>24/7 support</b>
            <div className={styles.onHandTeam}>
              On hand team for any issues you have
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMoreDetails2;
