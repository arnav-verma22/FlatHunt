import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Question.module.css";

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
    <div className={styles.question1}>
      <div className={styles.text} style={textStyle}>
        <b
          className={styles.integerMorbiSemper}
          style={integerMorbiSemperStyle}
        >
          {integerMorbiSemperSodales}
        </b>
        <div
          className={styles.magnisCongueNeque}
          style={magnisCongueNequeStyle}
        >
          {magnisCongueNequeSociisUt}
        </div>
      </div>
      <img
        className={styles.closeIcon}
        loading="lazy"
        alt=""
        src="/close1.svg"
      />
    </div>
  );
};

export default Question;
