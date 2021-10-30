import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from './ReviewCard';

const Reviews = () => {
	return (
		<section className="py-5 bg-light border-5">
			<Container>
				<div className="text-center">
					<h1 className="fw-bold generic-text-color2">
						<i>Happy customers</i>
						<hr className="mx-auto w-25 generic-text-color p-1" />
					</h1>
				</div>
				<Row lg={3} md={2} xs={1} className="g-4 py-5">
					<ReviewCard></ReviewCard>
					<ReviewCard></ReviewCard>
					<ReviewCard></ReviewCard>
				</Row>
			</Container>
		</section>
	);
};

export default Reviews;
