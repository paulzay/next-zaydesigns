export const About = () => {
  return (
    <div className="about flex justify-between" id="about">
      <div className="left" data-aos="fade-right">
        <h2 className="text-black text-6xl mb-10 text-center font-semibold">About Me</h2>
        <div className="left-text text-left px-16">
          <p className="text-xl">
            I am a software developer with professional experience innovating
            solutions. I specialize in building applications specific to the
            business needs of my clients. I work in full-stack web development, mobile app development, and database
            management.
          </p>
          <p className="text-xl">I started coding back in 2017 because someone looked at me and thought 'Hey you seem like you'd love this code stuff' and it turns out I did. Make of that what you will.</p>
          <p className="text-xl">
            I work with
            wide range of technologies including JavaScript, TypeScript, Reactjs, Nextjs, Node & Express, MongoDB, PostgreSQL, Ruby & Ruby on Rails,
            REST API design, CircleCI, 3rd party APIs (Stripe, Google Auth, etc.), and
             many more.
          </p>
          <p className="text-xl">
            When I'm not fixing bugs, I love to deejay, dance, cycle, skate and of course doomscroll on the internet. 
          </p>
          {/* <div className="flex justify-center mt-10">
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
            <img className="h-12"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              alt="node image" />
          </div> */}
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src="https://raw.githubusercontent.com/paulzay/zaydesigns/master/public/assets/headshots.png" className="img-responsive" alt="me" />
      </div>
    </div>
  )
}