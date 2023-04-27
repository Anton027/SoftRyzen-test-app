import styles from "./Header.module.scss"
import logo from "../../images/logo-book-open.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo_icon} />
                    <span className={styles.logo_name}>Finance </span> Ledger
                </a>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/">
                            About
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/">
                            Cases
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/">
                            Blog
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}