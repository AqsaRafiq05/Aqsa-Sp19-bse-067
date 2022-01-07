import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PicSlider from '../components/PicSlider'
import Products from '../components/Products'



const Home = () => {
    return (
        <div>
            <Announcement/>
           <Header/>
           <PicSlider/>
           <Categories/>
           <Products/>
           <Footer/>
          

         
        </div>
    )
}

export default Home

