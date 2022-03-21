import classes from "./Footer.module.css"


const Footer = () => {
    return (
        <>
            <div className={classes.ft}>
            <div className={classes.foot}>
                <div className={classes.foot1}>
                    <p>Laptops</p>
                    <p>Computers</p>
                </div>
                <div className={classes.foot2}>
                    <p>Mobiles</p>
                    <p>Accessories</p>
                </div>
                <div className={classes.foot5}>
                    <p>Tablets</p>
                </div>
 
            </div>
                    <div className={classes.f}>
                     <div className={classes.foot3}>
                        <p className={classes.p1}>Contact :</p>
                        </div>
                    <div className={classes.foot4}>
                        <p>Firstproject@yahoo.com</p>
                    <p>+995 595 34 54 12</p>
                </div>
                </div>   
                    </div>
            
            




        </>
    )
}

export default Footer;