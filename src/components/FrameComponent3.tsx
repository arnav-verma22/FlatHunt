import { FunctionComponent } from "react";
import Component1 from "./Component1";
import Component from "./Component";
import "./FrameComponent3.css";

const NotNeeded: FunctionComponent = () => {
  return (
    <section className="icons-wrapper">
      <div className="icons1">
        <Component1
          consequatRisus="Consequat risus"
          euismodCommodoFeugiatPuru="Euismod commodo feugiat purus egestas diam. Facilisi sed senectus consequat risus. Porta purus nec dui odio vehicula."
        />
        <Component
          morbiPulvinar="Morbi pulvinar"
          euVulputateMiCrasQuamLect="Eu vulputate mi cras quam lectus. Ut ut dignissim amet dignissim gravida sit ullamcorper lectus."
        />
        <Component1
          consequatRisus="Turpis elit"
          euismodCommodoFeugiatPuru="Arcu venenatis id dignissim massa ipsum. Viverra mi habitant urna at elit dignissim cursus ut facilisi."
        />
        <Component
          morbiPulvinar="Faucibus egestas"
          euVulputateMiCrasQuamLect="Vehicula arcu, felis, et urna, nunc, ut eget pellentesque scelerisque. Accumsan et velit nibh tempor."
        />
      </div>
    </section>
  );
};

export default NotNeeded;
