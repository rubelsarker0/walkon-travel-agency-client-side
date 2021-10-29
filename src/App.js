import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Navigation from './components/Shared/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute, {
	AuthenticationPrivateRoute,
} from './components/PrivateRoute/PrivateRoute';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Navigation></Navigation>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<AuthenticationPrivateRoute path="/account/login">
						<Login></Login>
					</AuthenticationPrivateRoute>
					<Route path="/account/register">
						<Register></Register>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</AuthProvider>
	);
}

export default App;
