import Link from "next/link";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-black h-52 py-20 px-4">
      <div className="text-center">
        <ul className="inline-flex">
          <li>
            <Link href="https://www.linkedin.com/in/paulogolla/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/_paulzay_">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/paulzay/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://paulzay.medium.com/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-medium"></i>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://angel.co/u/paul-ogolla">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white text-3xl items-center justify-center hover:bg-white hover:text-black" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-angellist " aria-hidden="true"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <p className="mt-10 mb-0 text-white text-center tracking-wide">&copy; Paul Ogolla <span>{date}</span>. All rights reserved.</p>
    </footer>
  )
};