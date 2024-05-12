import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Button } from "@mui/material";
import styles from "./BeforeVsAfterImage.module.css";

export type BeforeVsAfterImageType = {
  unsplashitC9yfRIM?: string;
  frame6?: string;
  showUnsplashitC9yfRIMIcon?: boolean;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundSize?: CSSProperties["backgroundSize"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propPosition1?: CSSProperties["position"];
  propMargin?: CSSProperties["margin"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propOverflow?: CSSProperties["overflow"];
  propWidth1?: CSSProperties["width"];
};

const BeforeVsAfterImage: FunctionComponent<BeforeVsAfterImageType> = ({
  unsplashitC9yfRIM,
  frame6,
  showUnsplashitC9yfRIMIcon,
  propPosition,
  propBorderRadius,
  propBackgroundImage,
  propBackgroundSize,
  propHeight,
  propWidth,
  propPosition1,
  propMargin,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propOverflow,
  propWidth1,
}) => {
  const beforeStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
    };
  }, [propPosition, propBorderRadius, propBackgroundImage, propBackgroundSize]);

  const unsplashitC9yfRIMIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      position: propPosition1,
      margin: propMargin,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      overflow: propOverflow,
    };
  }, [
    propHeight,
    propWidth,
    propPosition1,
    propMargin,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propOverflow,
  ]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={styles.before} style={beforeStyle}>
      {showUnsplashitC9yfRIMIcon && (
        <img
          className={styles.unsplashitC9yfrimIcon}
          loading="lazy"
          alt=""
          src={unsplashitC9yfRIM}
          style={unsplashitC9yfRIMIconStyle}
        />
      )}
      <Button
        className={styles.beforeChild}
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#000",
          fontSize: "36",
          background: "#e2f1e8",
          borderRadius: "10px",
          "&:hover": { background: "#e2f1e8" },
          width: 188,
          height: 68,
        }}
        style={frameButtonStyle}
      >
        {frame6}
      </Button>
    </div>
  );
};

export default BeforeVsAfterImage;
