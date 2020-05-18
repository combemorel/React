import React from 'react';

import './TodoList.css'; // Import du style de base du composent

import TodoItem from './TodoItem'; // Import du composent
import todoData from './todoData'; // Import des donnée sous forme d'objet

class TodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todoData,
			newTodo: {
				id: todoData.length + 1,
				text: '',
				completed: false
			}
		};
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	};


	handleChange(event) {
		const { id } = event.target
		this.setState((prevState) => {
			const updatesTodos = prevState.todos.map(todo => {
				if( todo.id === id ) {
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: updatesTodos
			};
		})
	};

	handleClick(event) {
		const { id } = event.target
		this.setState((prevState) => {
			const updatesTodos = prevState.todos.filter(todo =>  todo.id !== id)
			return {
				todos: updatesTodos
			};
		})
	};

	handleInputChange(event) {
		this.setState({
			textNewTodo: event.target.value
		})
	};

	handleSubmit(event) {
		this.setState({
			newTodo: {
				text: event.target.value
			}
		})

		this.setState((prevState) => {
			const updatesTodos = prevState.todos.map((todo) => {
				return todo
			})
			console.log(updatesTodos)
			updatesTodos.push(this.state.newTodo)
			console.log(updatesTodos)
			return {
				todos: updatesTodos
			}
		})

		this.setState({
			newTodo: {}
		})
	};

	render() {
		const todoItems = this.state.todos.map(item =>
			<TodoItem
				key={item.id}
				item={item}
				textInput= { this.props.textInput }
				handleChange={this.handleChange}
				handleClick={this.handleClick}
			/>
		);

		return (
			<main className='todo-list'>
				<h1>TodoList</h1>
				<form onSubmit={ this.handleSubmit }>
					<label>Nouveau :
						<input type='text' placeholder="Ex: Faire les courses" onChange={ this.handleInputChange } value={ this.state.textInput } autoFocus={ true }/>
					</label>
					<button type="submit">Ajouter</button>
				</form>
				{todoItems}
			</main>
		);
	};
};

export default TodoList;