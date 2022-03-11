import React, { useState } from 'react';
import { css } from "@emotion/react"
import { useInView } from 'react-intersection-observer'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {Link} from 'gatsby';

function ProjectListing( { title, desc, img, alt, url, writeup }) {
    
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
      })


    return ( 
        <section inView={inView} className='web-dev-project-listing'>
            <div className='project-desc'>
                <h2>{title}</h2>
                <p>
                    <MDXRenderer>
                        {desc}
                    </MDXRenderer>
                </p>
                <div className='project-btn-wrapper'>
                    <Link to={url} target='_blank'>
                        <div className='project-desc-btn'><span>View Project</span></div>
                    </Link>
                    {writeup !== null ? <Link to={writeup} target='_blank'>
                        <div className='project-desc-btn'><span>Read About It</span></div>
                    </Link>
                    : null}
                </div>
            </div>
            <div className='project-img'>
                <div className='img-top-bar' css={inView
                ? css`
                transform: translateX(0);
                `
                : null
                }>
                    <span className='img-top-bar-circle'></span>
                    <span className='img-top-bar-circle'></span>
                </div>
                    <div ref={ref} className='project-screenshot project-screenshot-preload' 
                    css={inView
                        ? css`
                        :after{
                            transform: translateX(100%);
                        }`
                    : null
                    } >
                    <GatsbyImage image={getImage(img)} alt={alt} />
                    </div>

            </div>
        </section>
     );
}

export default ProjectListing;