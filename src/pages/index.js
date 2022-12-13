import React, { useRef } from 'react'
import Layout from '../components/layout';
import Navigation from '../components/navigation';
import { Link } from "gatsby"
import arrowIcon from "../images/arrow.png"

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
            <div className='profile-img-wrapper'>

            </div>
            <div className='home-bio-text'>
              <p>jksdj sdfjsdfjksdfjklsdf jklsdf jksdfjklsdfjkljklsdfjkls dfjklsdfjklsdfjklsdfjksfdjkl sdfjklsdfjklsdfjklsdfjklsdf jklsdfjklsdfjklsdfjkls dfjklsdfjklsdf</p>
              <ul className='skills'>
                <li>Python</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>Adobe CC</li>
              </ul>
            </div>
          </section>
          <section className='home-links-wrapper'>
            <ul className='home-links'>
              <li>Resume</li>
              <li>Development</li>
              <li>Video</li>
            </ul>
          </section>


          
      </main>
    </Layout>
   );
}

export default IndexPage;