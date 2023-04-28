import styles from "./Solutions.module.scss"
import people from "../../images/home/people.jpg"

export const Solutions = () => {
    return (
        <section>
            <img className={styles.solution_img} src={people} alt="people" />
            <ul className={styles.solutions_list}>
                <li className={styles.solutions_list_item}>
                    <p className={styles.solution_info}>
                        What you are looking for
                    </p>
                </li>
                <li className={styles.solutions_list_item}>
                    <p className={styles.solution_title}>
                        We provide bespoke solutions
                    </p>
                </li>
                <li className={styles.solutions_list_item}>
                    <p className={styles.solution_info}>
                        Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit.
                        Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
                        impedit harum illum dolore explicabo ab dolores itaque rerum
                        temporibus doloribus iste maiores deleniti?
                    </p>
                </li>
                <li className={styles.solutions_list_item}>
                    <button className={styles.solution_btn}>
                        Read More
                    </button>
                </li>
            </ul>
        </section>
    )
}