import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";
import "./Header.css";

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
      <header className="menu" style={menuStyle}>
        <div className="menu1">
          <img className="logo-icon2" loading="lazy" alt="" src={logo} />
          <nav className="menu2">
            <div className="home1" onClick={onHomeTextClick}>
              Home
            </div>
            <div className="landloards" onClick={onLandloardsTextClick}>
              Landloards
            </div>
            <div className="blog1" onClick={onBlogTextClick}>
              Blog
            </div>
            <div className="contacts" onClick={onContactsTextClick}>
              Contacts
            </div>
          </nav>
        </div>
      </header>
    );
  }
);

export default Header;
