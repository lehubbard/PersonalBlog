import React, { useState } from 'react';
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSolid, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {graphql, Link} from 'gatsby';


function BlogShow( {data} ) {
    
    return ( 
        <Layout pageTitle="Blog">
            <main className='blog-posts-show fade-in-animation'>
                <h1 className='page-header'>Blog</h1>
                    
                    <section className='post-list'>

                        {/* <ul className='tag-list'>
                            <li>Tending The Wild</li>
                            <li>Web Dev</li>
                            <li>Other</li>
                            <li>Domestic Arts</li>
                        </ul>
                        <div className='show-tag-btn-wrapper'>
                            <div className="show-tag-btn">
                                <h3>Tags</h3>
                                <span ><FontAwesomeIcon className='drop-down-icon' icon={faSolid, faAngleDown} /></span>
                            </div>
                        </div> */}
                        
                        {
                            data.allMdx.nodes.map(node => (
                                <div key={node.id} className='blog-post'>
                                    <div className='post-info'>
                                        <h1>{node.title}</h1>
                                        <h2 className='post-title'>
                                        <Link to={`/blog/${node.slug}`}>
                                                {node.frontmatter.title}  
                                            </Link>
                                        </h2>
                                        <h3 className='date-tag'>
                                            <span className='post-date'>{node.frontmatter.date}</span> |  
                                            <span className='post-tag'> {node.frontmatter.tag}</span>
                                        </h3>
                                    </div>
                                
                                    <GatsbyImage
                                        image={getImage(node.frontmatter.hero_image)}
                                        alt={node.frontmatter.hero_image_alt}
                                    />
                                </div>
                            ))
                        }
                        
                    </section>
            </main>
        </Layout>
     );
}

export const query = (graphql`
query {
    allMdx(filter: {frontmatter: {page_type: {eq: "blog"}}} sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
          timeToRead 
        frontmatter {
          date
          title
          tag
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
        slug
      }
    }
  }
  
`)


export default BlogShow;