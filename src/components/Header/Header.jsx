import styles from "./Header.module.scss"
import logo from "../../images/logo-book-open.svg"

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.wrap_logo}>
                    <a href="/" className={styles.logo}>
                        <img src={logo} alt="logo" className={styles.logo_icon} />
                        <span className={styles.logo_name}>Finance </span> Ledger
                    </a>
                </div>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.list_link}>
                            Home
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.list_link}>
                            About
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.list_link}>
                            Cases
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.list_link}>
                            Blog
                        </a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="/" className={styles.list_link}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}