import styles from "./Team.module.scss"

export const Team = () => {
    return (
        <section className={styles.team}>
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
                    <img className={styles.gallery_list_img} 
                    src=""  
                    alt="cases1" />
                    <p>
                        John Doe
                    </p>
                    <p>
                        President
                    </p>
                </li>
                <li>
                    <img className={styles.gallery_list_img} 
                    src="" 
                    alt="cases3" />
                    <p>
                        Jane Doe
                    </p>
                    <p>
                        Vice President
                    </p>
                </li>
                <li>
                    <img className={styles.gallery_list_img} 
                    src=""  
                    alt="cases5" />
                    <p>
                        Steve Smith
                    </p>
                    <p>
                        Marketing Head
                    </p>
                </li>
            </ul>
        </section>
    )
}