import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import DestinationCard from '../DestinationCard/DestinationCard';

const Destination = () => {
	const [destinations, setDestinations] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/destinations')
			.then((res) => setDestinations(res.data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<section className="py-5 bg-light">
			<Container>
				<div className="text-center">
					<h1 className="generic-text-color2">OUR DESTINATION</h1>
					<p className="text-secondary">
						Trending, Best Selling Tours And Fun Destinations
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
