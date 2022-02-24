import React from 'react';
import Layout from '../components/layout';

function Contact() {
    return ( 
        <Layout pageTitle="Contact">
            <div className='contact-content fade-in-animation'>
                <h1>Get In Touch</h1>
                <a href="mailto: lehubbard@protonmail.com"><h2>lehubbard@protonmail.com</h2> </a>
            </div>
        </Layout>
     );
}

export default Contact;