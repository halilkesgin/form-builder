"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Computer } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Tabs defaultValue={theme}>
            <TabsList className="border">
                <TabsTrigger 
                    value="light"
                    onClick={() => setTheme("light")}
                >
                    <Sun className="h-5 w-5" />
                </TabsTrigger>
                <TabsTrigger 
                    value="dark"
                    onClick={() => setTheme("dark")}
                >
                    <Moon className="h-5 w-5 rotate-90 transition-all dark:rotate-0" />
                </TabsTrigger>
                <TabsTrigger 
                    value="system"
                    onClick={() => setTheme("system")}
                >
                    <Computer className="h-5 w-5" />
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}
 
export default ThemeSwitcher