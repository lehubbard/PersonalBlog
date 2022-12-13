import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import "@wordpress/block-library/build-style/style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas, faCalendar, far, faClock} from '@fortawesome/free-solid-svg-icons'

function BlogPost({data}) {
    
    const getWordCount = (paragraph) => {
        const timeToRead = Math.floor(paragraph.split(' ').length / 400)
        return timeToRead
    }
    
    return ( 
        <Layout pageTitle={data.wpPost.title}>
    
            <div className='blog-post-single'>
                <h1 className='page-header'>{data.wpPost.title}</h1>
               
                    <div className='blog-post-info-wrapper'>
                    <div className='blog-post-date'>
                        <span ><FontAwesomeIcon className='calendar-icon' color='rgba(55, 65, 54, 0.8)' icon={fas, faCalendar} /></span>
                        <p>{data.wpPost.date}</p>
                    </div>

                    <div className='blog-post-read-time'>
                        <span ><FontAwesomeIcon className='calendar-icon' color='rgba(55, 65, 54, 0.8)' icon={far, faClock} /></span>
                        <p>{getWordCount(data.wpPost.content)} minute read</p>
                    </div>
                </div>
                <img 
                    src={data.wpPost.featuredImage.node.sourceUrl} 
                    alt={data.wpPost.featuredImage.node.altText}
                    className="blog-post-hero-image" />
                
                
                    <div>
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
                    </div>
                
            </div>
        
        </Layout>
     );
}


export const query = (graphql`
query($slug: String) {
    wpPost(slug: {eq: $slug}) {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      date(formatString: "MMMM Do, YYYY")
      title
      content
    }
  }
  
  `)

export default BlogPost;