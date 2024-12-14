import { useState } from "react";
import css from "./Header.module.css";

export const Header = ({ isLoginWindowOpen, setIsLoginWindowOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLogin = () => {
    setIsLoginWindowOpen((prev) => !prev);
  };

  return (
    <div className={css.header}>
      <div className={css.headerContent}>
        <nav className={css.nav}>
          <button
            className={css.navOpenButton}
            aria-expanded={isMenuOpen}
            aria-controls="nav-div"
            onClick={toggleMenu}
          >
            <svg width="32" height="22">
              <use href="/images/icons.svg#icon-menu" />
            </svg>
          </button>
          <div
            className={`${css.navDiv} ${
              isMenuOpen ? css.navDivOpen : css.navDivClosed
            }`}
            id="nav-div"
          >
            <button
              className={css.navCloseButton}
              aria-expanded={isMenuOpen}
              aria-controls="nav-div"
              onClick={toggleMenu}
            >
              <svg className={css.closeIcon} width="26" height="26">
                <use href="/images/icons.svg#icon-close" />
              </svg>
            </button>
            <div className={css.navLogo}>
              <svg width="28" height="28">
                <use href="/images/icons.svg#icon-ukraine" />
              </svg>
              <p>LearnLingo</p>
            </div>
            <ul className={css.navList}>
              {/* niech prowadza w odpowiednie miejsca */}
              {/* niech focus bedzie albo tylko w wysuwanej nawigacji albo w głównej
              części header */}
              <li className={css.navListItem}>
                <a className={css.navLink} href="http://localhost:3000/">
                  Home
                </a>
              </li>
              <li className={css.navListItem}>
                <a className={css.navLink} href="http://localhost:3000/">
                  Teachers
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className={css.logo}>
          <svg width="28" height="28">
            <use href="/images/icons.svg#icon-ukraine" />
          </svg>
          <p>LearnLingo</p>
        </div>
        <ul className={css.headerRight}>
          <li>
            <button
              className={css.loginButton}
              aria-expanded={isLoginWindowOpen}
              aria-controls="login-div"
              onClick={toggleLogin}
            >
              <svg width="20" height="20">
                <use href="/images/icons.svg#icon-log-in" />
              </svg>
              <p className={css.loginParagraph}>Log in</p>
            </button>
          </li>
          <li>
            <button className={css.registrationButton}>Registration</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
