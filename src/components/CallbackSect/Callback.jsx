import styles from "./Callback.module.scss"

export const Callback = () => {
    return (
        <section>
            <div className={styles.callback}>
                <div className={styles.callback_img}></div>
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
            </div>
            <div className={styles.paddingBlock}></div>
        </section>
    )
}