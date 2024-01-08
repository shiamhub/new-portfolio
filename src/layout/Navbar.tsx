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
import Link from 'next/link';


const Navbar: React.FC = () => {
    const { top } = useContext<any>(ScrollContext);
    const topmath = Math.floor(top * .1)

    const menu = <div className="text-sm flex gap-x-7">
        <Link href="/" className="">
            Home
        </Link>
        <Link href="/about" className="">
            About
        </Link>
        <Link href="/projects" className="">
            Projects
        </Link>
        <Link href="/skills" className="">
            Skills
        </Link>
    </div>

    return (
        <section className={`fixed left-0 top-0 right-0 dark:text-white text-white z-50`}>
            <nav className="lg:w-10/12 w-11/12 mx-auto flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center">
                    <span className="font-semibold text-xl hover:text-black">SSA</span>
                </div>
                <div className="hidden md:block">
                    {menu}
                </div>
                <div className="flex gap-7">
                    <ModeToggle></ModeToggle>
                    <Sheet>
                        <SheetTrigger>
                            <SquareUser className='text-white' strokeWidth={1.5} />
                        </SheetTrigger>
                        <SheetContent className='w-9/12 lg:w-5/12 '>
                            {/* <div className="!text-white"> */}
                                {menu}
                            {/* </div> */}
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
