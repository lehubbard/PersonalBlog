import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

function Footer() {
    return ( 
        <footer>
        <nav className="socialIcons">
            <ul>
                <li><Link to="https://www.instagram.com/lucas_hubbard/" target="_blank">Instagram</Link></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><Link to="https://www.linkedin.com/in/lucashubbard22" target="_blank">  Linkedin</Link></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><Link to="https://github.com/lehubbard" target="_blank">  Github</Link></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
                <li><Link to="https://www.youtube.com/user/lucashubbard1" target="_blank">  Youtube</Link></li>
                <li><StaticImage src="../images/arrow.png" alt="arrow icon" className="socialArrow"/></li>
            </ul>
        </nav>
    </footer>
     );
}

export default Footer;