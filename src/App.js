import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css'; // Import du style de base du composent
import './Home.css'; // Import du style de base du composent

import Footer from './components/Footer'; // Import du composent
import Nav from './components/Nav'; // Import du composent
import TodoList from './components/TodoList'; // Import du composent


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<Nav />
					<Switch>
						<Route path='/' exact component={ Home }/>
						<Route path='/todolist' component={ TodoList } />
					</Switch>
					<Footer />
				</div>
			</Router>
		)
	};
};

const Home = () => (
	<div className="home">
		<h1>Home</h1>
	</div>
);

export default App;