import styles from "./Cases.module.scss" 
import cases1 from "../../images/cases/cases1.jpg"
import cases3 from "../../images/cases/cases3.jpg"
import cases2 from "../../images/cases/cases2.jpg"
import cases5 from "../../images/cases/cases5.jpg"
import cases7 from "../../images/cases/cases7.jpg"
import cases4 from "../../images/cases/cases4.jpg"

export const Casses = () => {
    return (
        <section className={styles.cases}>
            <ul className={styles.cases_list}>
                <li className={styles.cases_item}>
                    <p className={styles.item_info}>
                        This is what we do
                    </p>
                </li>
                <li className={styles.cases_item}>
                    <p className={styles.item_title}>
                        Business Cases
                    </p>
                </li>
                <li className={styles.cases_item}>
                    <p className={styles.item_info}>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Architecto, sapiente!
                    </p>
                </li>
            </ul>
            <ul className={styles.gallery_list}>
                <li>
                    <img className={styles.gallery_list_img} src={cases1} alt="cases1" />
                </li>
                <li>
                    <img className={styles.gallery_list_img} src={cases3} alt="cases3" />
                </li>
                <li>
                    <img className={styles.gallery_list_img} src={cases5} alt="cases5" />
                </li>
                <li>
                    <img className={styles.gallery_list_img} src={cases7} alt="cases7" />
                </li>
                <li>
                    <img className={styles.gallery_list_img} src={cases2} alt="cases2" />
                </li>
                <li>
                    <img className={styles.gallery_list_img} src={cases4} alt="cases4" />
                </li>
            </ul>
        </section>
    )
}