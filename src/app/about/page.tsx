import Image from "next/image"
import styles from '@/styles/about.module.css' 


export default function About(){
    return(
        <main>
            <div className={styles.div1}>
                <h1 className={styles.heading1}>
                About Me<span className={styles.span1}>
                </span></h1>
           </div>

            <div className={styles.div2}>
                <Image className={styles.image1}
                src="/images/aboutp.png" 
                alt="photo" width={600} height={700}/>

            <div className={styles.div3}>
                <h1 className={styles.heading2}> 
                Designing With Passion While Exploring The World
                <span className={styles.span2}></span>
                </h1>
                
                <div className={styles.div4}>
                <p> 
                    {`I'm a passionate frontend web developer with a strong foundation in building responsive and user-friendly websites. 
                    My expertise includes working with HTML, CSS (both custom and Tailwind CSS), and JavaScript, with a focus on 
                    TypeScript for better scalability and maintainability. I enjoy using Next.js to create dynamic, high-performance 
                    web applications.`}
                </p>
                <p className={styles.para1}>
                    {`I'm always eager to learn new technologies and refine my skills to deliver exceptional user experiences.`}
                </p>
                <p className={styles.para2}> {`Let's talk with me...`}
                </p>
                </div>
        
                </div>
                </div>

            <div className={styles.divImage}>
                <Image className={styles.image2}
                src="/images/code.jpg" alt="photo" height={800} width={800}/>
            </div>

                <div>
                <div className={styles.div5}>
                <h1 className={styles.heading3}> 
                Stay In Touch!
                <span className={styles.span3}></span>
                </h1>
                <h1 className={styles.heading4}>
                Recquirement for immaculate work with designs? Hit me an
                E-mail anytime. Ready to implement your ideas into reality.
                </h1>
                </div>

                <div className={styles.div6}>
                    <p className={styles.para3}>
                    Contact:
                    <span className={styles.span4}></span>
                    </p>

                    <input className={styles.input} 
                    type="email"
                    placeholder="Enter email address"/>
    

                    <button className={styles.button}>
                    Subscribe 
                    </button>

                </div>
                </div>
        </main>
    )
}