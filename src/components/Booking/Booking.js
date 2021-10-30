import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Reviews from '../Home/Reviews/Reviews';
import Banner from './Banner/Banner';
import Details from './Details/Details';
import BookingForm from './BookingForm/BookingForm';

const Booking = () => {
	const [destination, setDestination] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/destinations/${id}`)
			.then((res) => setDestination(res.data))
			.catch((err) => console.log(err));
	}, [id]);
	return (
		<section>
			{destination && (
				<div>
					<Banner
						img={destination.destinationUrl}
						price={destination.bookingPrice}
						title={destination.title}
					></Banner>
					<Container>
						<Row className="g-4">
							<Col lg={8} xs={12}>
								<Details destination={destination}></Details>
							</Col>
							<Col lg={4} xs={12}>
								<BookingForm destination={destination}></BookingForm>
							</Col>
						</Row>
					</Container>
					<Reviews></Reviews>
				</div>
			)}
		</section>
	);
};

export default Booking;
