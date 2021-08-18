export const Footer = () => {
  const date = new Date().getFullYear();

  return(
  <footer className="bg-black h-52 py-20 px-4"> 
    <div className="text-center">
      <ul className="inline-flex">
        <li>
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:text-black" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paulogolla/"><i
              className="fab fa-linkedin"></i></a>
        </li>
        <li>
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:text-black" target="_blank" rel="noopener noreferrer" href="https://twitter.com/_paulzay_"><i
              className="fab fa-twitter"></i></a>
        </li>
        <li>
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:text-black" target="_blank" rel="noopener noreferrer" href="https://github.com/paulzay/"><i
              className="fab fa-github"></i></a>
        </li>
        <li>
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:text-black" target="_blank" rel="noopener noreferrer" href="https://paulzay.medium.com/">
            <i className="fab fa-medium"></i>
          </a>
        </li>
        <li>
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:text-black" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/paul-ogolla">
            <i className="fab fa-angellist " aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    <p className="mt-10 mb-0 text-white text-center tracking-wide">&copy; Paul Ogolla <span>{date}</span>. All rights reserved.</p>
  </footer>
  )
};