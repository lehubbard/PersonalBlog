import React from 'react';
import Layout from '../components/layout';

function Contact() {
    return ( 
        <Layout pageTitle="Contact">
            <div className='contact-content fade-in-animation'>
                <h2>Get In Touch</h2>
                <a href="mailto: lehubbard@protonmail.com"><h1>lehubbard@protonmail.com</h1> </a>
            </div>
        </Layout>
     );
}

export default Contact;