import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'; // Import du style de base du composent

function Nav (props) {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className='navlinks'>
				<Link to='/'>
					<li>Home</li>
				</Link>
				<Link to='/todolist'>
					<li>TodoList</li>
				</Link>
				<Link to='/meme'>
					<li>Meme</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;