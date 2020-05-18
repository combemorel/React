import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'; // Import du style de base du composent
import './Home.css'; // Import du style de base du composent

import Footer from './components/Footer'; // Import du composent
import Nav from './components/Nav'; // Import du composent
import TodoList from './components/TodoList'; // Import du composent


class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [],
			newTodo: {
				id: 1,
				text: '',
				completed: false
			},
			textNewTodo:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	};

	handleChange(id) {

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

	handleClick(id) {

		this.setState((prevState) => { 
			const updatesTodos = prevState.todos.filter(todo =>  todo.id !== id)

			return {
				todos: updatesTodos
			};
		})
	};

	handleInputChange(event) {
		const newId = this.state.todos.length + 1
		this.setState({ 
			textNewTodo: event.target.value
		})
		this.setState({ 
			newTodo: {
				id: newId,
				text: event.target.value,
				completed: false
			}
		})
	};

	handleSubmit() {

		this.setState((prevState) => {
			const updatesTodos = prevState.todos.map((todo) => {
				return todo
			})
			updatesTodos.push(this.state.newTodo)
			return {
				todos: updatesTodos
			}
		})
		this.setState({
			textNewTodo: ''
		})
	}
	
	render() {
		const todoList = () => (
			<TodoList 
				todos={ this.state.todos }
				handleChange={ this.handleChange }
				handleClick={ this.handleClick }
				handleInputChange= { this.handleInputChange }
				handleSubmit={ this.handleSubmit }
				textInput={ this.state.textNewTodo }
			/>
		)
		
		return (
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path='/' exact component={ Home }/>
						<Route path='/todolist' component={ todoList }/>
					</Switch>
				</div>
				<Footer />

			</Router>
		)
	};
};

const Home = () => (
	<div className='home'>
		<h1>Home</h1>
	</div>
)

export default App; 