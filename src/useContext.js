import { createContext } from "react"
import {useState } from "react"

export const r = createContext([])


export const CartProvider = ({ children }) => {
    
    let value = []
    let locale = JSON.parse(localStorage.getItem("pro"))
    if (locale) {
        value = locale;
    }
    
    const [pro, setPro] = useState(value)




    return (
        <>
            <r.Provider value={{ pro, setPro }}>
                {children}
            </r.Provider>
    </>
)


} 

