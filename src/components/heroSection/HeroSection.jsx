import React from 'react'
import banner2 from "./banner2.jpg"
import {  Link } from "react-router-dom";


function HeroSection() {
  return (
    <div className='h-[80vh] hero'>
      <div className="left">
      <img className='w-[500px]' src={banner2} alt=""  data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay='300'/>
      </div>
      <div className="right" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-delay='600'>
        <div className="right-top">
          <div className="line"></div>
          <span>Self Adhesive Labels</span>
        </div>
        <span>
          Shop Best Labels <br /> for your Products

        </span>
        <p>At <b className='text-primarylight'>FasJet</b> , we believe that labels aren't just pieces of paper or adhesive Whether you're a small startup or an established enterprise, we're here to provide you with labels that make a lasting impression.</p>
        <Link to="/products" className='bg-primarylight button' >Explore Products</Link>
      </div>
    </div>
  )
}

export default HeroSection