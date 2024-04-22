import React from 'react'
import video from "./assets/images/video.mp4"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <video className="hero-video" src={video} autoPlay muted loop typeof='video/mp4'></video>
      <div className="hero-overlay"></div> 
        <div className="container">

<div className="hero-content">

          <h2 className="h1 hero-title">Journey to explore world</h2>

          <p className="hero-text">
          Discover the world with TrekEZ, where every destination tells a story waiting to be explored,where the unexpected is just the beginning. <br /> Your next great adventure awaits—where will you wander with us?
          </p>

          <div className="btn-group">
            <button className="btn btn-primary">Learn more</button>

            <button className="btn btn-secondary">Book now</button>
          </div>
</div>

        </div>
      </section>
  )
}

export default Hero