import React from 'react';

const Footer = () => {
    
    return (
        <div className="footer-container">
            <div className="footer-categories">
                <ul className="languages">Languages/Frameworks
                            <li id="top-lister">Ruby/Ruby on Rails</li>
                    <li>Javascript</li>
                    <li>HTML/CSS</li>
                    <li>React/Redux</li>
                    <li>SQL</li>
                </ul>

                <ul className="resources">Resources
                    <li id="top-lister"><a href="https://github.com/cschreger">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/cade-schreger-01048aab/">LinkedIn</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer;