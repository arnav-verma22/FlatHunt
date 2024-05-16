import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent5 from "./FrameComponent5";
import "./Roadmap.css";

const Roadmap: FunctionComponent = () => {
  return (
    <section className="feugiat-proin-nam-tristique-eg-wrapper">
      <div className="feugiat-proin-nam-tristique-eg">
        <div className="bg" />
        <div className="images" />
        <div className="feugiat-proin-nam-tristique-eg-inner">
          <div className="frame-parent3">
            <div className="how-it-works-wrapper">
              <h1 className="how-it-works">How it Works</h1>
            </div>
            <div className="frame-parent4">
              <div className="frame-wrapper2">
                <div className="evaemail-fill-parent">
                  <img
                    className="evaemail-fill-icon"
                    loading="lazy"
                    alt=""
                    src="/evaemailfill.svg"
                  />
                  <div className="ellipse-wrapper">
                    <div className="frame-child1" />
                  </div>
                </div>
              </div>
              <h1 className="get-in-touch">Get in touch</h1>
              <div className="ut-id-cras">
                Ut id cras malesuada dolor. Consectetur eget malesuada enim
                massa viverra mauris
              </div>
            </div>
          </div>
        </div>
        <FrameComponent7 />
        <FrameComponent6 />
        <FrameComponent5 />
      </div>
    </section>
  );
};

export default Roadmap;
