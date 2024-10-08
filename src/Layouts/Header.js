import React, { useState } from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import './menu.css';
import Logo from "./../assets/img/logo.png";
export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [bar, setBar] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [outside, setOutside] = React.useState("outside");
  const openDrawer = () => {
      setBar(!bar);
  };
  const [currentPosition, setCurrentPosition] = useState(0);
  const closeDrawer = () => setIsDrawerOpen(false);
	const [up, setUp] = useState(true);
  
  const openSideDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (outside === "outside") {
      setOutside("in");
    } else {
      closeDrawer();
      setOutside("outside");
    }
  };

  const pagesData = [
    { name: "HOME", link: "./" },
    { name: "VISION", link: "./vision" },
    { name: "AMENITIES", link: "./amenities" },
    { name: "NEIGHBORHOOD", link: "./neighborhood" },
    { name: "AVAILABILITY", link: "./availability" },
    { name: "GALLERY", link: "./gallery" },
    { name: "CONTACT", link: "./contact" },
  ];
  const location = useLocation();
	console.log(isScrolled)
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
			if(currentPosition < window.scrollY){
				setUp(false);
			}else if (currentPosition > window.scrollY){
				setUp(true);
			}
			setCurrentPosition(window.scrollY);
      setIsScrolled(isScrolled);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location, currentPosition]);
	return(
		<>
			<div className={`w-full h-[130px] flex fixed justify-center transition-all duration-500 ${!isScrolled && !bar ? 'header-bg': up? 'bg-background opacity-100' : bar?'' :'opacity-0'} z-[12]`}>
				<div className={`max-w-[1290px] flex flex-row h-[50px] w-full justify-between duration-300 lg:flex-row mx-auto pt-9 px-[40px]`}>
					<div className='max-w-[403.33px] w-full h-[32px] flex flex-row justify-center gap-6'>
						<Link to={'/building'}className={`hidden md:block py-2 text-white ${bar ? 'opacity-0' : ''} link`} >THE BUILDING</Link>
						<Link to={'/building'}className={`hidden md:block py-2 text-white ${bar ? 'opacity-0' : ''} link`} >THE ROOF</Link>
					</div>
					<Link to={'/'} className='max-w-[150px] w-full h-[59px]'>
						<img src={Logo}></img>
					</Link>
					<div className='max-w-[403.33px] w-full flex h-[32px] flex-row justify-center  gap-6'>
						<Link to={'/building'}className={`hidden md:block py-2 text-white ${bar ? 'opacity-0' : ''} link`}>NEIGHBORHOOD</Link>
						<Link to={'/building'}className={`hidden md:block py-2 text-white ${bar ? 'opacity-0' : ''} link`}>CONTACT</Link>
						<div className={`max-w-[50px] w-full h-[34px] `} >
							<button
								onClick={openDrawer}
							>
								<div className={`${!bar? 'flex flex-col gap-1 self-end':'relative'}`}>
									<div className={`w-[24px] h-[2px] bg-white transition-all duration-300 ${bar? 'hidden': ''}`}></div>
									<div className={`${!bar? 'w-[20px]': 'w-[26px] rotate-45 top-[1px] relative'} h-[2px] bg-white transition-all duration-300`}></div>
									<div className={`${!bar? 'w-[20px]': 'w-[26x] -rotate-45 -top-[1px] relative'} h-[2px] bg-white transition-all duration-300`}></div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`flex w-full h-screen menu-bg transition-all duration-500 justify-center fixed  opacity-1 bg-background ${!bar ? ' -top-full': 'z-[11] top-0'}`}>
				<nav class="flex max-lg:h-full max-lg:flex-col max-w-[1272px] mx-auto w-full justify-between px-4 pt-[120px] pb-[70px] gap-2 max-md:pt-[85px] max-sm:pb-[47px]">
					<div class="lg:hidden"></div>
					<ul class="gap-8 font-bold text-xl sm:text-4xl lg:text-[32px] lg:leading-normal flex flex-col items-center lg:items-start justify-center text-[#fffff]">
						<li class="link"><a href="/building" target="" className='text-white'>THE BUILDING</a></li>
						<li class="link"><a href="/roof" target="" className='text-white'>THE ROOF</a></li>
						<li class="link"><a href="/neighborhood" className='text-white' target="">NEIGHBORHOOD</a></li>
						<li class="link"><a href="/gallery" target="" className='text-white'>GALLERY</a></li>
						<li class="link"><a href="/team" target="" className='text-white'>TEAM</a></li>
						<li class="link"><a href="/contact" target="" className='text-white'>CONTACT</a></li>
					</ul>
				</nav>
			</div>
		</>
	)
}