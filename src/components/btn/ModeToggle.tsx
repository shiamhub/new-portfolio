"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import { useState } from "react"

export function ModeToggle() {
    const [mode, setMode] = useState(true)
    const { setTheme } = useTheme()

    return (
        <div>
            {
                !mode ? <Button onClick={() => {
                    setMode(!mode)
                    setTheme("dark")
                }} variant="outline" size="icon">
                    <Sun />
                </Button> : <Button onClick={() => {
                    setMode(!mode)
                    setTheme("light")
                }} variant="outline" size="icon">
                    <Moon />
                </Button>
            }
        </div>
    )
}
