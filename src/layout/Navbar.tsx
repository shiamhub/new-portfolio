"use client"
import React, { useContext } from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from '@/components/btn/ModeToggle';
import { SquareUser } from 'lucide-react';
import { ScrollContext } from '@/providers/ScrollProvider';


const Navbar: React.FC = () => {
    const { top } = useContext<any>(ScrollContext);
    // const top = 244.55
    const topmath = Math.floor(top * .1)
    // console.log("🚀 ~ file: Navbar.tsx:15 ~ top:", topmath)
    return (
        <section className={`fixed ${topmath > 5 ? topmath > 10 ? topmath > 15 ? topmath > 20 ? topmath > 30 ? topmath >30 ? '-top-16' : '-top-10' : '-top-5' : '-top-5' : '-top-3' : '-top-3' : 'top-0'} left-0 right-0 bg-slate-500 z-50`}>
            <nav className="lg:w-10/12 w-11/12 mx-auto flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <span className="font-semibold text-xl tracking-tight">My Website</span>
                </div>
                <div className="hidden md:block !text-black">
                    <div className="text-sm lg:flex-grow">
                        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            Home
                        </a>
                        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            About
                        </a>
                        <a href="/projects" className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            Projects
                        </a>
                        <a href="/skills" className="block mt-4 lg:inline-block lg:mt-0">
                            Skills
                        </a>
                    </div>
                </div>
                <div className="flex gap-7">
                    <ModeToggle></ModeToggle>
                    <Sheet>
                        <SheetTrigger><SquareUser className='text-black' strokeWidth={1.5} /></SheetTrigger>
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
