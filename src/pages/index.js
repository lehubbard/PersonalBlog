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
      <header className='mainPageHeader'>
      <Navigation compName={'IndexPage'} />
      <h1 className="headerTitle fade-in-animation">Lucas Hubbard</h1>
          
          <div className="arrowTop" onClick={scrollToContent}>
              <img className="arrowIcon fade-in-animation" src={arrowIcon} alt="arrow icon"></img>
          </div>

      </header>
      <section className="content" ref={contentRef}>

          <div className="sectionTitle">
              <span className="yellowLine-right"></span>
              <h2>Something About Me</h2>
              <span className="yellowLine-left"></span>
          </div>
          <div className="cards" id="card1">
              <div className="card">
                  <h3 className="cardHeading">Web Development</h3>
              </div>
              <div className="card" id="card2">
                  <div>
                      <h3 className="cardHeading">Photography</h3>
                      <h3 className="cardHeading">&</h3>
                      <h3 className="cardHeading">Film</h3>
                  </div>
              </div>
              
              <Link to="/blog">
              <div className="card" id='card3'>
              <h3 className="cardHeading">Blog</h3>
              </div>
              </Link>
             
          </div>
      </section>
    </Layout>
   );
}

export default IndexPage;