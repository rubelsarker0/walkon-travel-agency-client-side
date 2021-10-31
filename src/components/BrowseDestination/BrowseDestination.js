import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner, Row, Container } from 'react-bootstrap';
import DestinationCard from '../Home/DestinationCard/DestinationCard';

const BrowseDestination = () => {
	const [browseDestinations, setBrowseDestinations] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://calm-woodland-45341.herokuapp.com/api/destinations')
			.then((res) => {
				setBrowseDestinations(res.data);
				setLoading(false);
				console.log(res.data);
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
				{browseDestinations && (
					<Row lg={3} md={2} xs={1} className="g-4 py-4">
						{browseDestinations.map((destination) => (
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

export default BrowseDestination;
