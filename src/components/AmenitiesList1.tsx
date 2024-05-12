import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AmenitiesList1.module.css";

export type AmenitiesList1Type = {
  fridge?: string;
  mdifridge?: string;
  kettle?: string;
  mdikettle?: string;
  coffeeMachine?: string;
  mdicoffeeMaker?: string;
  dishes?: string;
  mdipotSteam?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propGap1?: CSSProperties["gap"];
  propDisplay?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontWeight?: CSSProperties["fontWeight"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propGap2?: CSSProperties["gap"];
  propColor1?: CSSProperties["color"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propTextDecoration1?: CSSProperties["textDecoration"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propHeight1?: CSSProperties["height"];
  propWidth2?: CSSProperties["width"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propGap3?: CSSProperties["gap"];
  propMinWidth3?: CSSProperties["minWidth"];
  propColor2?: CSSProperties["color"];
  propDisplay2?: CSSProperties["display"];
  propTextDecoration2?: CSSProperties["textDecoration"];
  propFontWeight2?: CSSProperties["fontWeight"];
  propHeight2?: CSSProperties["height"];
  propWidth3?: CSSProperties["width"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propGap4?: CSSProperties["gap"];
  propMinWidth4?: CSSProperties["minWidth"];
  propColor3?: CSSProperties["color"];
  propDisplay3?: CSSProperties["display"];
  propTextDecoration3?: CSSProperties["textDecoration"];
  propFontWeight3?: CSSProperties["fontWeight"];
  propHeight3?: CSSProperties["height"];
  propWidth4?: CSSProperties["width"];
};

const AmenitiesList1: FunctionComponent<AmenitiesList1Type> = ({
  fridge,
  mdifridge,
  kettle,
  mdikettle,
  coffeeMachine,
  mdicoffeeMaker,
  dishes,
  mdipotSteam,
  propWidth,
  propPadding,
  propGap,
  propMinWidth,
  propAlignSelf,
  propGap1,
  propDisplay,
  propMinWidth1,
  propColor,
  propTextDecoration,
  propFontWeight,
  propHeight,
  propWidth1,
  propAlignSelf1,
  propGap2,
  propColor1,
  propDisplay1,
  propMinWidth2,
  propTextDecoration1,
  propFontWeight1,
  propHeight1,
  propWidth2,
  propAlignSelf2,
  propGap3,
  propMinWidth3,
  propColor2,
  propDisplay2,
  propTextDecoration2,
  propFontWeight2,
  propHeight2,
  propWidth3,
  propAlignSelf3,
  propGap4,
  propMinWidth4,
  propColor3,
  propDisplay3,
  propTextDecoration3,
  propFontWeight3,
  propHeight3,
  propWidth4,
}) => {
  const tVfridgewashingmachineStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      gap: propGap,
      minWidth: propMinWidth,
    };
  }, [propWidth, propPadding, propGap, propMinWidth]);

  const fridgeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap1,
    };
  }, [propAlignSelf, propGap1]);

  const fridge1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth1,
      color: propColor,
      textDecoration: propTextDecoration,
      fontWeight: propFontWeight,
    };
  }, [
    propDisplay,
    propMinWidth1,
    propColor,
    propTextDecoration,
    propFontWeight,
  ]);

  const mdifridgeIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  const kettleStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      gap: propGap2,
    };
  }, [propAlignSelf1, propGap2]);

  const kettle1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
      display: propDisplay1,
      minWidth: propMinWidth2,
      textDecoration: propTextDecoration1,
      fontWeight: propFontWeight1,
    };
  }, [
    propColor1,
    propDisplay1,
    propMinWidth2,
    propTextDecoration1,
    propFontWeight1,
  ]);

  const mdikettleIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth2,
    };
  }, [propHeight1, propWidth2]);

  const coffeeMachineStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf2,
      gap: propGap3,
    };
  }, [propAlignSelf2, propGap3]);

  const coffeeMachine1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
      color: propColor2,
      display: propDisplay2,
      textDecoration: propTextDecoration2,
      fontWeight: propFontWeight2,
    };
  }, [
    propMinWidth3,
    propColor2,
    propDisplay2,
    propTextDecoration2,
    propFontWeight2,
  ]);

  const mdicoffeeMakerIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth3,
    };
  }, [propHeight2, propWidth3]);

  const dishesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf3,
      gap: propGap4,
    };
  }, [propAlignSelf3, propGap4]);

  const dishes1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth4,
      color: propColor3,
      display: propDisplay3,
      textDecoration: propTextDecoration3,
      fontWeight: propFontWeight3,
    };
  }, [
    propMinWidth4,
    propColor3,
    propDisplay3,
    propTextDecoration3,
    propFontWeight3,
  ]);

  const mdipotSteamIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight3,
      width: propWidth4,
    };
  }, [propHeight3, propWidth4]);

  return (
    <div
      className={styles.tVfridgewashingmachine}
      style={tVfridgewashingmachineStyle}
    >
      <div className={styles.fridge} style={fridgeStyle}>
        <div className={styles.fridge1} style={fridge1Style}>
          {fridge}
        </div>
        <img
          className={styles.mdifridgeIcon}
          loading="lazy"
          alt=""
          src={mdifridge}
          style={mdifridgeIconStyle}
        />
      </div>
      <div className={styles.kettle} style={kettleStyle}>
        <div className={styles.kettle1} style={kettle1Style}>
          {kettle}
        </div>
        <img
          className={styles.mdikettleIcon}
          loading="lazy"
          alt=""
          src={mdikettle}
          style={mdikettleIconStyle}
        />
      </div>
      <div className={styles.coffeeMachine} style={coffeeMachineStyle}>
        <div className={styles.coffeeMachine1} style={coffeeMachine1Style}>
          {coffeeMachine}
        </div>
        <img
          className={styles.mdicoffeeMakerIcon}
          loading="lazy"
          alt=""
          src={mdicoffeeMaker}
          style={mdicoffeeMakerIconStyle}
        />
      </div>
      <div className={styles.dishes} style={dishesStyle}>
        <div className={styles.dishes1} style={dishes1Style}>
          {dishes}
        </div>
        <img
          className={styles.mdipotSteamIcon}
          loading="lazy"
          alt=""
          src={mdipotSteam}
          style={mdipotSteamIconStyle}
        />
      </div>
    </div>
  );
};

export default AmenitiesList1;
