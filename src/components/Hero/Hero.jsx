// import { Button } from "components/Button/Button"
import styles from "./Hero.module.scss"
import { BiChevronRight } from "react-icons/bi";

export const Hero = () => {
    return (
            <section className={styles.hero}>
                <p className={styles.hero_title}>
                    The Sky Is The Limit
                </p>
                <p className={styles.hero_info}>
                    We provide world class financial assistance
                </p>
                <button className={styles.hero_btn}>
                    <BiChevronRight size={18} /> Read More
                </button>
            </section>
    )
}