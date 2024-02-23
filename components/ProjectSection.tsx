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
            {/* <div className="flip">
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
            </div> */}
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
            {/* <div className="flip">
              <div className="front front3">
                <h1 className="text-shadow">Reels</h1>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection
