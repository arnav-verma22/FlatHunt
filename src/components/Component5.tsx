import { FunctionComponent } from "react";
import "./Component5.css";

export type Component5Type = {
  evacalendarFill?: string;
  flexibleLiving?: string;
  stayAsLongOrAsLittleAsYou?: string;
  monthContracts?: string;
};

const Component5: FunctionComponent<Component5Type> = ({
  evacalendarFill,
  flexibleLiving,
  stayAsLongOrAsLittleAsYou,
  monthContracts,
}) => {
  return (
    <div className="div19">
      <img className="evacalendar-fill-icon" alt="" src={evacalendarFill} />
      <b className="flexible-living">{flexibleLiving}</b>
      <div className="stay-as-long-container">
        <p className="stay-as-long">{stayAsLongOrAsLittleAsYou}</p>
        <p className="month-contracts">{monthContracts}</p>
      </div>
    </div>
  );
};

export default Component5;
