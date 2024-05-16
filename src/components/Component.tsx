import { FunctionComponent } from "react";
import "./Component.css";

export type ComponentType = {
  morbiPulvinar?: string;
  euVulputateMiCrasQuamLect?: string;
};

const Component: FunctionComponent<ComponentType> = ({
  morbiPulvinar,
  euVulputateMiCrasQuamLect,
}) => {
  return (
    <div className="div33">
      <div className="evaaward-fill-wrapper">
        <img
          className="evaaward-fill-icon"
          loading="lazy"
          alt=""
          src="/evaawardfill.svg"
        />
      </div>
      <h1 className="morbi-pulvinar">{morbiPulvinar}</h1>
      <div className="eu-vulputate-mi">{euVulputateMiCrasQuamLect}</div>
    </div>
  );
};

export default Component;
