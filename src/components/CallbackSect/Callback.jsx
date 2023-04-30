import styles from "./Callback.module.scss"
import contact from "../../images/home/contact.jpg"
export const Callback = () => {
    return (
        <section className={styles.callback}>
            <img className={styles.callback_img} src={contact} alt="contact" />
            <div className={styles.callback_wrapper}>
                <p className={styles.callback_title}>
                    Request Callback
                </p>
                <form action="" className={styles.callbac_form}>
                    
                        <input className={styles.input}
                            type="text"
                            placeholder="Enter your name"
                        />
                    
                    
                        <input className={styles.input}
                            type="email"
                            placeholder="Enter email*"
                        />
                    

                    <button type="submit" className={styles.callback_btn}>
                        Send
                    </button>
                </form>
            </div>
        </section>
    )
}