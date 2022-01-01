import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

const useDarkMode = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if(theme === 'ligh'){
            window.localStorage.setItem('theme' , 'dark')
            setTheme('dark')
        }else{
            window.localStorage.setItem('theme' , 'light')
            setTheme('light')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        if(localTheme){
            setTheme(localTheme)
        }
    },[])

    return[theme , toggleTheme]
}

export default useDarkMode