import Categories from "./Categories.js"
import classes from "./Category.module.css"
import {useState} from "react"

import {
    Link,
    useParams
} from "react-router-dom"
import CategoriesAddCart from "./CategoriesAddCart.js"

const Category = ({ products }) => {
    const id = useParams().id
    const anec = products.filter(resp => resp.category_id == id)


    return (
        <>
            <div className={classes.category}>
                {anec !== undefined && anec.map(resp => <p key={resp.id}>
                   <Link className={classes.lnk} to={`/product/${resp.id}`}> <div className={classes.cat}>
                        <img className={classes.img1} src={resp.img}></img>
                    <p className={classes.p1}>{resp.title}</p>
                        <p className={classes.p2}>{resp.price}$</p>
                        
                    </div></Link>
            <CategoriesAddCart Price={resp.price} Title={resp.title} Img={resp.img} Id={resp.id} />  
            </p>
            
            )}
            </div>
        </>
    )


}


export default Category;