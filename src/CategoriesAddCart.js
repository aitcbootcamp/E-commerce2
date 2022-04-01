import {useState, useContext, useEffect } from "react"
import classes from "./CategoriesAddCart.module.css"
import { r } from "./useContext.js"
import logo2 from "./Daco_744850.png"
import logo3 from "./Daco_2737804.png"
import {
    Link,
    useParams
} from "react-router-dom"


const CategoriesAddCart = ( props ) => {
    const { pro, setPro } = useContext(r)
    const [count, setCount] = useState(1)


    

    const added = {
        Price: props.Price,
        Title: props.Title,
        Image: props.Img,
        Count: count,
        Id: props.Id
    }


    useEffect(() => {
        localStorage.setItem('pro', JSON.stringify(pro))
    }, [pro])
    

    const matched = pro.find(p => p.Id === added.Id)

    

    const addCart = () => {
        if(matched) {
            setPro(pro.map(p => p.Id === added.Id ? { ...p, Count: p.Count += added.Count } : p  )) 
        } else {
            setPro([...pro, added])
            }
        localStorage.setItem('pro', JSON.stringify(pro))
        console.log(added)
    }
    
    const leftClick = (e) => {
        e.preventDefault()
        
       count > 0 && setCount(count - 1)
    }
    const rightClick = (e) => {
        e.preventDefault()
        setCount(count + 1)
    }

    return (
        <>
            <div className={classes.button}>
                <div className={classes.button1}>
                    <img className={classes.img4} onClick={leftClick} src={logo3}></img>
                    <p>{count}</p>
                    <img className={classes.img5} onClick={rightClick} src={logo2}></img>
                </div>
                <div className={classes.button2}>
                    <button className={classes.btn} onClick={addCart}>Add Cart</button>
                </div>


            </div>
            
        </>
    )
}

export default CategoriesAddCart;
