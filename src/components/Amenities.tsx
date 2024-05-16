import { FunctionComponent } from "react";
import AmenitiesList from "./AmenitiesList";
import "./Amenities.css";

const Amenities: FunctionComponent = () => {
  return (
    <div className="amenities">
      <h1 className="amenities1">Amenities</h1>
      <AmenitiesList />
    </div>
  );
};

export default Amenities;
