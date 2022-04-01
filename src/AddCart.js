import classes from "./AddCart.module.css"
import { useState, useEffect } from "react"
import canc from "./Cancel-PNG.png"
import { useContext } from "react"
import { r } from "./useContext.js"
import { text } from "@fortawesome/fontawesome-svg-core"






const AddCart = () => {
    const { pro, setPro } = useContext(r)
    const [show, setShow] = useState(false)

    // console.log(storage)
    
    
    


    
    const handleClick = (id) => {
        setPro(pro.filter(e => id !== e.Id)); 
        localStorage.setItem("pro", JSON.stringify(pro))
    }

    useEffect(() => {
        localStorage.setItem("pro", JSON.stringify(pro))
    })
    
    // const sum = pro.reduce((acc, object) => {
    //     return acc + object.Count
    // }, 0) 
    

    const sum = pro.map(e => e.Price * e.Count)
   const s =  sum.reduce((acc, object) => {
    return acc + object
   }, 0)
    
    const mod = () => {
   setShow(true)
        
    }

    const cancel = () => {
        setShow(false)
    } 

console.log(show);

    
    
    return (
        <>  <div className={classes.cont}>
            <div className={classes.products}>
                {pro.length < 1 && <p className={classes.p4}>Your Cart Is Empty</p>}
                {pro !== null && pro.map(sto => 
                    <>
                        <div className={classes.prod}>
                    <div className={classes.images}>
                        <img className={classes.img} src={sto.Image}></img>
                        </div>
                            <div className={classes.txt}>
                            <p className={classes.p1}>{sto.Title}</p>
                            <p className={classes.p2}>{sto.Price}$</p>
                                <p className={classes.p3}>Count : {sto.Count}</p>
                            </div>
                            <div className={classes.iksi}>
                                 <img onClick={() => handleClick(sto.Id)} className={classes.img1} src={canc}></img> 
                            </div>
                        </div>
                        </>
                
                )} </div>
        <div className={classes.check}>
                {pro.map(p => <p className={classes.p10}>{p.Title}   {p.Count}x</p>)}
                <p className={classes.p11}>Total Price : {s} </p>
                <button className={classes.button1} onClick={mod}>Checkout </button>
                

            </div>
            
        </div>
            
            {show && <div className={classes.modu}>
                <div className={classes.module}>
                <p className={classes.p12}>First Name</p>
                <input className={classes.input} />
                <p className={classes.p12}>Last Name</p>
                <input className={classes.input} />
                <p className={classes.p12}>Country</p>
                <input className={classes.input} />
                <p className={classes.p12}>City</p>
                <input className={classes.input} />
                <p className={classes.p12}>Zip code</p>
                    <input className={classes.input} />
                    <div className={classes.ik}>
                        <img className={classes.imgg} src={canc} onClick={cancel}></img>
                    

                </div>
                </div>

            </div>}
        </>
    )
}


export default AddCart;