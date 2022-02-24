import React from 'react';
import '../styles.css'
import Navigation from './navigation';
import Footer from './footer';
import { useStaticQuery, graphql } from 'gatsby';


function Layout( { pageTitle, children}) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }

            }
        }
        `)


    return ( 
        <div className='wrapper'>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            {/* allows index component to render navigation bar */}
          {pageTitle !== 'Home' ? <Navigation /> : null}
            <main>
                {children}
            </main>
            <Footer />
        </div>
     );
}

export default Layout;