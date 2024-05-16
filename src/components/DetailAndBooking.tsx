import { FunctionComponent } from "react";
import Details from "./Details";
import OptionToBook from "./OptionToBook";
import "./DetailAndBooking.css";

const DetailAndBooking: FunctionComponent = () => {
  return (
    <div className="while-loop">
      <Details />
      <OptionToBook />
    </div>
  );
};

export default DetailAndBooking;
