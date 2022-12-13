import React, { useRef } from 'react'
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import { Link } from "gatsby"
import arrowIcon from "../images/arrow.png"
import profile from "../images/profile.jpg"
import goat from "../images/goat.jpg"

function IndexPage() {
    const contentRef = useRef()

    const scrollToContent = () => {
        contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }

  return ( 
    <Layout pageTitle='Home'>
      <header className='main-page-header'>
      <Navigation compName={'IndexPage'} />
      <h1 className="header-title fade-in-animation">Lucas Hubbard</h1>
          
          <div className="arrow-top" onClick={scrollToContent}>
              <img className="arrow-icon fade-in-animation" src={arrowIcon} alt="arrow icon"></img>
          </div>

      </header>
      <main className="content" ref={contentRef}>

          <div className="section-title">
              <span className="yellow-line-right"></span>
              <h2>About</h2>
              <span className="yellow-line-left"></span>
          </div>

          <section className='home-bio'>
            <img className='profile-img' src={profile} alt="picture of Lucas"></img>
            <div className='home-bio-text'>
              <p>I graduated in 2021 with a degree in Information Assurance and Cyber Defense from Eastern Michigan University. I am a software developer with an eye for design and a background in information security and videography. To date, I have worked with Gatsby to build web front ends and built automation tools using Python. My interests don’t stop at technology. I am passionate about regenerative agriculture and its potential to address social inequities and ecological insanity. I operate a small market garden in Hillsdale Michigan with my wife, Hannah. Together, we are working to build a life full of connection and meaningful work. </p>
              <ul className='skills'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Adobe CC</li>
              </ul>
            </div>
          </section>
          
          <div className="yellow-dividing-line" id="yellow-dividing-line-top"></div>
          <section className='home-portfolio-links'>
            <img className='goat-img' src={goat} alt='Mountain goat eating'></img>
            <ul className='home-links'>
              <li><a href="https://lucashubbard.com/wordpress/wp-content/uploads/2022/12/LucasHubbard2022.pdf">Resume</a></li>
              <li><Link to="/web-dev-portfolio">Development</Link></li>
              <li><Link to="/video-photo-portfolio">Filmmaking</Link></li>
            </ul>
          </section>
          <div className="yellow-dividing-line" id="yellow-dividing-line-bottom"></div>


          
      </main>
    </Layout>
   );
}

export default IndexPage;