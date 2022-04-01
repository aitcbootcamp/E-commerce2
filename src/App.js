import classes from './App.module.css';
import Header from "./Header.js"
import {
  BrowserRouter as Router,
  Routes, Route, Link, UNSAFE_RouteContext
} from "react-router-dom"
import Footer from "./Footer.js"
import Categories from "./Categories.js"
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import Slider from "./Slider.js"
import SimpleImageSlider from "react-simple-image-slider";
import { useState, useEffect } from "react"
import axios from "axios"
import Category from "./Category.js"
import Inproduct from "./Inproduct.js"
import AddCart from "./AddCart.js"
import { CartProvider } from "./useContext.js"



function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get("http://206.189.198.66/get_products").then(resp => {
      setProducts(resp.data.userData)
    })
    console.log(products);
}, [])
  const [img, setImg] = useState([])
  useEffect(() => {
      axios.get("http://206.189.198.66/get_products").then(resp => {
          setImg(resp.data.userData.map(img => img.img).filter((img, index) => index > 3  && index < 15 ))
      })
  }, [])

  

  const images = [
    { url: img[1] },
    { url: img[0] },
    { url: img[2] },
    { url: img[3] },
    { url: img[4] },
    { url: img[5] },
    { url: img[6] }
  ];

  const Home = () => { 
    return (
        <>
      <div className={classes.cont}>
        <Categories />
          <div className={classes.sld}>
            <Slider />
      {/* <SimpleImageSlider
        width={796}
              height={410}
              // style={{".rsis-image":{height:'100px'}}}
              images={images}
        showBullets={true}
            showNavs={true}
            autoPlay={true}
          /> */}
          </div>
        </div>
          </>
       )}
  
  
  return (
    <>
      <CartProvider >
      
    <Router>
      <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category products={products} />} />
          <Route path="/product/:id" element={<Inproduct products={products} />} />
          <Route path="/addcart" element={<AddCart />} />
        
        </Routes>
      
      <Footer />
      
    

        </Router>
        </CartProvider>
    </>
  )
}

export default App;
