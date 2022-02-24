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
                    <h3>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: </h3>
                </section>

                {data.allMdx.nodes.map( (node) => 
                <ProjectListing 
                    title={node.frontmatter.title}
                    desc={node.body}
                    img={node.frontmatter.hero_image}
                    alt={node.frontmatter.hero_image_alt}
                    url={node.frontmatter.project_url}
                />
                )}
                
                
            </main>
        </Layout>
     );
}

export default WebDevPortfolio;
export const query = (graphql`
query {
    allMdx(filter: {frontmatter: {page_type: {eq: "web-dev-portfolio"}}} sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
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