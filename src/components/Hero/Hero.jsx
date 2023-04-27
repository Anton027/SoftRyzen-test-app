import { Button } from "components/Button/Button"
import styles from "./Hero.module.scss"

export const Hero = () => {
    return (
            <section className={styles.hero}>
                <h1 className={styles.hero_title}>
                    The Sky Is The Limit
                </h1>
                <p className={styles.hero_info}>
                    We provide world class financial assistance
                </p>
                <Button className={styles.hero_btn}>
                    <p>Read More</p>
                </Button>
            </section>
    )
}