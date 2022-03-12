import React from 'react';
import Layout from '../components/layout';
import ProjectListing from '../components/projectListing';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {graphql, Link} from 'gatsby';


function WebDevPortfolio( {data} ) {

    return ( 
        <Layout pageTitle={'Web Development'}>
            <main className='project-list fade-in-animation'>
                <section className='portfolio-heading'>
                    <div>
                        <h2>My work in</h2>
                        <h1>Web Development</h1>
                    </div>
                    <h3>I'm a front end developer with an eye for design and a background in information security. I’m interested in turning beautiful designs into fast, secure, and scalable websites. My focus has been on Gatsby, but I am always learning.</h3>
                </section>

                {data.allMdx.nodes.map( (node) => 
                <ProjectListing 
                    title={node.frontmatter.title}
                    desc={node.body}
                    img={node.frontmatter.hero_image}
                    alt={node.frontmatter.hero_image_alt}
                    url={node.frontmatter.project_url}
                    writeup={node.frontmatter.writeup}
                />
                )}
                
                
            </main>
        </Layout>
     );
}

export default WebDevPortfolio;
export const query = (graphql`
query {
    allMdx(filter: {frontmatter: {page_type: {eq: "web-dev-portfolio"}}} sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          writeup
          project_url
          date
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              children {
                id
              }
              gatsbyImageData
            }
          }
        }
        
        id
        body
      }
    }
  }
  
`)