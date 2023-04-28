import styles from "./Blog.module.scss"
import blog from "../../images/home/blog@2x.webp"

export const Blog = () => {
    return (
        <section>
            <img className={styles.blog_img} src={blog} alt="blog" />
            <ul className={styles.blog_list}>
                <li className={styles.blog_list_item}>
                    <p className={styles.blog_info}>
                        April 16 2020
                    </p>
                </li>
                <li className={styles.blog_list_item}>
                    <p className={styles.blog_title}>
                        Blog Post One
                    </p>
                </li>
                <li className={styles.blog_list_item}>
                    <p className={styles.blog_info}>
                        Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit.
                        Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid
                        impedit harum illum dolore explicabo ab dolores itaque rerum
                        temporibus doloribus iste maiores deleniti?
                    </p>
                </li>
                <li className={styles.blog_list_item}>
                    <button className={styles.blog_btn}>
                        Read Our Blog
                    </button>
                </li>
            </ul>
        </section>
    )
}