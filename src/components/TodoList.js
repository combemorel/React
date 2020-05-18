import React from 'react';

import './TodoList.css'; // Import du style de base du composent

import TodoItem from './TodoItem'; // Import du composent
import todoData from './todoData'; // Import des donnée sous forme d'objet

class TodoList extends React.Component {
	

	render() {
		const todoItems = this.props.todos.map(item => 
			<TodoItem 
				key={item.id}
				item={item}
				textInput= { this.props.textInput}
				handleChange={this.props.handleChange}
				handleClick={this.props.handleClick}

			/>
		);

		return (
			<main className='todo-list'>
				<h1>TodoList</h1>
				<form onSubmit={ this.props.handleSubmit }>
					<label>Nouveau : 
						<input type='text' placeholder='Ex: Faire les courses' onChange={ this.props.handleInputChange } value={ this.props.textInput } autoFocus={ true }/>
					</label>
					<button type='submit'>Ajouter</button>
				</form>
				{todoItems}
			</main>
		);
	};
};

export default TodoList;