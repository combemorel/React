import React from 'react';

import './TodoItem.css'; // Import du style de base du composent
import './../../node_modules/font-awesome/css/font-awesome.min.css'; 

function TodoItem(props){
	const completedStyle = {
		textDecoration: 'line-through',
		color: '#cdcdcd',
		fontStyle: 'italic'
	}

	return (
		<div className='todo-item' >
			<input 
				type='checkbox' 
				checked={ props.item.completed } 
				onChange={ () => props.handleChange(props.item.id) }
			/>
			<p style={ props.item.completed ? completedStyle : null }>{ props.item.text }</p>
			<button onClick={ () => props.handleClick(props.item.id) }>x</button>	
		</div>
	);
};

export default TodoItem;