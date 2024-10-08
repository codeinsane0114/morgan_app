import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
import { Translate } from '@mui/icons-material';
import LinkCart from '../Components/Home/LinkCart';
import Building from './../assets/resources/homebuild.webp';
import Roof from './../assets/resources/homeroof.webp';
import Neighborhood from './../assets/resources/homeneibourhood.webp';
import Gallery from './../assets/resources/homegallery.webp';

export default function Home() {
  const [isScrolledToSection, setIsScrolledToSection] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");          
          if ( entry.isIntersecting){
            switch(id){
              case 'section1':
                setIsScrolledToSection({ section5: false, section1: true, section2: false, section3: false, section4: false})
              break;
              case 'section2':
                setIsScrolledToSection({ section5: false, section1: true, section2: true, section3: false, section4: false})
              break;
              case 'section3':
                setIsScrolledToSection({ section5: false, section1: true, section2: true, section3: true, section4: false})
              break;
              case 'section4':
                setIsScrolledToSection({ section5: false, section1: true, section2: true, section3: true, section4: true})
              break;
              case 'section5':
                setIsScrolledToSection({ section5: true, section1: true, section2: true, section3: true, section4: true})
              break;
              default:
                return
              break;
            }
          }          
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const sections = [
      section1Ref,
      section2Ref,
      section3Ref,
      section4Ref,
      section5Ref,
    ];
    sections.forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      sections.forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, [isScrolledToSection]);

  return(
    <div className='flex flex-col'>
      <section className=' bg-background border-0 border-solid border-gray-300'>
        <div className='w-full h-screen'>
        <video
          src="img/resources/Home_video.mp4"
          className='h-full w-full object-cover relative border-none border-0'
          allowFullScreen={true}
          muted
          autoPlay
          loop
          preload='metadata'
          playsInline
        ></video>
        </div>
      </section>
      <div className='w-full pt-24 text-black'>
        <section className='max-w-[1290px] px-10 border-0 border-solid border-gray-300' style={{textAlign:'center',marginLeft:'auto',marginRight:'auto',fontSize:'1.125rem',lineHeight:'1.75rem',fontWeight:'400',color:'black'}}>
          <div className='max-w-[980px] md:mx-[115px]'>
            <div className={`${isScrolledToSection.section1 ? 'top-0 opacity-100': 'top-24 opacity-0'} transition-all duration-500  relative`}>
              <p className=' max-w-[980px] contrast-[3.48] text-lg text-[#B37E5]'>WELCOME TO MORGAN NORTH</p>
              <h2 className=' max-w-[980px] text-[#004F48] mt-3 pb-[12px] contrast-[9.49] text-5xl'>Office space that’s a breath of fresh air.</h2>
              <p className=' max-w-[980px] contrast-[21] mt-[40px] text-lg text-[#00000]'>Unmatched in extraordinary access to outdoor space and approach to employee well-being, Morgan North is creating a new nature of work. It's where the city’s largest greenspace elevates your daily experience. Where work and life don’t just balance, but harmonize – an environment where collaboration drives the energy and “good enough” is never the answer. Here, at Morgan North, you’re able to pause–to make space for yourself, for each other, and for ideas.</p>
              <div ref={section1Ref} id="section1"></div>
              <Link to={'/roof'} className='max-w-[276.89] h-[32.38] text-[#004548] text-lg mt-[40px] pr-[35px] pb-[8px] flex flex-row justify-center items-baseline'><text className='max-w-[200px] h-[19px]'>A VIEW FROM THE TOP</text><svg className=" max-w-[22px] h-[11px]" xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M16.0425 6.41748H0V4.58496H16.0425V0H16.5L22 5.34668V5.65332L16.5 11H16.0425V6.41748Z" fill="currentColor"></path></svg></Link>
            </div>
          </div>
        </section>
        <div className='w-full'>
          <img src="img/resources/Homeimage.jpg" alt="Morgan North" className=" w-full mt-[96px] h-screen object-cover"/>
        </div>
      </div>
      <div className='w-full py-24 text-[#00000] bg-[#F0EDE8]'>
        <section className='max-w-[1290px] text-base ml-auto mr-auto px-10 '>
          <div className={`max-w-[980px] text-lg ml-auto text-right relative ${isScrolledToSection.section2 ?'top-0 opacity-100': 'top-24 opacity-0'} transition-all duration-500`}>
            <p className='max-w-[980px] text-[#B37E55] text-base contrast-[2.98]'>EXPLORE</p>
            <h2 className='max-w-[980pxtext-[#004f48] text-6xl mt-3 pb-3'>Discover the natural<br/>evolution of office space.</h2>
            <div ref={section2Ref} id="section2"></div>
          </div>
        </section>
        <section className='w-full block mt-[96px]'>
          <div className='w-full md:flex items-start justify-between gap-10 relative'>
            <div ref={section3Ref} id="section3" className='absolute top-[60px]'></div>
            <div className='flex gap-10'>
              <LinkCart
                className={`${isScrolledToSection.section3 ? 'top-0 opacity-100': 'top-[60px] opacity-0'} transition-all duration-[250ms] relative`}
                img={Building}
                name={'The Building'}
                link="/building"
              />
              <LinkCart
                className={`${isScrolledToSection.section3 ? 'top-0 opacity-100': 'top-[120px] opacity-0'} transition-all duration-[500ms] relative`}
                img={Roof} 
                name={'The Roof'}
                link="/roof"
              />
            </div>
            <div className='flex gap-10'>
              <LinkCart 
                className={`${isScrolledToSection.section3 ? 'top-0 opacity-100': 'top-[180px] opacity-0'} transition-all duration-[750ms] relative`}
                img={Neighborhood}
                name={'The Neightborhood'}
                link="/neighborhood"
              />
              <LinkCart 
                className={`${isScrolledToSection.section3 ? 'top-0 opacity-100': 'top-[240px] opacity-0'} transition-all duration-[1000ms] relative`}
                img={Gallery}
                name={'Gallery'}
                link="/gallery"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="w-full text-[#00000] text-base py-24 ">
        <section className="md:flex w-full">
          <div className="w-full justify-center opacity-100 transform-none ease-linear duration-40 pointer-events-auto relative">
            <div ref={section4Ref} id="section4" className='absolute top-[240px]'></div>
            <img src="img/resources/homewelcome.jpg" title="The Building" className={`w-full object-cover ${isScrolledToSection.section4 ? 'top-0 opacity-100': 'top-[270px] opacity-0'} transition-all duration-[600ms] relative`}/>
          </div>
          <div className="w-full px-10 flex relative">
            <div ref={section5Ref} id="section5" className='top-[40px] absolute'></div>
            <div className={`max-w-[557px] text-lg relative my-auto ${isScrolledToSection.section5 ? 'opacity-100 top-[0px]': 'opacity-100 top-[40px]'} transition-all duration-[500ms] relative`}>
              <h2 className='max-w-[557px]  text-background text-6xl pb-3'>Welcome to<br/>a new nature<br/>of work.</h2>
              <Link to={"/building"} target="" className=" max-w-[220px] items-center h-[32.38] text-background text-lg mt-6 pb-2 flex flex-row relative w-fit arrow-btn font-bold uppercase border-b-2 gap-6" isinline="false" index="1">
                The Building 
                <svg className="block align-middle fill-none max-w-[22px] h-[11px] overflow-hidden tracking-[2.16px] uppercase font-bold text-ellipsis text-lg pointer-events-auto" xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M16.0425 6.41748H0V4.58496H16.0425V0H16.5L22 5.34668V5.65332L16.5 11H16.0425V6.41748Z" fill="currentColor">
                </path></svg> 
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}