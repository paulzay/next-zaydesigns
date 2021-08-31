import {Link} from 'react-scroll'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled,setScrolled]= useState(false);
  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  let navbarClasses=['flex navbar items-center justify-between flex-wrap bg-white px-14'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
  const handleClick = () => {
    setActive(!active);
  };

  return(
    <>
      <nav className={navbarClasses.join(" ")}>
        <Link href='/'>
          <a className='navbar inline-flex items-center p-3'>
           <Image src="/logo.png" alt="logo" width={30} height={30}/>
          </a>
        </Link>
        <button onClick={handleClick}
          className=' inline-flex p-3 hover:bg-black rounded lg:hidden text-black ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link ctiveClass="active" to="home">
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-medium items-center justify-center hover:bg-black hover:text-white '>
                HOME
              </a>
            </Link>
            <Link to="portfolio" spy={true} smooth={true}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-medium items-center justify-center hover:bg-black hover:text-white'>
                PORTFOLIO
              </a>
            </Link>
            <Link to="about" spy={true} smooth={true}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-medium items-center justify-center hover:bg-black hover:text-white'>
                ABOUT ME
              </a>
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-medium items-center justify-center hover:bg-black hover:text-white'>
                GET IN TOUCH
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}