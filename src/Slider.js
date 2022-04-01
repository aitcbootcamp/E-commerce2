import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useState, useEffect } from "react"
import axios from "axios"
import classes from "./Slider.module.css"

 



const Slider = () => {
    const [img, setImg] = useState([])
    useEffect(() => {
        axios.get("http://206.189.198.66/get_products").then(resp => {
            setImg(resp.data.userData.map(img => img.img).filter((img, index) => index > 3  && index < 15 ))
        })
    }, [])
    return ( 
      <>
            <Splide
                hasAutoplayProgress='true'
      options={ {
        rewind: true,
        gap: '1rem',
                    width: 1100,
                    height: 405,
          autoplay: true,
          interval: 5000,
                    pauseOnHover: true
      } }
    >
      <SplideSlide>
        <img className={classes.img1} src={img[0]} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img className={classes.img2} src={img[1]} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img className={classes.img3} src={img[2]} alt="Image 3"/>
                </SplideSlide>
                <SplideSlide>
                    <img className={classes.img3} src={img[3]} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
        <img className={classes.img3} src={img[4]} alt="Image 3"/>
      </SplideSlide>
    </Splide>
        </>
    )
}



export default Slider;