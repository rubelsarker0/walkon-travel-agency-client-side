import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destination = () => {
	return (
		<section className="py-5 bg-light">
			<Container>
				<div className="text-center">
					<h1 className="generic-text-color">OUR DESTINATION</h1>
					<p className="text-secondary">
						Trending, Best Selling Tours And Fun Destinations
					</p>
				</div>
				<Row lg={3} md={2} xs={1}>
					<DestinationCard></DestinationCard>
					<DestinationCard></DestinationCard>
					<DestinationCard></DestinationCard>
				</Row>
			</Container>
		</section>
	);
};

export default Destination;
