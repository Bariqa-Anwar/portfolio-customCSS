import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="bg-blue-950 text-white h-72">

            <div className="flex gap-5 ml-14 sm:gap-9 sm:ml-64 md:ml-80 lg:ml-[450px] xl:ml-[590px]">
                <Link href="https://github.com/Bariqa-Anwar" target="main">
                <Image className="mt-8 h-5 w-5" src="/images/github.PNG" alt="logo" height={200} width={200}/>
                </Link>
                <Image className="mt-8 h-6 w-6" src="/images/insta.png" alt="logo" height={200} width={200}/>
                <Link href="https://www.linkedin.com/in/bariqa-anwar-8767a02ba/" target="main"> 
                <Image className="mt-8 h-5 w-5" src="/images/linkedin.png" alt="logo" height={200} width={200}/>
                </Link>
            </div>

            <div className="mt-16 ml-6 sm:text-center sm:mx-auto xl:mr-12">
                <h1 className="text-xl font-semibold mb-3 md:text-2xl md:font-serif lg:text-3xl"> 
                Bariqa Anwar 
                <span className="block w-28 h-0.5 bg-red-500 sm:mx-auto md:mx-auto md:w-40 lg:w-44">
                </span> </h1>
                <Link className="font-sans" href="mail to:bariqaanwar34@gmail.com">bariqaanwar34@gmail.com
                </Link>
            </div>

            <hr className="mt-10"></hr>
            <p className="ml-6 text-xs mt-5 sm:mx-auto sm:text-center xl:mr-12">2024 @Personal Portfolio</p>
        </footer>
    )
}