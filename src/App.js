import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';

function App() {
	return (
		<Router>
			<Navigation></Navigation>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route exact path="/home">
					<Home></Home>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
