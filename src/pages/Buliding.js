import React, { useState, useRef, useEffect } from "react";
import Background from "./../assets/resources/building.webp";
import { Link } from "react-router-dom";
import bg1 from "./../assets/resources/building-1.jpg";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "../Components/Building/CarouselItem";
import Carousel1 from "./../assets/resources/buiding-carousel-1.jpg";
import Carousel2 from "./../assets/resources/buiding-carousel-2.jpg";
import Carousel3 from "./../assets/resources/buiding-carousel-3.jpg";

export default function Building(){
  return(
    <div className="flex w-full flex-col">
      <img className="w-full h-screen object-cover" src={Background}></img>
      <div className="w-full text-[#00000] text-base py-24  bg-white">
        <section className="md:flex w-full">
          <div className="w-full justify-center opacity-100 transform-none ease-linear duration-40 pointer-events-auto relative">
            <img src={bg1} title="The Building" className={`w-full object-cover transition-all duration-[600ms] relative`}/>
          </div>
          <div className="w-full px-4 md:px-16 flex relative">
            <div className={`max-w-[557px] text-lg relative my-auto transition-all duration-[500ms]`}>
              <p className="text-brown">THE BUILDING</p>
              <h2 className='max-w-[557px]  text-background text-6xl pb-3'>Welcome to<br/>a new nature<br/>of work.</h2>
              <p>This is a place where sunlight streams through vast windows, infusing the space with dynamic energy. Where you work differently, and think differently, each day.</p>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="w-full flex">
          <div className="w-full max-w-[880px] mx-auto md:py-[96px] md:text-center px-4">
            <p className="p-4 text-brown">FLOOR PlANS</p>
            <p className="text-background text-[3.75rem] pb-3">
              645,000 square feet with a soul
            </p>
            <p>With soaring 17 foot ceilings and expansive flexible floor plates, the Morgan North space offers boundless opportunities for the workspace of your dreams.</p>
          </div>
        </div>
        <Carousel
          variant="dark"
        >
          <Carousel.Item>
            <CarouselItem 
              img = {Carousel1}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItem 
              img = {Carousel2}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselItem 
              img = {Carousel3}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      
    </div>
  )
}