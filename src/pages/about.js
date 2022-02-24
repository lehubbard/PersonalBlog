import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {graphql, Link} from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

function About( {data} ) {

    return ( 
        <Layout pageTitle='About'>
            <main className='about-page fade-in-animation'>
                <h1 className='page-header'>{data.mdx.frontmatter.title}</h1>
                <GatsbyImage 
                className="about-photo" 
                image={getImage(data.mdx.frontmatter.hero_image)} 
                alt={data.mdx.frontmatter.hero_image_alt}
                />
                
                <section className='about-bio'>
                    <p>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </p>
                </section>
                </main>
        </Layout>
     );
}

export const query = (graphql`
query {
    mdx(frontmatter: {page_type: {eq: "about"}}) {
      frontmatter {
        title
        page_type
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
  
`)
export default About;