import React from 'react';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
import { Translate } from '@mui/icons-material';

export default function Home() {
    return(
        <div className='flex flex-col'>
            <section className=' bg-background border-0 border-solid border-gray-300'>
                <div className='w-full h-screen'>
                <video
                  src="img/resources/Home_video.mp4"
                  className='h-full w-full object-cover relative'
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
                <section className='max-w-[1290px] h-[332.38px] px-10 border-0 border-solid border-gray-300' style={{textAlign:'center',marginLeft:'auto',marginRight:'auto',fontSize:'1.125rem',lineHeight:'1.75rem',fontWeight:'400',color:'black'}}>
                    <div className='max-w-[980px] h-[332.38px] mx-[115px]'>
                        <p className=' max-w-[980px] h-[24px] contrast-[3.48] text-lg text-[#B37E5]'>WELCOME TO MORGAN NORTH</p>
                        <h2 className=' max-w-[980px] h-[72px] text-[#004F48] mt-3 pb-[12px] contrast-[9.49] text-5xl'>Office space that’s a breath of fresh air.</h2>
                        <p className=' max-w-[980px] h-[112px] contrast-[21] mt-[40px] text-lg text-[#00000]'>Unmatched in extraordinary access to outdoor space and approach to employee well-being, Morgan North is creating a new nature of work. It's where the city’s largest greenspace elevates your daily experience. Where work and life don’t just balance, but harmonize – an environment where collaboration drives the energy and “good enough” is never the answer. Here, at Morgan North, you’re able to pause–to make space for yourself, for each other, and for ideas.</p>
                        <Link to={'/roof'} className='max-w-[276.89] h-[32.38] text-[#004548] text-lg mt-[40px] pr-[35px] pb-[8px] flex flex-row justify-center items-baseline'><text className='max-w-[200px] h-[19px]'>A VIEW FROM THE TOP</text><svg className=" max-w-[22px] h-[11px]" xmlns="http://www.w3.org/2000/svg" width="22" height="11" viewBox="0 0 22 11" fill="none"><path d="M16.0425 6.41748H0V4.58496H16.0425V0H16.5L22 5.34668V5.65332L16.5 11H16.0425V6.41748Z" fill="currentColor"></path></svg></Link>
                    </div>
                </section>
                <div className='w-full'>
                    <img src="img/resources/Homeimage.jpg" alt="Morgan North" className=" w-full mt-[96px] h-[1062.04px] object-cover"/>
                </div>
            </div>
            <div className='w-full py-24 h-[1054.79px] text-[#00000] bg-[#F0EDE8]'>
                <section className='max-w-[1290px] h-[168px] text-base ml-auto mr-auto px-10 '>
                    <div className='max-w-[980px] h-[168px] text-lg ml-auto text-right'>
                        <p className='max-w-[980px] h-[24px] text-[#B37E55] text-base contrast-[2.98]'>EXPLORE</p>
                        <h2 className='max-w-[980px] h-[132px] text-[#004f48] text-6xl mt-3 pb-3'>Discover the natural<br/>evolution of office space.</h2>
                    </div>
                </section>
                <section className='w-full h-[594px] block mt-[96px]'>
                   <div className='w-full h-[594px] flex items-start justify-between gap-10'>
                     <div className='max-w-[455px] h-[594px] opacity-100 transform-none delay-15 ease-linear duration-40 pointer-events-auto'>
                        <div className='max-w-[455px] h-[546px] block'>
                        <Link className="max-w-[455px] h-[546px] relative overflow-hidden" to={'/building'} target="">
                            <div className="max-w-[255px] h-[546px] text-[#fffff] bg-background absolute flex items-center bg-opacity-100 text-opacity-100 opacity-0 ease-in-out duration-35">The Building</div>
                            <img src="img/resources/homebuild.webp" alt="A large, multi-story brick building with tall windows and ornate detailing under a clear blue sky."/>
                        </Link>
                        </div>
                        <Link to={'/building'} className=" pt-6 text-center flex items-center justify-center gap-3 transition-all duration-15 ease-in-out hover:text-theme-green-800" target="">
                            <span className="relative -top-0.5">The Building</span>
                            <svg className="max-w-[27px] h-[8px] transition-transform group-hover:translate-x-3" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.695 4.35355C26.8903 4.15829 26.8903 3.84171 26.695 3.64645L23.513 0.464466C23.3178 0.269204 23.0012 0.269204 22.8059 0.464466C22.6107 0.659728 22.6107 0.976311 22.8059 1.17157L25.6344 4L22.8059 6.82843C22.6107 7.02369 22.6107 7.34027 22.8059 7.53553C23.0012 7.7308 23.3178 7.7308 23.513 7.53553L26.695 4.35355ZM0 4.5H26.3415V3.5H0V4.5Z" fill="currentColor">
                                </path></svg>
                        </Link>
                     </div>
                     <div className='max-w-[455px] h-[594px] opacity-100 transform-none delay-15 ease-linear duration-40 pointer-events-auto'>
                        <div className='max-w-[455px] h-[546px] block'>
                        <Link className="max-w-[455px] h-[546px] relative overflow-hidden" to={'/building'} target="">
                            <div className="max-w-[255px] h-[546px] text-[#fffff] bg-background absolute flex items-center bg-opacity-100 text-opacity-100 opacity-0 ease-in-out duration-35">The Building</div>
                            <img src="img/resources/homeroof.webp" alt="A large, multi-story brick building with tall windows and ornate detailing under a clear blue sky."/>
                        </Link>
                        </div>
                        <Link to={'/building'} className=" pt-6 text-center flex items-center justify-center gap-3 transition-all duration-15 ease-in-out hover:text-theme-green-800" target="">
                            <span className="relative -top-0.5">The roof</span>
                            <svg className="max-w-[27px] h-[8px] transition-transform group-hover:translate-x-3" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.695 4.35355C26.8903 4.15829 26.8903 3.84171 26.695 3.64645L23.513 0.464466C23.3178 0.269204 23.0012 0.269204 22.8059 0.464466C22.6107 0.659728 22.6107 0.976311 22.8059 1.17157L25.6344 4L22.8059 6.82843C22.6107 7.02369 22.6107 7.34027 22.8059 7.53553C23.0012 7.7308 23.3178 7.7308 23.513 7.53553L26.695 4.35355ZM0 4.5H26.3415V3.5H0V4.5Z" fill="currentColor">
                                </path></svg>
                        </Link>
                     </div>
                     <div className='max-w-[455px] h-[594px] opacity-100 transform-none delay-15 ease-linear duration-40 pointer-events-auto'>
                        <div className='max-w-[455px] h-[546px] block'>
                        <Link className="max-w-[455px] h-[546px] relative overflow-hidden" to={'/building'} target="">
                            <div className="max-w-[255px] h-[546px] text-[#fffff] bg-background absolute flex items-center bg-opacity-100 text-opacity-100 opacity-0 ease-in-out duration-35">The Building</div>
                            <img src="img/resources/homeneibourhood.webp" alt="A large, multi-story brick building with tall windows and ornate detailing under a clear blue sky."/>
                        </Link>
                        </div>
                        <Link to={'/building'} className=" pt-6 text-center flex items-center justify-center gap-3 transition-all duration-15 ease-in-out hover:text-theme-green-800" target="">
                            <span className="relative -top-0.5">The neighborhood</span>
                            <svg className="max-w-[27px] h-[8px] transition-transform group-hover:translate-x-3" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.695 4.35355C26.8903 4.15829 26.8903 3.84171 26.695 3.64645L23.513 0.464466C23.3178 0.269204 23.0012 0.269204 22.8059 0.464466C22.6107 0.659728 22.6107 0.976311 22.8059 1.17157L25.6344 4L22.8059 6.82843C22.6107 7.02369 22.6107 7.34027 22.8059 7.53553C23.0012 7.7308 23.3178 7.7308 23.513 7.53553L26.695 4.35355ZM0 4.5H26.3415V3.5H0V4.5Z" fill="currentColor">
                                </path></svg>
                        </Link>
                     </div>
                     <div className='max-w-[455px] h-[594px] opacity-100 transform-none delay-15 ease-linear duration-40 pointer-events-auto'>
                        <div className='max-w-[455px] h-[546px] block'>
                        <Link className="max-w-[455px] h-[546px] relative overflow-hidden" to={'/building'} target="">
                            <div className="max-w-[255px] h-[546px] text-[#fffff] bg-background absolute flex items-center bg-opacity-100 text-opacity-100 opacity-0 ease-in-out duration-35">The Building</div>
                            <img src="img/resources/homegallery.webp" alt="A large, multi-story brick building with tall windows and ornate detailing under a clear blue sky."/>
                        </Link>
                        </div>
                        <Link to={'/building'} className=" pt-6 text-center flex items-center justify-center gap-3 transition-all duration-15 ease-in-out hover:text-theme-green-800" target="">
                            <span className="relative -top-0.5">The gallery</span>
                            <svg className="max-w-[27px] h-[8px] transition-transform group-hover:translate-x-3" viewBox="0 0 27 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.695 4.35355C26.8903 4.15829 26.8903 3.84171 26.695 3.64645L23.513 0.464466C23.3178 0.269204 23.0012 0.269204 22.8059 0.464466C22.6107 0.659728 22.6107 0.976311 22.8059 1.17157L25.6344 4L22.8059 6.82843C22.6107 7.02369 22.6107 7.34027 22.8059 7.53553C23.0012 7.7308 23.3178 7.7308 23.513 7.53553L26.695 4.35355ZM0 4.5H26.3415V3.5H0V4.5Z" fill="currentColor">
                                </path></svg>
                        </Link>
                     </div>
                   </div>
                </section>
            </div>
            <div className="w-full h-[1123.56px] text-[#00000] text-base py-24 ">
                <section className=" flex w-full h-[931.56px]">
                    <div className="w-full h-[931.56px] justify-center opacity-100 transform-none ease-linear duration-40 pointer-events-auto">
                                <img src="img/resources/homewelcome.jpg" title="The Building" className="w-full object-cover"/>
                            </div>
                    <div className="w-full h-[931.56px] px-10 flex">
                            <div className=" max-w-[557px] h-[248.38px] opacity-100 transform-none transition-opacity ease-linear duration-40 pointer-events-auto text-lg font-normal block my-auto">
                                <h2 className='max-w=[557px] h-[192px] text-background text-6xl pb-3'>Welcome to<br/>a new nature<br/>of work.</h2>
                                <Link to={"/building"} target="" className=" max-w-[220px] items-center h-[32.38] text-background text-lg mt-6 pb-2 pr-[35px] flex flex-row relative w-fit arrow-btn font-bold uppercase border-b-2 text-[var(--arrow-btn-color)] border-[var(--arrow-btn-color)] leading-[128%] tracking-[2.16px] hover:text-[var(--arrow-btn-color-hover)] hover:scale-105 transition duration-300 ease-in-out hover:border-[var(--arrow-btn-color-hover)] max-sm:text-base pe-[35px]" isinline="false" index="1">
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