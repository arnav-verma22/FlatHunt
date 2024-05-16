import { FunctionComponent } from "react";
import Heading from "./Heading";
import "./MoreDetails.css";

export type MoreDetailsType = {
  description?: string;
  heading?: string;
};

const MoreDetails: FunctionComponent<MoreDetailsType> = ({
  description,
  heading,
}) => {
  return (
    <div className="neighbourhood-parent">
      <Heading heading="Neighbourhood" />
      <div className="ultricies-etiam-sit-container">
        <p className="ultricies-etiam-sit">{description}</p>
        <p className="blank-line">&nbsp;</p>
        <p className="molestie-amet-pretium">
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
