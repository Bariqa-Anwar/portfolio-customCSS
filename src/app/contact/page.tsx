import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/contact.module.css' 

export default function Contact(){
    return(
        <main>
            <div className={styles.div1}>
            <h1 className={styles.heading1}> 
            Contact <span className={styles.span1}>
            </span></h1> 
            </div>

            <div className={styles.div2}>
                <div className={styles.div3}>
                    <Image className={styles.image1}
                    src="/images/home.png" alt="icon" height={40} width={40}/>
                    <h1 className={styles.heading2}>Pakistan,</h1>
                    <h1 className={styles.Karachi}>Karachi</h1>
                </div>

                <div className={styles.div4}>
                <Image className={styles.image2}
                    src="/images/mail.png" alt="icon" height={40} width={40}/>
                    <br/>
                    <Link className={styles.link1} href="mail to:bariqaanwar34@gmail.com">
                    bariqaanwar34@gmail.com</Link>
                </div>

                    <div className={styles.div5}>
                <Image className={styles.image3}
                src="/images/ldn.jpg" alt="icon" height={40} width={40}/>
                <br/>
                <Link className={styles.link2} href="https://www.linkedin.com/in/bariqa-anwar-8767a02ba/" target="main">
                Stay connected here!</Link>
                    </div>
                    
                    <div className={styles.div6}>
                        <h1 className={styles.heading3}> 
                        Get In Touch! 
                        <span className={styles.span2}></span>   
                        </h1>

                    <input className={styles.input1} 
                    type="text" placeholder="Enter your name"/>

                    <input className={styles.input2} 
                    type="email" placeholder="Enter email address"/>

                    <input className={styles.input3}
                    type="text" placeholder="Enter your message"/>

                    <p className={styles.para1}>
                    0 of 1 max characters</p>
                    <button className={styles.button}>
                    Send message </button>
                    </div>
                    </div>

                    <div className={styles.div7}>
                        <p className={styles.para2}>
                        Message Me
                        <span className={styles.span3}>
                        </span>
                        </p>
                        <p className={styles.last}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam dicta eius repellat quas
                        quaerat, nostrum, numquam, natus et asperiores.
                        </p>
                    </div>
        </main>
    )
}