export const About = () => {
  return (
    <div className="about flex justify-between" id="about">
      <div className="left" data-aos="fade-right">
        <h2 className="mb-10 text-center">ABOUT ME</h2>
        <div className="left-text text-left px-16">
          <p className="text-xl">
            I am a software developer with professional experience innovating
            solutions. I specialize in building applications specific to the
            business needs of my clients. I work in full-stack web development, mobile app development, and database
            management.
          </p>
          <p className="text-xl">
            I have worked with a
            wide range of technologies including HTML/CSS/SCSS, Bootstrap, MaterialUI, TailwindCSS, JavaScript, TypeScript, Reactjs, Nextjs, Node & Express, MongoDB, PostgreSQL, Ruby & Ruby on Rails,
            REST API design, CircleCI, 3rd party APIs (Stripe, Google Auth, etc.), Dart, Flutter, Kotlin and
            many more.
          </p>
          <p className="text-xl">
            When I'm not fixing bugs, I love to deejay, dance, cycle, skate and of course doomscroll on the internet.
          </p>
        </div>
      </div>
      {/* <div className="right" data-aos="fade-left">
        <img src="https://raw.githubusercontent.com/paulzay/zaydesigns/master/public/assets/headshots.png" className="img-responsive" alt="me" />
      </div> */}
    </div>
  )
}