import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PostPropertyForm from "./PostPropertyForm";
import styles from "./FrameComponent9.module.css";

const LandLordsPageDetails: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLandloardsTextClick = useCallback(() => {
    navigate("/landlords-page");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    // Please sync "Blog page" to the project
  }, []);

  const onContactsTextClick = useCallback(() => {
    // Please sync "Contacts page" to the project
  }, []);

  return (
    <section className={styles.menuParent}>
      <Header
        logo="/logo2@2x.png"
        menuAlignSelf="stretch"
        menuFlex="unset"
        onHomeTextClick={onHomeTextClick}
        onLandloardsTextClick={onLandloardsTextClick}
        onBlogTextClick={onBlogTextClick}
        onContactsTextClick={onContactsTextClick}
      />
      <div className={styles.formWrapper}>
        <PostPropertyForm />
      </div>
    </section>
  );
};

export default LandLordsPageDetails;
