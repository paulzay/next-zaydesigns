import Link from "next/link";

export const Banner = () => {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="banner" id="home">
      {/* <div data-aos="fade-up" data-aos-duration="100">
        <h1 className="">Hi, my name is</h1>
      </div> */}
      <span className="ff_block66_bgimg ff_block66_bgimg_1"></span>
      <div data-aos="fade-up" data-aos-duration="200">
        <h2>PAUL OGOLLA</h2>
      </div>
      <div data-aos="fade-up" data-aos-duration="300">
        <h3>Software Engineer.</h3>
      </div>
      <div data-aos="fade-up" data-aos-duration="400">
        <h4>Transforming ideas into reality </h4>
      </div>
      <div className="mt-4" data-aos="fade-up" data-aos-duration="500">
        <ul className="inline-flex">
          <li>
            <Link href="https://www.linkedin.com/in/paulogolla/">
              <a className="lg:inline-flex lg:w-auto w-full pr-3 py-2 rounded text-black text-3xl items-center justify-center hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/_paulzay_">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-3xl items-center justify-center hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/paulzay/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-3xl items-center justify-center hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://paulzay.medium.com/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-3xl items-center justify-center hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-dev"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@paulzay">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black text-3xl items-center justify-center hover:bg-black hover:text-white" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* <button type="button" onClick={handleScroll}>
      <span className="text-center" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="600">
        Scroll down
        <br/>
        <i className="fas fa-chevron-down bi"></i>
      </span>
      </button> */}
    </div>
  )
}