import { FunctionComponent } from "react";
import "./KeyDetails.css";

const KeyDetails: FunctionComponent = () => {
  return (
    <div className="key-details">
      <div className="apartment-name-location">
        <h1 className="rhoncus-suspendisse">Rhoncus suspendisse</h1>
        <div className="london-notting-hill">London, Notting Hill</div>
      </div>
      <div className="points">
        <div className="bedroom-bath">
          <div className="bedroom">
            <img
              className="fluentbed-24-filled-icon"
              loading="lazy"
              alt=""
              src="/fluentbed24filled.svg"
            />
            <div className="bedroom1">2 bedroom</div>
          </div>
          <div className="bath">
            <img
              className="fa-solidbath-icon"
              loading="lazy"
              alt=""
              src="/fasolidbath.svg"
            />
            <div className="bath1">2 bath</div>
          </div>
        </div>
        <div className="sqft-city">{`500 sq.ft | City view  |  3rd floor  |  Elevator `}</div>
      </div>
    </div>
  );
};

export default KeyDetails;
