import Image from "next/image"

export default function Header (){
    return(
        <header>
            <div className=" text-blue-950 font-serif bg-white sm:text-left">
                <h1 className="text-xl font-semibold mt-16 sm:text-2xl sm:mt-24 sm:ml-6 sm:mr-64 md:mr-96 lg:text-5xl lg:mr-96
                lg:ml-20 xl:ml-32 xl:mr-[700px]">
                    {`I'm Frontend Developer Bariqa Anwer`}
                </h1>
                <p className="text-sm mt-6 mx-14 sm:text-left sm:ml-6 sm:mr-80 md:mr-96 lg:mt-9 lg:ml-20 xl:ml-32"> 
                    Where code meets creativity: crafting digital Frontend excellence, one pixel at a time.</p>
            </div>
            <div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-serif mx-32 mt-9 mb-16 w-28 h-8
                text-sm sm:ml-6 lg:ml-20 xl:ml-32">Hire Me</button>
            </div>

            <div className="sm:mt-[-410px]">
                <Image className="-mt-24 mb-12 mx-0 pl-1 sm:h-96 sm:w-80 sm:ml-[303px] md:ml-[430px] lg:ml-[620px] lg:h-[450px] lg:w-96
                lg:mt-[-500px] xl:ml-[730px] xl:mb-40 xl:h-[490px] xl:mt-[-520px]" 
                src="/images/pic.png" alt="photo" height={900} width={900}/>
            </div>

            <div>
                <h1 className="font-serif text-lg text-blue-950 text-center sm:text-xl lg:text-2xl"> 
                About Me!</h1>
                <p className="font-serif text-xs text-blue-950 text-center mt-4 ml-4 mr-4 lg:text-sm"> 
                    Aspiring Frontend Web Developer, Html, custom & Tailwind CSS and TypeScript...   
                </p>


                <h1 className="font-serif text-xl text-blue-950 ml-5 mr-5 mt-16 sm:text-2xl sm:mt-16 lg:ml-20 lg:text-3xl xl:ml-32"> 
                    I Create Products Not Just Arts
                <span className="block w-16 h-0.5 bg-red-500 mt-5 sm:mt-3"></span></h1>
                <p className="font-serif text-sm text-blue-950 ml-5 mr-5 mt-7 sm:mt-4 lg:text-sm lg:ml-20 xl:ml-32">
                     Here are my latest Creations, check them out!</p>
            </div>

            <div className="font-serif text-xl text-blue-950 mt-12 mb-20"> 
                <h1 className="text-xl ml-5 sm:text-2xl sm:mt-12 lg:text-3xl lg:ml-20 xl:ml-32">Rivo
                <span className="block w-6 h-0.5 bg-red-500 mt-2"></span>   
                </h1>
                <p className="text-sm mt-6 ml-5 sm:mr-8 md:mr-14 lg:ml-20 lg:mr-28 xl:ml-32 xl:mr-56"> Its a Simple but classic designed
                 Webpage, which I created as Pixel Perfect by using Tailwind CSS in Next JS. The tool used is Figma. You can find the 
                code on Github and Vercel.
                </p>
                <Image className="mt-5 h-auto w-64 mx-6 sm:h-72 sm:w-[490px] sm:ml-16 sm:mt-14 md:w-[550px] md:ml-28 lg:ml-56
                xl:ml-72" 
                src="/images/rivo.PNG" alt="webpage" height={600} width={600}/>
                </div> 
                <div className="font-serif text-xl text-blue-950 mt-12">
                    <h1 className="text-xl ml-5 sm:text-2xl lg:text-3xl lg:ml-20 xl:ml-32"> Projects 
                    <span className="block w-11 h-0.5 bg-red-500 mt-2 ml-2 md:ml-0"></span>   
                    </h1>
                    <p className="text-sm mt-6 ml-5 sm:mr-8 md:mr-16 lg:ml-20 lg:mr-28 xl:ml-32 xl:mr-56"> Here are my previous NPM 
                    projects, {`I've done about 6+ Project Applications by using Typescript and Node JS.`} You can run commands on NPM and 
                    find the code on GitHub either.
                    </p>
                    <Image className="h-44 w-60 mx-6 mt-5 mb-6 sm:h-72 sm:w-[550px] sm:mt-14 sm:ml-8 md:ml-24 lg:mt-16 lg:ml-56 xl:ml-72"
                    src="/images/projects.png" alt="photo" width={600} height={700}/>
                </div>
        </header>
    )
}