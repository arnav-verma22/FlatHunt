import { FunctionComponent } from "react";
import Heading from "./Heading";
import styles from "./MoreDetails.module.css";

export type MoreDetailsType = {
  description?: string;
  heading?: string;
};

const MoreDetails: FunctionComponent<MoreDetailsType> = ({
  description,
  heading,
}) => {
  return (
    <div className={styles.neighbourhoodParent}>
      <Heading heading="Neighbourhood" />
      <div className={styles.ultriciesEtiamSitContainer}>
        <p className={styles.ultriciesEtiamSit}>{description}</p>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.molestieAmetPretium}>
          Molestie amet, pretium eu massa a, pharetra. Tellus quisque
          sollicitudin tristique maecenas vitae fames eget ut. Nisl commodo
          lacinia ultrices ut odio dui at. Adipiscing ac auctor hac urna dictum.
          Urna quis enim lobortis vel dignissim sed posuere. Semper lectus neque
          leo mollis pellentesque auctor pharetra, sed. Varius facilisis in sem
          tristique. Mauris condimentum pellentesque non commodo, quisque eget
          dolor. Et ultrices id placerat accumsan. Consectetur consectetur
          libero orci dolor dolor sagittis. Leo, augue sit sem adipiscing purus
          ut at malesuada. Dolor, eu dignissim adipiscing eget sed metus.
        </p>
      </div>
    </div>
  );
};

export default MoreDetails;
