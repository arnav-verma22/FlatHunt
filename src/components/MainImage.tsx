import { FunctionComponent } from "react";
import ButtonViewAllPhotos from "./ButtonViewAllPhotos";
import styles from "./MainImage.module.css";

export type MainImageType = {
  imageSource?: string;
};

const MainImage: FunctionComponent<MainImageType> = ({ imageSource }) => {
  return (
    <div className={styles.functionBlock}>
      <img className={styles.icon} alt="" src={imageSource} />
      <ButtonViewAllPhotos />
      <div className={styles.variable}>
        <div className={styles.map} />
      </div>
    </div>
  );
};

export default MainImage;
