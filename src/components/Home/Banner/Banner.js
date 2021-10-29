import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import bannerImg from '../../../assets/images/banner-img.svg';
import './Banner.css';

const Banner = () => {
	const history = useHistory();
	const handleContact = () => {
		history.push('/contact');
	};
	return (
		<section className="top-banner py-5">
			<Container>
				<Row lg={2} xs={1} className="g-5">
					<Col>
						<img className="w-100" src={bannerImg} alt="" />
					</Col>
					<Col>
						<div className="bg-light rounded p-5 h-auto">
							<h1 className="regular-text-color mb-5">
								Eat, Sleep, And Travel, Explore Mysterious Places With Us
							</h1>
							<p className="text-secondary mb-5">
								Don't just Google 'holiday'. Here's the Walkon Travel team's
								list of our all-time favourite places – to help take the stress
								out of planning your next trip
							</p>
							<Button
								onClick={handleContact}
								variant="primary"
								className="rounded-pill px-5"
								size="lg"
							>
								Contact Us
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
