import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
import styles from "../stylesheet/Footer.module.css";

const Footer = () => {
  const { theme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <div className={`${styles.top}`}>back to tops</div>
        <div
          className={`${
            darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
          } ${styles.footer}`}
        >
          <div className="container">
            <div className={`row`}>
              <div className="col-sm-12 col-lg-6">
                <img
                  className={`${darkMode ? styles.iconsDark : ""} ${
                    styles.dhLogo
                  }`}
                  src="/images/DH.png"
                  alt="logos"
                />
              </div>
              <div
                className={`col-sm-12 col-lg-6 ${
                  darkMode ? styles.iconsDark : ""
                } ${styles.icons}`}
              >
                <img
                  src="/images/ico-facebook.png"
                  alt="facebook"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-instagram.png"
                  alt="instagram"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-whatsapp.png"
                  alt="whatsapp"
                  className={styles.icon}
                />
                <img
                  src="/images/ico-tiktok.png"
                  alt="tiktok"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
