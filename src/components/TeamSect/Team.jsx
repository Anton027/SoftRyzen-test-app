import styles from "./Team.module.scss"
import person1 from "../../images/team/person1.jpg"
import person2 from "../../images/team/person2.jpg"
import person3 from "../../images/team/person3.jpg" 

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
                    src={person1}  
                    alt="person1" />
                    <p className={styles.team_name}>
                        John Doe
                    </p>
                    <p className={styles.team_position}>
                        President
                    </p>
                </li>
                <li>
                    <img className={styles.gallery_list_img} 
                    src={person2} 
                    alt="person2" />
                    <p className={styles.team_name}>
                        Jane Doe
                    </p>
                    <p className={styles.team_position}>
                        Vice President
                    </p>
                </li>
                <li>
                    <img className={styles.gallery_list_img} 
                    src={person3}  
                    alt="person3" />
                    <p className={styles.team_name}>
                        Steve Smith
                    </p>
                    <p className={styles.team_position}>
                        Marketing Head
                    </p>
                </li>
            </ul>
        </section>
    )
}