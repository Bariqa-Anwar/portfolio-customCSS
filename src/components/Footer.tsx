import Link from "next/link"
import styles from '@/styles/footer.module.css'
import Image from "next/image"

export default function Footer(){
    return(
        <footer className={styles.footer}>

            <div className={styles.div1}>

                <Link href="https://github.com/Bariqa-Anwar" target="main">
                <Image className={styles.gitImage} src="/images/github.PNG" alt="logo" height={200} width={200}/>
                </Link>

                <Image className={styles.insta} src="/images/insta.png" alt="logo" height={200} width={200}/>

                <Link href="https://www.linkedin.com/in/bariqa-anwar-8767a02ba/" target="main"> 
                <Image className={styles.linkedin} src="/images/linkd.png" alt="logo" height={200} width={200}/>
                </Link>
            </div>

            <div className={styles.div2}>
                <h1 className={styles.heading}> 
                Bariqa Anwar 
                <span className={styles.span}>
                </span> </h1>
                <Link className={styles.gmail} href="mail to:bariqaanwar34@gmail.com">bariqaanwar34@gmail.com
                </Link>
            </div>

            <hr className={styles.hr}></hr>
            <p className={styles.personal}>2024 @Personal Portfolio</p>
        </footer>
    )
}