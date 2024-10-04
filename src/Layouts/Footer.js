import * as React from "react";
import {Link} from 'react-router-dom'
export default function Footer(props) {
    
    return (
       <div className="w-full h-[453.92px] bg-background text-[#00000] text-base">
         <div className=" max-w-[1272px] h-[453.92px] text-[#F0EDE8] mx-auto px-4 pt-[62px] pb-[62px] flex flex-col justify-between">
            <div className=" max-w-[1240px] h-[121.15px] text-base">
                <div className=" flex flex-row justify-between max-w-[717.42px] h-[121.15px]">
                    <Link to={'/'} title="Go to Hompage">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 52 21" class="w-full" ><path d="M28.326 20.046h-8.928c.341-.269.674-.479.942-.753.777-.8 1.137-1.796 1.14-2.89.018-4.236.015-8.475.002-12.714-.005-1.503-.583-2.48-2.065-3.619H28.3c-.33.258-.662.469-.928.743-.727.75-1.08 1.69-1.089 2.711-.029 3.47-.016 6.94-.016 10.41 0 .793-.005 1.589 0 2.382.008 1.125.322 2.147 1.115 2.975.258.27.588.476.945.755ZM49.324 20.084C43.742 13.378 32.606.012 32.606.012l.438-.003c1.847 0 3.691.003 5.535-.005.237 0 .394.066.551.258 3.345 4.08 6.7 8.153 10.045 12.23.09.109.163.269.165.407.016 2.294.019 4.585.024 6.879.003.071-.018.143-.04.306ZM2.594.008h.463C4.619.008 6.183.013 7.745 0c.272-.003.408.101.53.327 2.435 4.556 4.877 9.109 7.312 13.667.067.128.104.325.056.452-.69 1.815-1.4 3.622-2.102 5.434-.019.048-.045.09-.101.197C9.826 13.387 2.594.008 2.594.008ZM31.348 20.074c1.508-.705 2.25-1.985 2.674-3.539.415 1.535 1.136 2.816 2.626 3.54h-5.3ZM46.7.04h5.297c-1.5.718-2.275 1.976-2.674 3.549-.378-1.57-1.144-2.818-2.624-3.55ZM0 20.074c1.509-.705 2.251-1.985 2.674-3.539.415 1.535 1.137 2.816 2.627 3.54H0Z"></path></svg>
                    </Link>
                    <div className="max-w-[120.58px] h-[100.83px] text-lg">
                     <p className="max-w-[120.58px]  h-[75.75px]"><a href="https://maps.app.goo.gl/JC25bkAQ7AazeXjp7" target="_blank">341 9th&nbsp;Avenue<br/>New York, NY<br/>10199</a></p>
                    </div>
                    <div className=" max-w-[154.83px] h-[100.83px] flex flex-col text-lg leading-[140%] gap-[35px]"> 
                       <ul> 
                       <li className="max-w-[154.83px] h-[20px] text-lg contrast-8.13">
                           <a href="https://cdn.sanity.io/files/bs9rmafh/morgan_north/024845b1973290d69a24e280fd048e2338a7b519.pdf" target="_blank" >Leasing Brochure</a></li>
                       <li className="max-w-[154.83px] h-[20px] text-lg contrast-8.13 " >
                           <a href="https://tishmanspeyer.com/legal/privacy" target="_blank">Privacy Policy</a>
                       </li>
                       <li className="max-w-[154.83px] h-[20px] text-lg contrast-8.13"><a href="https://tishmanspeyer.com/legal/terms-of-use" target="_blank" >Terms of Use</a>
                       </li>
                       <li className="max-w-[154.83px] h-[20px] text-lg contrast-8.13"><a href="/contact" target="" >Contact</a>
                       </li>
                       </ul>
                    </div>
                </div>
            </div>
            <div className=" flex max-w-[1240px] h-[36.77px] justify-between flex-row items-center">
                <div className="flex w-full h-[36.77px] max-w-[230px] justify-between">
                    <img src="/img/resources/tishman-speyer-logo.svg" className="w-full max-w-[179px] h-[36.77px] mr-[30px] block align-middle" alt="logo" loading="lazy" decoding="async" />
                    <img src="/img/resources/Wheelchair.svg" class="max-md:hidden" alt="logo" data-astro-cid-sz7xmlte="" width="21" height="25" loading="lazy" decoding="async"/>
                </div>
                <ul className="mt-4 mb-4 ml-0 mr-0 pl-32 isolate-bidi antialiased tracking-[-0.16px] text-right h-[36.77px] max-w-[600px] w-full flex flex-wrap justify-end text-opacity-100 text-[rgb(240 237 232)"> 
                    <li className=" relative px-2">© Morgan North 2024</li>
                    <li><small className=" text-[80%]">341 9th Avenue, New York, NY 10199</small></li>
                </ul>
            </div>
         </div>
       </div>   
    )
}