import { FunctionComponent } from "react";
import "./AmenitiesList2.css";

const AmenitiesList2: FunctionComponent = () => {
  return (
    <div className="t-vfridgewashingmachine">
      <div className="tv">
        <div className="tv1">
          <div className="tv2">TV</div>
          <div className="flatscreen-tv">Flatscreen TV</div>
        </div>
        <img className="mditelevision-icon" alt="" src="/mditelevision.svg" />
      </div>
      <div className="fireplace">
        <div className="fireplace1">Fireplace</div>
        <img
          className="mdifireplace-icon"
          loading="lazy"
          alt=""
          src="/mdifireplace.svg"
        />
      </div>
      <div className="fireplace2">
        <div className="phone">Phone</div>
        <img
          className="mdiphone-classic-icon"
          loading="lazy"
          alt=""
          src="/mdiphoneclassic.svg"
        />
      </div>
      <div className="work-desk">
        <div className="desk">
          <div className="work-desk1">Work desk</div>
          <div className="with-computer">With computer</div>
        </div>
        <img
          className="mdidesktop-mac-dashboard-icon"
          loading="lazy"
          alt=""
          src="/mdidesktopmacdashboard.svg"
        />
      </div>
    </div>
  );
};

export default AmenitiesList2;
