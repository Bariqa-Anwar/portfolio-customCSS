import { Menu } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

export default function Navbar (){
    return(
        <nav className="flex justify-between bg-white font-serif text-blue-950 md:mt-6">
            <div>
            <h1 className="text-2xl mt-4 ml-3 sm:ml-6 hover:text-red-400 hover:cursor-pointer">Portfolio</h1>
            </div>
            {/* Nav buttons */}
            <ul className="hidden md:block">
                <li className="flex gap-12 mt-3 text-lg mr-10">
                    <Link className="hover hover:text-red-400" href="/"> Home</Link>
                    <Link className="hover hover:text-red-400" href="/about"> About</Link>
                    <Link className="hover hover:text-red-400" href="/contact"> Contact</Link>
                </li>
            </ul>
            <Sheet>
  <SheetTrigger className="md:hidden"><Menu className="hover:text-red-400"/></SheetTrigger>
  <SheetContent className="bg-white">
  <ul>
                <li className="flex flex-col text-lg font-serif mt-5 font-semibold ">
                    <Link className="hover hover:text-red-400" href="/"> Home</Link>
                    <Link className="hover hover:text-red-400 mt-3" href="/about"> About</Link>
                    <Link className="hover hover:text-red-400 mt-3" href="/contact"> Contact</Link>
                </li>
            </ul>
  </SheetContent>
</Sheet>
        </nav>
    )
}