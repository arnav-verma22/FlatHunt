import { FunctionComponent } from "react";
import KeyDetails from "./KeyDetails";
import Description from "./Description";
import "./Details.css";

const Details: FunctionComponent = () => {
  return (
    <div className="details">
      <KeyDetails />
      <Description />
    </div>
  );
};

export default Details;
