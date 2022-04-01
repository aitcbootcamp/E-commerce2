import classes from "./Categories.module.css"
import { useState, useEffect } from "react"
import axios from "axios"
import "@fontsource/roboto";
import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from "react-router-dom"


const Categories = () => {
    const [categories, setCategories] = useState([])
    
    
    useEffect(() => {
        axios.get("http://206.189.198.66/get_categories").then(resp => {
            setCategories(resp.data.userData)
  
            
        })
    }, [])
    

    return (
        <>
            <div className={classes.categ}>
                {categories.map(resp => <p key={resp.id} className={classes.p}>
                    <Link className={classes.lnk} to={`/category/${resp.id}`}> {resp.title} </Link>
                    </p>
                )} 

            </div>
        
        </>
    )

}



export default Categories;