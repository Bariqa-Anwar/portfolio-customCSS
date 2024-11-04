import Image from "next/image"
import Link from "next/link"

export default function Contact(){
    return(
        <main>
            <div className="sm:mb-24">
            <h1 className="text-center text-blue-950 font-serif text-2xl mt-12 mx-auto sm:text-3xl  lg:text-4xl 
            xl:text-5xl xl:mr-18"> 
            Contact <span className="block w-11 h-0.5 bg-red-500 mt-3 mx-auto xl:w-20">
            </span></h1> 
            </div>

            <div className="sm:flex flex-col md:ml-14 lg:ml-52 xl:ml-[350px] mx-6 sm:mx-4">
                <div className="container relative inline-block h-44 w-64 mx-auto shadow-lg bg-red-100 text-center mt-24 mb-3
                text-blue-950 font-serif text-xl sm:h-48 sm:w-96 sm:ml-32 sm:-mt-2">
                    <Image className="mt-5 mx-auto"
                    src="/images/home.png" alt="icon" height={40} width={40}/>
                    <h1 className="mt-7">Pakistan,</h1>
                    <h1>Karachi</h1>
                </div>

                <div className="container relative inline-block h-44 w-64 mx-auto shadow-lg mb-3 bg-red-100 mt-5 
                text-blue-950 font-serif text-xl sm:h-48 sm:w-96 sm:ml-32">
                <Image className="mt-8 mx-auto"
                    src="/images/mail.png" alt="icon" height={40} width={40}/>
                    <br/>
                    <Link className="font-serif text-lg ml-6 sm:ml-20" href="mail to:bariqaanwar34@gmail.com">
                    bariqaanwar34@gmail.com</Link>
                </div>

                    <div className="container relative inline-block h-44 w-64 mx-auto shadow-lg mb-3 bg-red-100 mt-5
                text-blue-950 font-serif text-lg sm:h-48 sm:w-96 sm:ml-32 ">
                <Image className="mt-8 mx-auto"
                src="/images/lkn.png" alt="icon" height={40} width={40}/>
                <br/>
                <Link className="mx-10 sm:mx-24" href="https://www.linkedin.com/in/bariqa-anwar-8767a02ba/" target="main">
                Stay connected here!</Link>
                    </div>
                    
                    <div className="container relative inline-block h-[480px] w-64 mx-auto shadow-lg mb-3 bg-red-100 mt-5
                    sm:ml-32 sm:w-96 sm:mt-6">
                        <h1 className="text-blue-950 font-serif text-xl mt-10 text-center md:text-2xl xl:text-3xl"> 
                        Get In Touch! 
                        <span className="block w-11 h-0.5 bg-red-500 mt-3 mx-24 sm:mx-40"></span>   
                        </h1>

                    <input className="border border-red-200 p-2 mt-5 ml-2 h-9 w-60 focus:outline-none focus:ring-2
                     focus:ring-red-400 placeholder:text-xs text-xs sm:w-72 sm:ml-11 lg:placeholder:text-sm md:w-80 md:ml-8
                     xl:ml-3 xl:w-[350px]" 
                    type="text" placeholder="Enter your name"/>

                    <input className="border border-red-200 p-2 mt-5 ml-2 h-9 w-60 focus:outline-none focus:ring-2
                     focus:ring-red-400 placeholder:text-xs text-xs sm:w-72 sm:ml-11 md:w-80 md:ml-8 lg:placeholder:text-sm
                     xl:ml-3 xl:w-[350px]" 
                    type="email" placeholder="Enter email address"/>

                    <input className="border border-red-200 mt-5 ml-3 h-36 w-60 focus:outline-none focus:ring-2
                     focus:ring-red-400 placeholder:text-xs text-sm pb-28 pl-1 sm:w-72 sm:ml-11 md:w-80 md:ml-8 lg:placeholder:text-sm
                     xl:ml-3 xl:w-[350px]" 
                    type="text" placeholder="Enter your message"/>

                    <p className="text-xs font-sans mt-2 ml-3 text-gray-700 sm:ml-11 md:ml-8 xl:ml-3 xl:w-[350px]">
                    0 of 1 max characters</p>
                    <button className="border border-red-300 mt-6 ml-4 h-9 w-28 text-xs 
                    text-white bg-red-500 hover:bg-red-700 sm:w-72 sm:ml-11 md:ml-8 lg:w-80 xl:ml-3 xl:w-[350px] xl:text-sm">
                    Send message </button>
                    </div>
                    </div>

                    <div className="sm:text-center">
                        <p className="text-blue-950 text-2xl ml-6 mb-7 mt-5 font-serif sm:ml-20 sm:mr-20 md:ml-24 lg:ml-32 
                        xl:mr-32 xl:text-3xl">
                        Message Me
                        <span className="block w-16 h-0.5 bg-red-500 mt-3 ml-4 sm:ml-48 sm:w-24 md:ml-60 lg:ml-[350px] xl:ml-[500px]">
                        </span>
                        </p>
                        <p className="text-gray-500 text-xs mx-5 mb-7 sm:ml-32 sm:mr-28 md:ml-44 md:mr-44 
                        lg:ml-72 lg:mr-60 xl:ml-[500px] xl:mr-[500px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe magnam dicta eius repellat quas
                        quaerat, nostrum, numquam, natus et asperiores.
                        </p>
                    </div>
        </main>
    )
}
