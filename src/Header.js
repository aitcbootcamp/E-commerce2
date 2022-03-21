import classes from "./Header.module.css"
import logo from "./icons8-cbs-64.png"
import logo2 from "./icons8-cart-64.png"
import {
    BrowserRouter as Router,
    Routes, Route, Link
  } from "react-router-dom"
const Header = () => {
    return (
        <>
            <div className={classes.head}>
                <div className={classes.head1}>
                    
                  <Link to={"/"}> <img className={classes.img1} src={logo}></img> </Link> 
                </div>
                <div className={classes.head2}>
                   <img className={classes.img2} src={logo2}></img>
                </div>
    
</div>
            
        </>
    )

}



export default Header; 