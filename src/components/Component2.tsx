import { FunctionComponent } from "react";
import "./Component2.css";

export type Component2Type = {
  evalockFill?: string;
  guaranteedRent?: string;
  weDoTheSearchingForYou?: string;
};

const Component2: FunctionComponent<Component2Type> = ({
  evalockFill,
  guaranteedRent,
  weDoTheSearchingForYou,
}) => {
  return (
    <div className="div31">
      <img
        className="evalock-fill-icon"
        loading="lazy"
        alt=""
        src={evalockFill}
      />
      <b className="guaranteed-rent">{guaranteedRent}</b>
      <div className="we-do-the1">{weDoTheSearchingForYou}</div>
    </div>
  );
};

export default Component2;
