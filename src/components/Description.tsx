import { FunctionComponent } from "react";
import "./Description.css";

const Description: FunctionComponent = () => {
  return (
    <div className="desriprion">
      <div className="titletext1">
        <h1 className="desription">Desription</h1>
        <div className="a-truly-global">
          A truly global city, London has long been considered a cutting-edge
          metropolis and hub for culture, style and finance. With each borough,
          Tube zone and neighborhood of London sporting its own vibe and
          lifestyle advantages, it can be downright difficult to settle on where
          to look for a furnished apartment in London . Whether you’re a digital
          nomad looking for a studio apartment in London or just seeking a month
          to month rental in London, Blueground has you covered.
        </div>
      </div>
      <div className="titletext2">
        <b className="in-sed">In sed</b>
        <div className="in-nullam-eget">{`In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum, donec rutrum justo, amet porttitor vitae et. Interdum consectetur dictum mattis gravida sed vulputate. Tempus sagittis cras sagittis viverra erat proin duis enim. `}</div>
      </div>
      <div className="titletext3">
        <b className="adipiscing-risus-fermentum">
          Adipiscing risus, fermentum
        </b>
        <div className="laoreet-risus-accumsan">{`Laoreet risus accumsan pellentesque lacus, in nulla eu elementum. Mollis enim fringilla aenean diam tellus diam morbi ipsum placerat. `}</div>
      </div>
    </div>
  );
};

export default Description;
