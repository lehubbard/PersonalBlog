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
      <section className="content" ref={contentRef}>

          <div className="section-title">
              <span className="yellow-line-right"></span>
              <h2>Projects and More</h2>
              <span className="yellow-line-left"></span>
          </div>
          <div className="cards" id="card1">
              <div className="card">
                <Link to="/web-dev-portfolio">
                  <h3 className="card-heading">Web Development</h3>
                </Link>
              </div>
              <div className="card" id="card2">
                  <div>
                    <Link to="/video-photo-portfolio">
                      <h3 className="card-heading">Filmmaking</h3>
                    </Link>
                  </div>
              </div>
              
              <Link to="/blog">
              <div className="card" id='card3'>
              <h3 className="card-heading">Blog</h3>
              </div>
              </Link>
             
          </div>
      </section>
    </Layout>
   );
}

export default IndexPage;