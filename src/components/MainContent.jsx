import styles from "./MainContent.module.css";
import cardImage from "../assets/cards.svg";
import footerImage from "../assets/logos-footer.svg";
import riseFinanceLogo from "../assets/rise-finance-logo.svg";

export function MainContent() {
  return (
    <div className={styles.main}>
      <img src={riseFinanceLogo} className={styles.riseFinanceLogo} />
      <div className={styles.boxText}>
        <h2>Scale Fintech</h2>
        <h1>Safe And Secure</h1>
        <a>
          Ship your fintech products to your customers with fast
          <p /> and reliable processes. Secure and highly customizable.
          <p /> Rise Finance is the best partner for you if you want to
          <p /> scale your finance products worldwide.
        </a>
        <button>CONSULTATION</button>
      </div>
      <img
        src={cardImage}
        alt="Image credit card"
        className={styles.cardImage}
      />
      <div className={styles.logoFooter}>
        <img src={footerImage} alt="Imagens de patrocinadores" />
      </div>
    </div>
  );
}
