import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./MoreImages.css";

export type MoreImagesType = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  /** Style props */
  unsplashqeIuFR5vPm8IconGap?: CSSProperties["gap"];
  unsplashqeIuFR5vPm8IconMinWidth?: CSSProperties["minWidth"];
  unsplashqeIuFR5vPm8IconFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propRowGap?: CSSProperties["rowGap"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propMinHeight?: CSSProperties["minHeight"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propOverflow?: CSSProperties["overflow"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propMinHeight1?: CSSProperties["minHeight"];
  propAlignSelf2?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propOverflow1?: CSSProperties["overflow"];
  propMaxHeight1?: CSSProperties["maxHeight"];
  propMinWidth1?: CSSProperties["minWidth"];
  propGap1?: CSSProperties["gap"];
  propAlignSelf3?: CSSProperties["alignSelf"];
  propRowGap1?: CSSProperties["rowGap"];
  propHeight2?: CSSProperties["height"];
  propWidth2?: CSSProperties["width"];
  propBorderRadius2?: CSSProperties["borderRadius"];
  propMinHeight2?: CSSProperties["minHeight"];
  propAlignSelf4?: CSSProperties["alignSelf"];
  propFlex2?: CSSProperties["flex"];
  propOverflow2?: CSSProperties["overflow"];
  propMaxHeight2?: CSSProperties["maxHeight"];
  propMinWidth2?: CSSProperties["minWidth"];
  propHeight3?: CSSProperties["height"];
  propWidth3?: CSSProperties["width"];
  propBorderRadius3?: CSSProperties["borderRadius"];
  propMinHeight3?: CSSProperties["minHeight"];
  propAlignSelf5?: CSSProperties["alignSelf"];
  propFlex3?: CSSProperties["flex"];
  propOverflow3?: CSSProperties["overflow"];
  propMaxHeight3?: CSSProperties["maxHeight"];
  propMinWidth3?: CSSProperties["minWidth"];
};

const MoreImages: FunctionComponent<MoreImagesType> = ({
  image1,
  image2,
  image3,
  image4,
  unsplashqeIuFR5vPm8IconGap,
  unsplashqeIuFR5vPm8IconMinWidth,
  unsplashqeIuFR5vPm8IconFlex,
  propGap,
  propAlignSelf,
  propRowGap,
  propHeight,
  propWidth,
  propBorderRadius,
  propMinHeight,
  propAlignSelf1,
  propFlex,
  propOverflow,
  propMaxHeight,
  propMinWidth,
  propHeight1,
  propWidth1,
  propBorderRadius1,
  propMinHeight1,
  propAlignSelf2,
  propFlex1,
  propOverflow1,
  propMaxHeight1,
  propMinWidth1,
  propGap1,
  propAlignSelf3,
  propRowGap1,
  propHeight2,
  propWidth2,
  propBorderRadius2,
  propMinHeight2,
  propAlignSelf4,
  propFlex2,
  propOverflow2,
  propMaxHeight2,
  propMinWidth2,
  propHeight3,
  propWidth3,
  propBorderRadius3,
  propMinHeight3,
  propAlignSelf5,
  propFlex3,
  propOverflow3,
  propMaxHeight3,
  propMinWidth3,
}) => {
  const branchStyle: CSSProperties = useMemo(() => {
    return {
      gap: unsplashqeIuFR5vPm8IconGap,
      minWidth: unsplashqeIuFR5vPm8IconMinWidth,
      flex: unsplashqeIuFR5vPm8IconFlex,
    };
  }, [
    unsplashqeIuFR5vPm8IconGap,
    unsplashqeIuFR5vPm8IconMinWidth,
    unsplashqeIuFR5vPm8IconFlex,
  ]);

  const mergeStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
      rowGap: propRowGap,
    };
  }, [propGap, propAlignSelf, propRowGap]);

  const checkinTimeIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      borderRadius: propBorderRadius,
      minHeight: propMinHeight,
      alignSelf: propAlignSelf1,
      flex: propFlex,
      overflow: propOverflow,
      maxHeight: propMaxHeight,
      minWidth: propMinWidth,
    };
  }, [
    propHeight,
    propWidth,
    propBorderRadius,
    propMinHeight,
    propAlignSelf1,
    propFlex,
    propOverflow,
    propMaxHeight,
    propMinWidth,
  ]);

  const unsplashakz0w36DpM4IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      borderRadius: propBorderRadius1,
      minHeight: propMinHeight1,
      alignSelf: propAlignSelf2,
      flex: propFlex1,
      overflow: propOverflow1,
      maxHeight: propMaxHeight1,
      minWidth: propMinWidth1,
    };
  }, [
    propHeight1,
    propWidth1,
    propBorderRadius1,
    propMinHeight1,
    propAlignSelf2,
    propFlex1,
    propOverflow1,
    propMaxHeight1,
    propMinWidth1,
  ]);

  const merge1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
      alignSelf: propAlignSelf3,
      rowGap: propRowGap1,
    };
  }, [propGap1, propAlignSelf3, propRowGap1]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
      width: propWidth2,
      borderRadius: propBorderRadius2,
      minHeight: propMinHeight2,
      alignSelf: propAlignSelf4,
      flex: propFlex2,
      overflow: propOverflow2,
      maxHeight: propMaxHeight2,
      minWidth: propMinWidth2,
    };
  }, [
    propHeight2,
    propWidth2,
    propBorderRadius2,
    propMinHeight2,
    propAlignSelf4,
    propFlex2,
    propOverflow2,
    propMaxHeight2,
    propMinWidth2,
  ]);

  const unsplashqeIuFR5vPm8IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight3,
      width: propWidth3,
      borderRadius: propBorderRadius3,
      minHeight: propMinHeight3,
      alignSelf: propAlignSelf5,
      flex: propFlex3,
      overflow: propOverflow3,
      maxHeight: propMaxHeight3,
      minWidth: propMinWidth3,
    };
  }, [
    propHeight3,
    propWidth3,
    propBorderRadius3,
    propMinHeight3,
    propAlignSelf5,
    propFlex3,
    propOverflow3,
    propMaxHeight3,
    propMinWidth3,
  ]);

  return (
    <div className="branch" style={branchStyle}>
      <div className="merge" style={mergeStyle}>
        <img
          className="checkin-time-icon"
          loading="lazy"
          alt=""
          src={image1}
          style={checkinTimeIconStyle}
        />
        <img
          className="unsplashakz0w36dpm4-icon"
          loading="lazy"
          alt=""
          src={image2}
          style={unsplashakz0w36DpM4IconStyle}
        />
      </div>
      <div className="merge1" style={merge1Style}>
        <img
          className="icon3"
          loading="lazy"
          alt=""
          src={image3}
          style={iconStyle}
        />
        <img
          className="unsplashqeiufr5vpm8-icon"
          loading="lazy"
          alt=""
          src={image4}
          style={unsplashqeIuFR5vPm8IconStyle}
        />
      </div>
    </div>
  );
};

export default MoreImages;
