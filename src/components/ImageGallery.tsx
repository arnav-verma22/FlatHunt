import { FunctionComponent } from "react";
import MainImage from "./MainImage";
import MoreImages from "./MoreImages";
import "./ImageGallery.css";

const ImageGallery: FunctionComponent = () => {
  return (
    <div className="value-set">
      <MainImage imageSource="/1@2x.png" />
      <MoreImages
        image1="/5@2x.png"
        image2="/unsplashakz0w36dpm4@2x.png"
        image3="/4@2x.png"
        image4="/unsplashqeiufr5vpm8@2x.png"
      />
    </div>
  );
};

export default ImageGallery;
