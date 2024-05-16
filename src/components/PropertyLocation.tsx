import { FunctionComponent } from "react";
import "./PropertyLocation.css";

const PropertyLocation: FunctionComponent = () => {
  return (
    <div className="frame-parent2">
      <div className="location-wrapper">
        <h1 className="location">Location</h1>
      </div>
      <div className="map1">
        <img className="map-icon" alt="" src="/map@2x.png" />
        <div className="button-plus-group">
          <div className="button-plus">
            <img
              className="evaplus-fill-icon1"
              loading="lazy"
              alt=""
              src="/evaplusfill-1.svg"
            />
          </div>
          <div className="button-minus">
            <img
              className="evaminus-fill-icon1"
              loading="lazy"
              alt=""
              src="/evaminusfill-1.svg"
            />
          </div>
        </div>
        <div className="wrapper2">
          <img className="icon4" loading="lazy" alt="" src="/40.svg" />
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
