import React from 'react';
import '../styles.css'
import Navigation from './navigation';
import Footer from './footer';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';


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
        <>
            <Helmet>
                <link rel="icon" type="image/x-icon" href={favicon} />
            </Helmet>
            <div className='wrapper'>
            

            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                {/* allows index component to render navigation bar */}
            {pageTitle !== 'Home' ? <Navigation /> : null}
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
     );
}

export default Layout;