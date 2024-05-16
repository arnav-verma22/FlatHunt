import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import "./NumberOfResults.css";

export type NumberOfResultsType = {
  results?: string;
  area?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPosition?: CSSProperties["position"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
  propDisplay?: CSSProperties["display"];
  propFlexDirection1?: CSSProperties["flexDirection"];
  propPadding1?: CSSProperties["padding"];
  propFontSize?: CSSProperties["fontSize"];
  propLineHeight?: CSSProperties["lineHeight"];
  propWidth1?: CSSProperties["width"];
  propGap1?: CSSProperties["gap"];
  propFlex1?: CSSProperties["flex"];
  propBorderRadius1?: CSSProperties["borderRadius"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propPosition1?: CSSProperties["position"];
  propDisplay1?: CSSProperties["display"];
  propColor1?: CSSProperties["color"];
  propTextAlign1?: CSSProperties["textAlign"];
  propMinWidth1?: CSSProperties["minWidth"];
  propFontSize1?: CSSProperties["fontSize"];
  propLineHeight1?: CSSProperties["lineHeight"];
  propFontWeight?: CSSProperties["fontWeight"];
  propMargin?: CSSProperties["margin"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propWidth2?: CSSProperties["width"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propPosition2?: CSSProperties["position"];
  propColor2?: CSSProperties["color"];
  propTextAlign2?: CSSProperties["textAlign"];
  propDisplay2?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
  propFontSize2?: CSSProperties["fontSize"];
  propLineHeight2?: CSSProperties["lineHeight"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propWidth3?: CSSProperties["width"];
  propAlignSelf2?: CSSProperties["alignSelf"];
};

const NumberOfResults: FunctionComponent<NumberOfResultsType> = memo(
  ({
    results = "0",
    area = " in “Springfeild IL”",
    propWidth,
    propFlexDirection,
    propPadding,
    propGap,
    propFlex,
    propBorderRadius,
    propBackgroundColor,
    propMinWidth,
    propAlignSelf,
    propPosition,
    propColor,
    propTextAlign,
    propDisplay,
    propFlexDirection1,
    propPadding1,
    propFontSize,
    propLineHeight,
    propWidth1,
    propGap1,
    propFlex1,
    propBorderRadius1,
    propBackgroundColor1,
    propPosition1,
    propDisplay1,
    propColor1,
    propTextAlign1,
    propMinWidth1,
    propFontSize1,
    propLineHeight1,
    propFontWeight,
    propMargin,
    propAlignSelf1,
    propWidth2,
    propLetterSpacing,
    propPosition2,
    propColor2,
    propTextAlign2,
    propDisplay2,
    propMinWidth2,
    propFontSize2,
    propLineHeight2,
    propFontWeight1,
    propWidth3,
    propAlignSelf2,
  }) => {
    const frameDivStyle: CSSProperties = useMemo(() => {
      return {
        width: propWidth,
        flexDirection: propFlexDirection,
        padding: propPadding,
        gap: propGap,
        flex: propFlex,
        borderRadius: propBorderRadius,
        backgroundColor: propBackgroundColor,
        minWidth: propMinWidth,
        alignSelf: propAlignSelf,
      };
    }, [
      propWidth,
      propFlexDirection,
      propPadding,
      propGap,
      propFlex,
      propBorderRadius,
      propBackgroundColor,
      propMinWidth,
      propAlignSelf,
    ]);

    const resultsFor1ContainerStyle: CSSProperties = useMemo(() => {
      return {
        position: propPosition,
        color: propColor,
        textAlign: propTextAlign,
        display: propDisplay,
        flexDirection: propFlexDirection1,
        padding: propPadding1,
        fontSize: propFontSize,
        lineHeight: propLineHeight,
        width: propWidth1,
        gap: propGap1,
        flex: propFlex1,
        borderRadius: propBorderRadius1,
        backgroundColor: propBackgroundColor1,
      };
    }, [
      propPosition,
      propColor,
      propTextAlign,
      propDisplay,
      propFlexDirection1,
      propPadding1,
      propFontSize,
      propLineHeight,
      propWidth1,
      propGap1,
      propFlex1,
      propBorderRadius1,
      propBackgroundColor1,
    ]);

    const resultsStyle: CSSProperties = useMemo(() => {
      return {
        position: propPosition1,
        display: propDisplay1,
        color: propColor1,
        textAlign: propTextAlign1,
        minWidth: propMinWidth1,
        fontSize: propFontSize1,
        lineHeight: propLineHeight1,
        fontWeight: propFontWeight,
        margin: propMargin,
        alignSelf: propAlignSelf1,
        width: propWidth2,
        letterSpacing: propLetterSpacing,
      };
    }, [
      propPosition1,
      propDisplay1,
      propColor1,
      propTextAlign1,
      propMinWidth1,
      propFontSize1,
      propLineHeight1,
      propFontWeight,
      propMargin,
      propAlignSelf1,
      propWidth2,
      propLetterSpacing,
    ]);

    const for1BedroomStyle: CSSProperties = useMemo(() => {
      return {
        position: propPosition2,
        color: propColor2,
        textAlign: propTextAlign2,
        display: propDisplay2,
        minWidth: propMinWidth2,
        fontSize: propFontSize2,
        lineHeight: propLineHeight2,
        fontWeight: propFontWeight1,
        width: propWidth3,
        alignSelf: propAlignSelf2,
      };
    }, [
      propPosition2,
      propColor2,
      propTextAlign2,
      propDisplay2,
      propMinWidth2,
      propFontSize2,
      propLineHeight2,
      propFontWeight1,
      propWidth3,
      propAlignSelf2,
    ]);

    return (
      <div
        className="results-for-1-bedroom-propert-wrapper"
        style={frameDivStyle}
      >
        <div
          className="results-for-1-container"
          style={resultsFor1ContainerStyle}
        >
          <b className="results" style={resultsStyle}>
            {results}
          </b>
          <span className="for-1-bedroom" style={for1BedroomStyle}>
            {area}
          </span>
        </div>
      </div>
    );
  }
);

export default NumberOfResults;
