import { FunctionComponent } from "react";
import "./FrameComponent6.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <div className="frame-parent1">
      <div className="ellipse-parent">
        <div className="frame-item" />
        <img
          className="evapantone-fill-icon"
          loading="lazy"
          alt=""
          src="/evapantonefill.svg"
        />
      </div>
      <div className="time-to-decorate-wrapper">
        <h1 className="time-to-decorate">Time to decorate</h1>
      </div>
      <div className="adipiscing-magna-ut-justo-et-parent">
        <div className="adipiscing-magna-ut">
          Adipiscing magna ut justo, et. Sem pellentesque eu risus euismod et.
          Sapien est tellus dapibus sed varius lorem tellus, turpis nisl.
          Elementum scelerisque elit in nibh aliquet phasellus.
        </div>
        <div className="magnis-congue-neque-sociis" />
      </div>
    </div>
  );
};

export default FrameComponent6;
