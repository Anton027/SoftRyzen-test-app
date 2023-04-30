import styles from "./Blog.module.scss"


export const Blog = () => {
    return (
        <section className={styles.blog}>
            <div className={styles.blog_img}></div>
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