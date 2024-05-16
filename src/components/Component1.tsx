import { FunctionComponent } from "react";
import "./Component1.css";

export type Component1Type = {
  consequatRisus?: string;
  euismodCommodoFeugiatPuru?: string;
};

const Component1: FunctionComponent<Component1Type> = ({
  consequatRisus,
  euismodCommodoFeugiatPuru,
}) => {
  return (
    <div className="div1">
      <input className="value-container" type="checkbox" />
      <h1 className="consequat-risus">{consequatRisus}</h1>
      <div className="euismod-commodo-feugiat2">
        {euismodCommodoFeugiatPuru}
      </div>
    </div>
  );
};

export default Component1;
