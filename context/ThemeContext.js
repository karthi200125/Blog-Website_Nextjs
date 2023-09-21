"use client"

import { createContext, useState } from "react"

export const Themecotext = createContext();

export const ThemeProvider=({children})=>{
    const [mode , setmode] = useState("dark")

    const toggle = ()=>{
        setmode((prev) => (prev === "dark" ? "light" : " dark"))
    }    
return (
    <Themecotext.Provider value={{toggle , mode}}>
        <div className={`theme ${mode}`}>{children}</div>
    </Themecotext.Provider>
  )
}