import React, { Component } from 'react';

import './Footer.css'; // Import du style de base du composent
import logo from './../img/Linkedin.png'; // Import du logo linkedin

class Footer extends Component {
	render() {
		return (
			<Footer className='footer'>
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
			</Footer>
		);
	}
};

export default Footer;