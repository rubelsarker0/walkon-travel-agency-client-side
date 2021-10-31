import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destination = () => {
	const [destinations, setDestinations] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://calm-woodland-45341.herokuapp.com/api/destinations')
			.then((res) => {
				setDestinations(res.data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	if (isLoading) {
		return (
			<div className="text-center mx-auto py-5">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}
	return (
		<section className="py-5 bg-light">
			<Container>
				<div className="text-center">
					<h1 className="generic-text-color2">OUR DESTINATION</h1>
					<p className="text-secondary">
						Our most loving Tours and Destinations!!
					</p>
				</div>
				{destinations && (
					<Row lg={3} md={2} xs={1} className="g-4 py-4">
						{destinations.map((destination) => (
							<DestinationCard
								key={destination._id}
								destination={destination}
							></DestinationCard>
						))}
					</Row>
				)}
			</Container>
		</section>
	);
};

export default Destination;
