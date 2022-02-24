import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas, faCalendar, far, faClock} from '@fortawesome/free-solid-svg-icons'

function BlogPost({data}) {
    const image = getImage(data.mdx.frontmatter.hero_image)
    console.log(image)
    return ( 
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <div className='blog-post-single'>
                <h1 className='page-header'>{data.mdx.frontmatter.title}</h1>
               
                    <div className='blog-post-info-wrapper'>
                    <div className='blog-post-date'>
                        <span ><FontAwesomeIcon className='calendar-icon' color='rgba(55, 65, 54, 0.8)' icon={fas, faCalendar} /></span>
                        <p>{data.mdx.frontmatter.date}</p>
                    </div>

                    <div className='blog-post-read-time'>
                        <span ><FontAwesomeIcon className='calendar-icon' color='rgba(55, 65, 54, 0.8)' icon={far, faClock} /></span>
                        <p>{data.mdx.timeToRead} minute read</p>
                    </div>
                </div>
                <GatsbyImage
                        className='blog-post-hero-image'
                        image={image}
                        alt={data.mdx.frontmatter.hero_image_alt}
                    />
                <p>
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                </p>
            </div>
        
        </Layout>
     );
}


export const query = (graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      timeToRead
      frontmatter {
        title
        date
        
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `)
export default BlogPost;