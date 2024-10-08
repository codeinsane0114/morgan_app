import React, {useEffect, useState} from 'react';
import bg from "./../../assets/resources/building.webp";
import { Link } from 'react-router-dom';
export default function LinkCart({name, link, img, className}) {
  const [onCartHover, setOnCartHover] = useState(false);
  const [onLinkHover, setOnLinkHover] = useState(false);

  return(
    <>
      <Link to={link}>
        <div className={`flex flex-col ${className}`}>
          <div className={`relative w-full cursor-pointer`}
            onMouseOver={() => {setOnCartHover(true)}}
            onMouseOut={() => {
              setOnCartHover(false)
            }}
          >
            <img src={img}></img>
            <div className={`absolute top-0 right-0 left-0 bottom-0 ${onCartHover? 'bg-background opacity-75' : ''} transition-all duration-300`}></div>
            <div className='absolute right-0 top-0 left-0 bottom-0'>
              <div className={`w-full h-full content-center text-center text-white self-center ${onCartHover ? '': 'hidden'}`}>
                {name}
              </div>
            </div>
          </div>
          <p 
            className='text-center flex self-center cursor-pointer gap-4 text-gray-dark'
            onMouseOver={() => {setOnLinkHover(true)}}
            onMouseOut={() => {setOnLinkHover(false)}}
          >
            {name}
            <span className={`content-center relative duration-300 transition-all ${onLinkHover ? ' pl-4' : ''}`}>
              <div className={`w-[28px] h-[2px] ${onLinkHover ? 'bg-background' : 'bg-gray-dark'}  hover:`}></div>
              <div className={`w-[8px] rotate-45 h-[2px] ${onLinkHover ? 'bg-background' : 'bg-gray-dark'} absolute right-0 top-[8px]`}></div>
              <div className={`w-[8px] -rotate-45 h-[2px]  ${onLinkHover ? 'bg-background' : 'bg-gray-dark'} absolute right-0 top-[14px]`}></div>
            </span>
          </p>
        </div>
      </Link>      
    </>
  )
};