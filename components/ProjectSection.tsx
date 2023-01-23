import Image from 'next/image';
import links from '../assets/links.svg';

interface Props { }

function ProjectSection(props: Props) {
  const { } = props

  return (
    <div id="portfolio" className="portfolio" data-aos="fade-up">
      <div className="section-intro px-10">
        <div className="portfolio-header">
          <h2>PORTFOLIO</h2>
          <div className='projects'>
            <div className="flip">
              <div className="front front1">
                {/* <h1 className="text-shadow">Kito Health</h1> */}
              </div>
              <div className="back">
                <h2>Kito Health</h2>
                <p>Company landing page built with Reactjs, CSSModules</p>
                <ul>
                  {/* <li>
                    <a href="https://github.com/paulzay/sporf" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li> */}
                  <li>
                    <a href="https://kitohealth.org/" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flip">
              <div className="front front4">
              </div>
              <div className="back">
                <h2>Crown GiftShop</h2>
                <p>Frontend Ecommerce platform build with Reactjs</p>
                <ul>
                  <li>
                    <a href="https://github.com/paulzay/e-comf" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://crowngiftshop.netlify.app/" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="flip">
              <div className="front front2">
                <h1 className="text-shadow">Space Shooter</h1>
              </div>
              <div className="back">
                <h2>Space Shooter</h2>
                <p>A web-based RPG game played on the browser. Made with Phaser3, Webpack, JavaScript & Jest</p>
                <ul>
                  <li>
                    <a href="https://github.com/paulzay/shooter" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://kitohealth.org/" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="flip">
              <div className="front front3">
                {/* <h1 className="text-shadow">Reels</h1> */}
              </div>
              <div className="back">
                <h2>Reels</h2>
                <p>Web app for listing tv shows, viewing their details and displaying by category. Built with React, Redux and axios</p>
                <ul>
                  <li>
                    <a href="https://github.com/paulzay/reels" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://reactreel.netlify.app/" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flip">
              <div className="front front2">
                {/* <h1 className="text-shadow">Reels</h1> */}
              </div>
              <div className="back">
                <h2>Rolex Digital</h2>
                <p>Design for digital marketing firm</p>
                <ul>
                  <li>
                    <a href="https://github.com/paulzay/reels" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://www.figma.com/proto/d9hrzosFpYTaCXRwE84DgL/Landing-page-design-(Copy)?node-id=65%3A126&scaling=min-zoom&page-id=0%3A1&hide-ui=1" target="_blank" rel="noopener noreferrer">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flip">
              <div className="front front5">
                {/* <h1 className="text-shadow">Reels</h1> */}
              </div>
              <div className="back">
                <h2>Yam Yam</h2>
                <p>A design project for recipes</p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="hhttps://www.figma.com/proto/sxwjz7bXbOitWdXHGOg87z/recipe-app-design-file?node-id=35%3A385&scaling=scale-down&page-id=7%3A412&starting-point-node-id=35%3A210&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flip">
              <div className="front front6">
                {/* <h1 className="text-shadow">Reels</h1> */}
              </div>
              <div className="back">
                <h2>Projetti</h2>
                <p>A design project that enables teams collaboration and project management</p>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://www.figma.com/proto/rcjYAJFTH1vYc4BXl0iHTe/Projetti--A-SaaS-webpages-(Copy)?node-id=19%3A25&scaling=scale-down&page-id=19%3A24&starting-point-node-id=70%3A1038&show-proto-sidebar=1/" target="_blank" rel="noopener noreferrer">
                      Figma Prototype
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
