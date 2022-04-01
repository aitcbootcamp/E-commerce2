import classes from "./Header.module.css"
import logo from "./icons8-cbs-64.png"
import logo2 from "./icons8-cart-64.png"
import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from "react-router-dom"
import { useContext } from "react"
import { r } from "./useContext.js"

const Header = () => {
  const { pro, setPro } = useContext(r);


  const sum = pro.reduce((accumulator, object) => {
  return  accumulator + object.Count }, 0)

    return (
        <>
            <div className={classes.head}>
                <div className={classes.head1}>
                    
                  <Link to={"/"}> <img className={classes.img1} src={logo}></img> </Link> 
                </div>
          <div className={classes.head2}>
            <div className={classes.count}>{sum} </div>
                     <Link to={"/addcart"}> <img className={classes.img2} src={logo2}></img> </Link>
          </div>
          
          
    
        </div>
        
            
        </>
    )

}



export default Header; 