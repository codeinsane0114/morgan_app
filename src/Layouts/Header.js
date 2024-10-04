import React from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import './menu.css';
import Logo from "./../assets/img/logo.svg";
export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [bar, setBar] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [outside, setOutside] = React.useState("outside");
  const openDrawer = () => {
      setBar(!bar);
  };
  
  const closeDrawer = () => setIsDrawerOpen(false);
  
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

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
	return(
		<>
			<div className={`w-full h-[130px] flex relative bg-background justify-center transition-opacity duration-300 ${
				isScrolled ? "bg-opacity-100" : "bg-opacity-0"
			}}`}>
				<div className={`max-w-[1290px] flex  flex-row h-[50px] w-full justify-between mx-auto bg-slate-600 sm:bg-gray-300 lg:bg-slate-950  duration-300 lg:flex-row ml-auto mt-9 px-[40px] relative ${bar  ? 'z-[12]':''}`}>
				
					<div className='max-w-[403.33px] w-full h-[44px] flex flex-row justify-center'>
						<Link to={'/building'}className={`max-w-[128.42px] w-full h-[44px] py-2 ${bar ? 'opacity-0' : ''}`} ><p style={{color:  '#f0ede8',font:'16px'}}>The Building</p></Link>
						<Link to={'/building'}className={`max-w-[128.42px] w-full h-[44px] py-2 ${bar ? 'opacity-0' : ''}`} style={{cursor:'pointer',color:  '#f0ede8',font:'16px'}}>The Roof</Link>
					</div>
					<Link to={'/'} className='max-w-[150px] w-full h-[59px]'>
						<img src={Logo}></img>
					</Link>
					<div className='max-w-[403.33px] w-full flex flex-row justify-center h-[44px] relative'>
					<Link to={'/building'}className={`max-w-[159.29px] w-full h-[44px] py-2 ${bar ? 'opacity-0' : ''}`}><p style={{color:  '#f0ede8',font:'16px'}}>NEIGHBORHOOD</p></Link>
					<Link to={'/building'}className={`max-w-[84.9px] w-full h-[44px] py-2 ${bar ? 'opacity-0' : ''}`}><p style={{color:  '#f0ede8',font:'16px'}}>contact</p></Link>
					<div className={`max-w-[50px] w-full h-[50px] `} >
					<button
						onClick={openDrawer}
						>
						<svg class="burger" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path class="" d="M28.1719 16.4761H49.5546M34.0771 24.9999H41.9812H49.8852M34.1959 33.5237H50.0004" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></svg>
					</button>
					</div>
					</div>
					</div>
				</div>
				<div className={`flex w-full min-h-screen h-full menu-bg transition-all duration-300 ease-in-out  justify-center items-safe-center fixed  opacity-1 bg-background ${!bar ? ' -top-full': 'z-[11]'}`}>
					<nav class="flex max-lg:h-full max-lg:flex-col max-w-[1272px] mx-auto w-full justify-between px-4 pt-[120px] pb-[70px] gap-2 max-md:pt-[85px] max-sm:pb-[47px]">
						<div class="lg:hidden"></div>
						<ul class="gap-8 font-bold text-xl sm:text-4xl lg:text-[32px] lg:leading-normal flex flex-col items-center lg:items-start justify-center text-white">
							<li class="link"><a href="/building" target="">THE BUILDING</a></li>
							<li class="link"><a href="/roof" target="">THE ROOF</a></li>
							<li class="link"><a href="/neighborhood" target="">NEIGHBORHOOD</a></li>
							<li class="link"><a href="/gallery" target="">GALLERY</a></li>
							<li class="link"><a href="/team" target="">TEAM</a></li>
							<li class="link"><a href="/contact" target="">CONTACT</a></li>
						</ul>
					</nav>
				</div>
				
		</>
	)
}