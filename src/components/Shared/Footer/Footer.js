import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Social from './Social/Social';
import ContactDetails from './ContactDetails/ContactDetails';

const Footer = () => {
	return (
		<footer className="footer-bg bg-dark text-white py-5">
			<Container>
				<Row lg={2} xs={1} className="g-5 ms-auto">
					<Social></Social>
					<ContactDetails></ContactDetails>
				</Row>
			</Container>
			<hr />
			<p className="text-white p-3 m-0 text-center">
				Develop by
				<a
					className="ms-2 footer-icon-color"
					target="_blank"
					rel="noreferrer"
					href="https://www.facebook.com/rubelsarker8"
				>
					Rubel Sarker
				</a>
				<span className="ms-2">&copy; 2021 all rights reserved</span>
			</p>
		</footer>
	);
};

export default Footer;
