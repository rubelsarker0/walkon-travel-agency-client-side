import React from 'react';
import {
	Accordion,
	Button,
	Card,
	Col,
	Container,
	Form,
	Row,
} from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const FAQ = () => {
	const { user } = useAuth();
	return (
		<section className="py-5">
			<Container>
				<Row className="g-4">
					<Col lg={12} xs={12}>
						<h1 className="generic-text-color fw-bold">
							Frequently Asked Question
						</h1>
						<Accordion defaultActiveKey="0" className="mt-5">
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									Do your tours include international airfare?
								</Accordion.Header>
								<Accordion.Body>
									Trip specific information on transportation can be found on
									the trip summary page however in most cases we use public
									transportation. We’ve found that how you get there
									significantly influences the tone of your journey and public
									transportation allows face-to-face interaction with the local
									people. Some of our adventures, including our “Superior”,
									“Comfort Class” and most adventures in Africa, use private
									transportation.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									{' '}
									What type of ground transportation is used on your tours?
								</Accordion.Header>
								<Accordion.Body>
									Trip specific information on transportation can be found on
									the trip summary page however in most cases we use public
									transportation. We’ve found that how you get there
									significantly influences the tone of your journey and public
									transportation allows face-to-face interaction with the local
									people. Some of our adventures, including our “Superior”,
									“Comfort Class” and most adventures in Africa, use private
									transportation.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									Which payment methods are acceptable?
								</Accordion.Header>
								<Accordion.Body>
									Trip specific information on transportation can be found on
									the trip summary page however in most cases we use public
									transportation. We’ve found that how you get there
									significantly influences the tone of your journey and public
									transportation allows face-to-face interaction with the local
									people. Some of our adventures, including our “Superior”,
									“Comfort Class” and most adventures in Africa, use private
									transportation.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default FAQ;
