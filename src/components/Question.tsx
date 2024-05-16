import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Question.css";

export type QuestionType = {
  integerMorbiSemperSodales?: string;
  magnisCongueNequeSociisUt?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propDisplay1?: CSSProperties["display"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Question: FunctionComponent<QuestionType> = ({
  integerMorbiSemperSodales,
  magnisCongueNequeSociisUt,
  propWidth,
  propDisplay,
  propDisplay1,
  propAlignSelf,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const integerMorbiSemperStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const magnisCongueNequeStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay1, propAlignSelf]);

  return (
    <div className="question-1">
      <div className="text" style={textStyle}>
        <b className="integer-morbi-semper" style={integerMorbiSemperStyle}>
          {integerMorbiSemperSodales}
        </b>
        <div className="magnis-congue-neque" style={magnisCongueNequeStyle}>
          {magnisCongueNequeSociisUt}
        </div>
      </div>
      <img className="close-icon" loading="lazy" alt="" src="/close1.svg" />
    </div>
  );
};

export default Question;
