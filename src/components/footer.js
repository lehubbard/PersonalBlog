import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
    return ( 
        <footer>
        <nav className="socialIcons">
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="#">  Linkedin</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="#">  Twitter</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="#">  Github</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="#">  Vimeo</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
            </ul>
        </nav>
    </footer>
     );
}

export default Footer;