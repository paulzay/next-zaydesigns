export const About = () => {
  return (
    <section id="about">
      
    <div className=" about flex justify-between">
      <div className="left text-center" data-aos="fade-right">
        <h2 className="text-black text-6xl mb-10">About Me</h2>
        <div className="left-text p-10">
          <p className="text-2xl">
            I am a software expert with professional experience innovating
            solutions. I specialize in building applications specific to the
            business needs of my clients. I work in full-stack web development, mobile app development, and database
            management.
          </p>
          <p className="text-2xl">
            When I'm away from the big screen, I enjoy doom-scrolling on the little screen, playing the guitar and
            communing with nature.
          </p>
          <div className="flex justify-center mt-10">
            <img className="h-12 mr-5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              alt="js image" />

            <img className="h-12 mr-5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
              alt="python image" />
            <img className="h-12 mr-5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              alt="react image" />
              <img className="h-12 mr-5"
              src="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/ruby/ruby.png"
              alt="ruby image" />
            <img className="h-12 mr-5"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              alt="node image" />
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src="https://raw.githubusercontent.com/paulzay/zaydesigns/master/public/assets/headshots.png" className="img-responsive" alt="my photos" />
      </div>
    </div>
    </section>
  )
}