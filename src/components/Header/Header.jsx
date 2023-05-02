import styles from "./Header.module.scss"
import logo from "../../images/logo-book-open.svg"
import { useState } from "react"

export const Header = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 120) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    return (
        <header className={color ? styles.header_bg : styles.header}>
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