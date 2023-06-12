import Wrapper from "../components/wrapper/Wrapper"
import Section from "../components/Section"
import {products ,discoutProducts } from "../utils/products"
import { DataContainer } from "../App"
import SearchBar from "../components/SeachBar/SearchBar";
import SliderHome from "../components/Slider"
import { Fragment, useContext, useEffect, useState } from "react";
import SecondNavBar from "../components/SecondNavBar/SecondNavBar";



const Home = () => {
  const {addToCart} =useContext(DataContainer);
  const newArrivalData = products.filter(item => item.category ==="mobile" || item.category ==="wireless");
  const bestSales = products.filter(item => item.category ==="sofa");

  return (
    <Fragment>
      <SecondNavBar/>
      <SliderHome/>

      <Wrapper />
      <Section title="Big Discount" bgColor="#f6f9fc" productItems={discoutProducts} addToCart={addToCart}/>
      <Section title="New Arrivals" bgColor="white" productItems={newArrivalData} addToCart={addToCart}/>
      <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} addToCart={addToCart}/>
    </Fragment>
  )
}

export default Home
