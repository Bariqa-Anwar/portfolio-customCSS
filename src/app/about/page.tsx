import Link from "next/link"
import Image from "next/image"

export default function About(){
    return(
        <main>
            <div className="xl:text-center">
                <h1 className="text-blue-950 font-serif text-xl mt-12 mx-36 relative inline-block sm:text-2xl sm:ml-60 md:text-3xl
                md:mx-72 md:mt-28 lg:text-5xl lg:mt-20 lg:mx-96 xl:mr-80 xl:mt-[60px]">
                About Me<span className="block w-9 h-0.5 bg-red-500 mt-4 mx-auto sm:w-14">
                </span></h1>
            </div>

            <div className="sm:flex">
                <Image className="h-64 w-56 mx-16 sm:h-96 sm:w-60 sm:mx-3 md:mt-[-30px] lg:h-[400px] lg:w-72 lg:ml-6 lg:mt-1 xl:ml-20"
                src="/images/aboutp.png" alt="photo" width={600} height={700}/>

            <div className=" mx-14 sm:text-right sm:mt-9 md:mx-12 lg:text-right lg:mx-20">
                <h1 className="text-xl mt-12 text-blue-950 font-serif sm:text-left lg:mt-12 lg:text-2xl xl:mt-14"> 
                Designing With Passion While Exploring The World
                <span className="block w-28 h-0.5 bg-red-500 mt-6 mx-1 sm:w-36 sm:mr-40 md:mr-56 md:w-36 md:mt-3
                lg:mr-[350px] lg:w-36 xl:mr-[600px] xl:w-40 xl:mt-4"></span>
                </h1>
                
                <div className="text-xs mt-8 font-sans text-left lg:text-sm xl:mr-44">
                <p className="text-gray-700"> 
                    {`I'm a passionate frontend web developer with a strong foundation in building responsive and user-friendly websites. 
                    My expertise includes working with HTML, CSS (both custom and Tailwind CSS), and JavaScript, with a focus on 
                    TypeScript for better scalability and maintainability. I enjoy using Next.js to create dynamic, high-performance 
                    web applications.`}
                </p>
                <p className="mt-4 text-gray-700">
                    {`I'm always eager to learn new technologies and refine my skills to deliver exceptional user experiences.`}
                </p>
                <p className="text-gray-700 mt-9"> {`Let's talk with me...`}
                </p>
                </div>
        
                </div>
                </div>

            <div>
                <Image className="h-48 w-60 mx-auto mt-14 sm:h-80 sm:w-96 md:h-96 md:w-[500px] lg:w-[500px] lg:h-[400px] xl:mt-20"
                src="/images/code.jpg" alt="photo" height={800} width={800}/>
                </div>

                <div>
                <div className="container h-60 w-64 mx-auto shadow-lg bg-red-100 text-center sm:h-60 sm:w-96
                md:container md:h-72 md:w-[500px]">
                <h1 className="mt-32 p-6 text-xl font-serif text-blue-950 sm:text-2xl md:text-3xl md:p-12"> 
                Stay In Touch!
                <span className="block w-24 h-0.5 bg-red-500 mt-4 mx-auto"></span>
                </h1>
                <h1 className="text-gray-700 text-xs font-sans sm:text-sm sm:mx-6 sm:mt-4">
                Recquirement for immaculate work with designs? Hit me an
                E-mail anytime. Ready to implement your ideas into reality.
                </h1>
                </div>

                <div className="container h-56 w-64 mt-20 mb-12 mx-auto shadow-lg bg-red-100 text-xs sm:container sm:h-60 sm:w-96
                sm:text-center md:container md:h-72 md:w-[500px]">
                    <p className="text-xl ml-20 sm:text-2xl text-blue-950 font-serif pt-9 sm:mr-20 md:text-3xl">
                    Contact:
                    <span className="block w-12 h-0.5 mr-28 bg-red-500 mt-2 mx-auto sm:w-16 sm:ml-20 md:ml-32"></span>
                    </p>

                    <input className="border border-red-200 p-2 mt-10 w-56 focus:outline-none focus:ring-2
                     focus:ring-red-400 mx-4 sm:w-72 sm:mr-5 md:mt-12 md:ml-1 lg:w-80" 
                    type="email"
                    placeholder="Enter email address"/>
    

                    <button className="flex col border border-red-300 mt-4 h-9 w-56 px-20 py-2 mx-4
                 text-white bg-red-500 hover:bg-red-700 sm:w-72 sm:ml-11 sm:px-28 md:px-28 md:py-2 md:ml-24 lg:w-80 lg:ml-20">
                    Subscribe 
                    </button>

                </div>
                </div>
        </main>
    )
}