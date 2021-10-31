import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/images/logo.png';

const Navigation = () => {
	const { user, logOut } = useAuth();
	const history = useHistory();
	const handleLoginClick = () => {
		history.push('/account/login');
	};
	return (
		<>
			<Navbar expand="lg">
				<Container>
					<img
						className="img-fluid me-5"
						src={logo}
						alt=""
						style={{ height: '28px', width: '131px' }}
					/>
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
					<Navbar.Collapse id="basic-navbar-nav ">
						<Nav className=" fw-bold">
							<NavLink
								exact
								activeClassName="genetic-text-color2"
								className="nav-link"
								to="/home"
							>
								HOME
							</NavLink>
							<NavLink
								exact
								activeClassName="generic-text-color2"
								className="nav-link"
								to="/allDestination"
							>
								BROWSE DESTINATION
							</NavLink>
							<NavLink
								exact
								activeClassName="generic-text-color2"
								className="nav-link"
								to="/create/destination"
							>
								CREATE DESTINATION
							</NavLink>
							<NavLink
								exact
								activeClassName="generic-text-color2"
								className="nav-link"
								to="/myOrders"
							>
								ORDERS
							</NavLink>
							<NavLink
								exact
								activeClassName="generic-text-color2"
								className="nav-link"
								to="/manageOrder"
							>
								MANAGE ORDER
							</NavLink>
						</Nav>

						{user ? (
							<Button
								onClick={logOut}
								className="rounded generic-btn-color ms-auto me-2 px-5 fw-bold"
							>
								Logout
							</Button>
						) : (
							<Button
								onClick={handleLoginClick}
								className="rounded generic-btn-color ms-auto px-5 fw-bold"
							>
								<FontAwesomeIcon
									className="fa-1x me-3 text-white"
									icon={faLock}
								/>
								Log In
							</Button>
						)}
						{user && (
							<div className="d-flex  align-items-center">
								<h5 className="fw-bold text-secondary me-3">
									{user.displayName}
								</h5>
								<img
									width="50px"
									className="rounded-circle"
									src={
										user.photoURL
											? user.photoURL
											: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
									}
									alt=""
								/>
							</div>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
