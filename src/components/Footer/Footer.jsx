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
                    <img src={facebook} alt="facebook" />
                </li>
                <li>
                    <img src={twit} alt="twit" />
                </li>
                <li>
                    <img src={you} alt="you" />
                </li>
                <li>
                    <img src={link} alt="link" />
                </li>
            </ul>
            <p className={styles.copyright}>
                Copyright © 2021 - FinanceLedger
            </p>
        </footer>
    )
}