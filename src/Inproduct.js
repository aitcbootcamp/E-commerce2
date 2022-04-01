import classes from "./Inproduct.module.css"
import Category from "./Category.js"
import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect, useContext } from "react"
import logo from "./Daco_744850.png"
import logo1 from "./Daco_2737804.png"
import React from "react"

import {
    Link, 
    useParams
} from "react-router-dom"
import { r } from "./useContext.js";

const Inproduct = ({ products }) => {
    const [count, setCount] = useState(1)
    const { pro, setPro } = useContext(r)

  
 

    const id = useParams().id
    const anec = products.find(resp => resp.id == id)
    const images = [
        { url: anec !== undefined && anec.img },
        { url: anec !== undefined && anec.img2 },
        { url: anec !== undefined && anec.img3 }

    ];



    const leftClick = (e) => {
        e.preventDefault()
        
       count > 0 && setCount(count - 1)
    }
    const rightClick = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }

    const addedProduct = {
        Title: anec  && anec.title,
        Price: anec  && anec.price,
        Image: anec  && anec.img,
        Count: anec && count,
        Id: anec && anec.id,
    }

    useEffect(() => {
        localStorage.setItem('pro', JSON.stringify(pro))
    }, [pro])
    
    const matched = pro.find(p => p.Id === addedProduct.Id)


    const addCart = (e) => {
        if(matched) {
            setPro(pro.map(p => p.Id === addedProduct.Id ? { ...p, Count: p.Count += addedProduct.Count } : p))    
        } else {
            setPro([...pro, addedProduct])
            
            }
        e.preventDefault()
        localStorage.setItem('pro', JSON.stringify(pro))

    }

    

    // localStorage.setItem("sto", JSON.stringify(pro))

    
    return (
        <>
            {anec !== undefined && <div className={classes.inpro}>
                
                <div className={classes.inpro1}>
                    
                
                    <SimpleImageSlider
                        width={746}
                        height={410}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
                
                <div className={classes.inpro2}>
                    <p className={classes.p1}>{anec.title}</p>
                    <p className={classes.p2}>{anec.price}$</p>
                    <p className={classes.p3}>{anec.description}</p>
                    <div className={classes.cart}>
                        <p className={classes.p4}>Set Count : </p>
                        <div className={classes.cart1}>
                            <a href="" onClick={leftClick}> <img className={classes.img2} src={logo1}></img></a>
                            <p>{count}</p>
                            <a href="" onClick={rightClick}> <img className={classes.img3} src={logo}></img> </a>
                        </div>
                        <div className={classes.addToCart}>
                            <button className={classes.btn} onClick={addCart}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>}
        
        </>
    )
}


export default Inproduct;