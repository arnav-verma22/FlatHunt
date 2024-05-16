import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Heading.css";

export type HeadingType = {
  heading?: string;

  /** Style props */
  headingFontSize?: CSSProperties["fontSize"];
};

const Heading: FunctionComponent<HeadingType> = ({
  heading,
  headingFontSize,
}) => {
  const neighbourhoodStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: headingFontSize,
    };
  }, [headingFontSize]);

  return (
    <h1 className="neighbourhood" style={neighbourhoodStyle}>
      {heading}
    </h1>
  );
};

export default Heading;
