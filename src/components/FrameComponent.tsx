import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const onButtonPlusIconClick = useCallback(() => {
    // Please sync "Booking page" to the project
  }, []);

  const onButtonMinusIconClick = useCallback(() => {
    // Please sync "Booking page" to the project
  }, []);

  return (
    <div className={styles.guestsParent}>
      <div className={styles.guests}>
        <div className={styles.guestsInner}>
          <div className={styles.evapeopleFillParent}>
            <img
              className={styles.evapeopleFillIcon}
              loading="lazy"
              alt=""
              src="/evapeoplefill.svg"
            />
            <div className={styles.guests1}>Guests</div>
          </div>
        </div>
        <div className={styles.buttonPlusParent}>
          <img
            className={styles.buttonPlusIcon}
            loading="lazy"
            alt=""
            src="/button-plus.svg"
            onClick={onButtonPlusIconClick}
          />
          <div className={styles.checkmarkIconWrapper}>
            <b className={styles.checkmarkIcon}>1</b>
          </div>
          <img
            className={styles.buttonMinusIcon}
            alt=""
            src="/button-minus.svg"
            onClick={onButtonMinusIconClick}
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.fluentbed24FilledWrapper}>
            <img
              className={styles.fluentbed24FilledIcon}
              loading="lazy"
              alt=""
              src="/fluentbed24filled.svg"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.bedroomsWrapper}>
              <div className={styles.bedrooms}>Bedrooms:</div>
            </div>
            <div className={styles.studioWrapper}>
              <div className={styles.studio}>studio</div>
            </div>
            <div className={styles.bgParent}>
              <div className={styles.bg} />
              <div className={styles.div}>1</div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div1}>2</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>3</div>
        </div>
      </div>
      <div className={styles.faSolidbathParent}>
        <img
          className={styles.faSolidbathIcon}
          loading="lazy"
          alt=""
          src="/fasolidbath.svg"
        />
        <div className={styles.bathrooms}>Bathrooms:</div>
        <div className={styles.frame}>
          <div className={styles.div3}>1</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.div4}>2</div>
        </div>
        <div className={styles.div5}>3</div>
      </div>
      <div className={styles.elwheelchairParent}>
        <img
          className={styles.elwheelchairIcon}
          loading="lazy"
          alt=""
          src="/elwheelchair.svg"
        />
        <div className={styles.disabledAccess}>Disabled access</div>
      </div>
      <div className={styles.parking}>
        <div className={styles.parkingInner}>
          <div className={styles.faSolidcarAltParent}>
            <img
              className={styles.faSolidcarAltIcon}
              loading="lazy"
              alt=""
              src="/fasolidcaralt.svg"
            />
            <div className={styles.parking1}>Parking</div>
          </div>
        </div>
        <div className={styles.check}>
          <img
            className={styles.evacheckmarkFillIcon}
            loading="lazy"
            alt=""
            src="/evacheckmarkfill.svg"
          />
        </div>
      </div>
      <div className={styles.mdielevatorPassengerParent}>
        <img
          className={styles.mdielevatorPassengerIcon}
          loading="lazy"
          alt=""
          src="/mdielevatorpassenger.svg"
        />
        <div className={styles.elevator}>Elevator</div>
      </div>
      <div className={styles.mdidishwasherParent}>
        <img
          className={styles.mdidishwasherIcon}
          loading="lazy"
          alt=""
          src="/mdidishwasher.svg"
        />
        <div className={styles.dishwasher}>Dishwasher</div>
      </div>
      <div className={styles.mdiwashingMachineParent}>
        <img
          className={styles.mdiwashingMachineIcon}
          loading="lazy"
          alt=""
          src="/mdiwashingmachine1.svg"
        />
        <div className={styles.washingMachine}>Washing machine</div>
      </div>
    </div>
  );
};

export default FrameComponent;
