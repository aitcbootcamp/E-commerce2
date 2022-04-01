import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import classes from "./Slideshow.module.css"
import { useState, useEffect } from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Slideshow = () => {
    const [img, setImg] = useState([])
    useEffect(() => {
        axios.get("http://206.189.198.66/get_products").then(resp => {
            setImg(resp.data.userData.map(img => img.img).filter((img, index) => index < 3 ))
        })
    }, [])




}
    
    export default Slideshow;
