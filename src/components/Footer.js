import React from 'react';

import './Footer.css'; // Import du style de base du composent
import logo from './../img/Linkedin.png'; // Import du logo linkedin

function Footer (props) {
	return (
		<footer className='footer'>
			<ul>
				<li>'© Copyright'</li>
				<li>Combemorel Dorian</li>
				<li>
					<a href='https://www.linkedin.com/in/dorian-combemorel-bb7434174/' target="_blank" rel='noreferrer noopener'>
						<img src={ logo } alt="Logo"/>
						Linkedin
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;