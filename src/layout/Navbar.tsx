
import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from '@/components/btn/ModeToggle';
import { SquareUser } from 'lucide-react';


const Navbar: React.FC = () => {
    return (
        <section className=' bg-gray-800'>

            <nav className="lg:w-10/12 w-11/12 mx-auto flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">My Website</span>
                </div>
                <div className="hidden md:block">
                    <div className="text-sm lg:flex-grow">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            Home
                        </a>
                        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            About
                        </a>
                        <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
                            Projects
                        </a>
                        <a href="/skills" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
                            Skills
                        </a>
                    </div>
                </div>
                <div className="flex gap-7">
                    <ModeToggle></ModeToggle>
                    <Sheet>
                        <SheetTrigger><SquareUser className='text-white' strokeWidth={1.5} /></SheetTrigger>
                        <SheetContent className='w-9/12 lg:w-5/12'>
                            <div className="">
                                <div className="text-sm lg:flex-grow text-black">
                                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">
                                        Home
                                    </a>
                                    <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">
                                        About
                                    </a>
                                    <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400 mr-4">
                                        Projects
                                    </a>
                                    <a href="/skills" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-400">
                                        Skills
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
