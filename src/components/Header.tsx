import Image from "next/image"
import styles from '@/styles/header.module.css'

export default function Header (){
    return(
        <header>
            <div className={styles.headerDiv1}>
                <h1 className={styles.heading1}>
                    {`I'm Frontend Developer Bariqa Anwer`}
                </h1>
                <p className={styles.para1}> 
                    Where code meets creativity: crafting digital Frontend excellence, one pixel at a time.</p>
            </div>
            <div>
                <button className={styles.button}>Hire Me</button>
            </div>

            <div className={styles.div3}>
                <Image className={styles.image1}
                src="/images/pic.png" alt="photo" height={900} width={900}/>
            </div>

            <div>
                <h1 className={styles.heading2}> 
                About Me!</h1>
                <p className={styles.para2}> 
                    Aspiring Frontend Web Developer, Html, custom & Tailwind CSS and TypeScript...   
                </p>


                <h1 className={styles.heading3}> 
                    I Create Products Not Just Arts
                <span className={styles.span1}></span></h1>
                <p className={styles.para3}>
                     Here are my latest Creations, check them out!</p>
            </div>

            <div className={styles.div4}> 
                <h1 className={styles.heading4}>Rivo
                <span className={styles.span2}></span>   
                </h1>
                <p className={styles.para4}> Its a Simple but classic designed
                 Webpage, which I created as Pixel Perfect by using Tailwind CSS in Next JS. The tool used is Figma. You can find the 
                code on Github and Vercel.
                </p>
                <Image className={styles.image2}
                src="/images/rivo.PNG" alt="webpage" height={600} width={600}/>
                </div> 
                <div className={styles.lastDiv}>
                    <h1 className={styles.lastHeading}> Projects 
                    <span className={styles.span3}></span>   
                    </h1>
                    <p className={styles.lastPara}> Here are my previous NPM 
                    projects, {`I've done about 6+ Project Applications by using Typescript and Node JS.`} You can run commands on NPM and 
                    find the code on GitHub either.
                    </p>
                    <Image className={styles.lastImage}
                    src="/images/projects.png" alt="photo" width={600} height={700}/>
                </div>
        </header>
    )
}