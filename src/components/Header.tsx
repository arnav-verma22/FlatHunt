import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import styles from "./Header.module.css";

export type HeaderType = {
  logo?: string;

  /** Style props */
  menuAlignSelf?: CSSProperties["alignSelf"];
  menuFlex?: CSSProperties["flex"];

  /** Action props */
  onHomeTextClick?: () => void;
  onLandloardsTextClick?: () => void;
  onBlogTextClick?: () => void;
  onContactsTextClick?: () => void;
};

const Header: FunctionComponent<HeaderType> = memo(
  ({
    logo,
    menuAlignSelf,
    menuFlex,
    onHomeTextClick,
    onLandloardsTextClick,
    onBlogTextClick,
    onContactsTextClick,
  }) => {
    const menuStyle: CSSProperties = useMemo(() => {
      return {
        alignSelf: menuAlignSelf,
        flex: menuFlex,
      };
    }, [menuAlignSelf, menuFlex]);

    return (
      <header className={styles.menu} style={menuStyle}>
        <div className={styles.menu1}>
          <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
          <nav className={styles.menu2}>
            <div className={styles.home} onClick={onHomeTextClick}>
              Home
            </div>
            <div className={styles.landloards} onClick={onLandloardsTextClick}>
              Landloards
            </div>
            <div className={styles.blog} onClick={onBlogTextClick}>
              Blog
            </div>
            <div className={styles.contacts} onClick={onContactsTextClick}>
              Contacts
            </div>
          </nav>
        </div>
      </header>
    );
  }
);

export default Header;
