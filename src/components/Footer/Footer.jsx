import styles from "./Footer.module.scss"
import facebook from "../../images/facebook.svg"
import twit from "../../images/twit.svg"
import you from "../../images/you.svg"
import link from "../../images/link.svg"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footer_list}>
                <li>
                    <a href="/">
                        <img
                            className={styles.footer_icon}
                            src={facebook}
                            alt="facebook"
                        />
                    </a>
                    
                </li>
                <li>
                    <a href="/" className={styles.footer_icon}>
                        <img src={twit} alt="twit"/>
                    </a>
                    
                </li>
                <li>
                    <a href="/" className={styles.footer_icon}>
                        <img src={you} alt="you" />
                    </a>
                    
                </li>
                <li>
                    <a href="/" className={styles.footer_icon}>
                        <img src={link} alt="link" />
                    </a>
                    
                </li>
            </ul>
            <p className={styles.copyright}>
                Copyright © 2021 - FinanceLedger
            </p>
        </footer>
    )
}