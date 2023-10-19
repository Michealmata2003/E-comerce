import React from 'react';
import Categories from '../../components/categories/Categories';
import Hero from '../../components/home/Hero';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/products/Product';
import Sales from '../../components/sales/Sales';
import LatestNews from '../../components/news/Latest';
import Footer from '../../components/footer/Footer';
import CopyRight from '../../components/copyright/CopyRight';

const Home = () =>{
    return (
        <div>
            <Navbar />
            <Hero />
            <Categories />
            <Product />
            <Sales />
            <LatestNews />
            <Footer />
            <CopyRight />
        </div>
    )
}
export default Home;