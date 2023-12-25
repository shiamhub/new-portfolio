"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ModeToggle() {
    const [ mounted, setMounted ] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if(!mounted) {
        return <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width={50} height={50} alt="loader"></Image>
    }
    if( resolvedTheme === "dark" ) {
        return <Sun className="text-black" onClick={() => setTheme("light")}></Sun>
    }
    if( resolvedTheme === "light" ) {
        return <Moon className="text-black" onClick={() => setTheme("dark")}></Moon>
    }
}

