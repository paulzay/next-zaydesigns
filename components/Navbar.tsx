import { Link } from 'react-scroll'
import { useState, useEffect } from 'react';
import Image from 'next/image';

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['flex navbar items-center justify-between flex-wrap bg-white px-14'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className={navbarClasses.join(" ")}>
        <Link href='/'>
          <a className='navbar inline-flex items-center p-3'>
            <Image src="/logo.png" alt="logo" width={30} height={30} />
          </a>
        </Link>
        <button onClick={handleClick}
          className=' inline-flex p-3 rounded lg:hidden text-black ml-auto outline-none'>
          {!active ?
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          }
        </button>
        <div className={`${active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto '>
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