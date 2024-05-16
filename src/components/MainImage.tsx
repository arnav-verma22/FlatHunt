import { FunctionComponent } from "react";
import ButtonViewAllPhotos from "./ButtonViewAllPhotos";
import "./MainImage.css";

export type MainImageType = {
  imageSource?: string;
};

const MainImage: FunctionComponent<MainImageType> = ({ imageSource }) => {
  return (
    <div className="function-block">
      <img className="icon2" alt="" src={imageSource} />
      <ButtonViewAllPhotos />
      <div className="variable">
        <div className="map" />
      </div>
    </div>
  );
};

export default MainImage;
