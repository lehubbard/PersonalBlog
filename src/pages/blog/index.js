import React, { useState } from 'react';
import Layout from '../../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
                            data.allWpPost.nodes.map(node => (
                                <div key={node.id} className='blog-post'>
                                    <div className='post-info'>
                                        <h2 className='post-title'>
                                        <Link to={`/blog/${node.slug}`}>
                                                {node.title}  
                                            </Link>
                                        </h2>
                                        <h3 className='date-tag'>
                                            <span className='post-date'>{node.date}</span> |  
                                            <span className='post-tag'> {node.categories.nodes[0].name}</span>
                                        </h3>
                                    </div>
                                
                                    <img className='featured-image-thumbnail' src={node.featuredImage.node.link}></img>
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
  allWpPost {
    nodes {
      slug
      date(formatString: "MMMM Do, YYYY")
      featuredImage {
        node {
          id
          altText
          link
        }
      }
      title
      categories {
        nodes {
          name
        }
      }
    }
  }
}
  `)


export default BlogShow;