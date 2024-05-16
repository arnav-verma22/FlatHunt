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
    <div className="question-12">
      <div className="text10" style={textStyle}>
        <b className="integer-morbi-semper1" style={integerMorbiSemperStyle}>
          {integerMorbiSemperSodales}
        </b>
        <div className="magnis-congue-neque1" style={magnisCongueNequeStyle}>
          {magnisCongueNequeSociisUt}
        </div>
      </div>
      <img className="close-icon10" loading="lazy" alt="" src="/close1.svg" />
    </div>
  );
};

export default Question;
