import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

function Footer() {
    return ( 
        <footer>
        <nav className="socialIcons">
            <ul>
                <li><a href="https://www.instagram.com/lucas_hubbard/" target="_blank">Instagram</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="https://www.linkedin.com/in/lucashubbard22" target="_blank">  Linkedin</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="https://github.com/lehubbard" target="_blank">  Github</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><a href="https://www.youtube.com/user/lucashubbard1" target="_blank">  Youtube</a></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
            </ul>
        </nav>
    </footer>
     );
}

export default Footer;