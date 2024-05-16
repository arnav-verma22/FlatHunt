import { FunctionComponent } from "react";
import "./FrameComponent5.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className="frame-parent2">
      <div className="evabriefcase-fill-parent">
        <img
          className="evabriefcase-fill-icon"
          loading="lazy"
          alt=""
          src="/evabriefcasefill.svg"
        />
        <h1 className="moving-in">{`Moving in & Moving up!`}</h1>
        <div className="sit-lectus-parturient1">
          Sit lectus parturient diam ac congue elementum praesent blandit.
          Tristique ut ut venenatis tortor, id elementum. Integer tristique
          viverra enim libero.
        </div>
      </div>
      <div className="ellipse-group">
        <div className="frame-inner" />
        <div className="ellipse-div" />
      </div>
      <div className="frame-wrapper1">
        <div className="evasun-fill-parent">
          <img
            className="evasun-fill-icon"
            loading="lazy"
            alt=""
            src="/evasunfill.svg"
          />
          <h1 className="sit-back">{`Sit back & Relax`}</h1>
          <div className="euismod-commodo-feugiat1">
            Euismod commodo feugiat purus egestas diam. Facilisi sed senectus
            consequat risus. Porta purus nec dui odio vehicula.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
