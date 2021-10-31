import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const DestinationCard = (props) => {
	const {
		_id,
		title,
		description,
		duration,
		groupSize,
		bookingPrice,
		destinationUrl,
	} = props.destination;

	const history = useHistory();
	const handleBookNowButton = () => {
		history.push(`/destination/booking/${_id}`);
	};

	return (
		<Col>
			<Card className="p-0 h-100 border-0 border-bottom border-primary shadow">
				<Card.Img
					variant="top"
					className="img-fluid"
					src={destinationUrl}
					style={{ height: '250px' }}
				/>
				<Card.Body className="position-relative">
					<Card.Title className="fs-5 generic-text-color2">{title}</Card.Title>
					<Card.Text className="text-secondary">
						{description.slice(0, 100)}
					</Card.Text>
					<hr />
					<Row>
						<Col>
							<div className="d-flex align-items-center ">
								<FontAwesomeIcon
									className="fa-2x generic-icon-color me-1"
									icon={faUsers}
								/>
								<div>
									<div>Group Size</div>
									<div className="text-secondary">{groupSize} Peoples</div>
								</div>
							</div>
						</Col>
						<Col>
							<div className="d-flex align-items-center ">
								<FontAwesomeIcon
									className="fa-2x generic-icon-color me-1"
									icon={faClock}
								/>
								<div>
									<div>Duration</div>
									<div className="text-secondary">{duration}</div>
								</div>
							</div>
						</Col>
					</Row>
				</Card.Body>

				<Card.Footer>
					<div className="d-flex align-items-center justify-content-between">
						<Button onClick={handleBookNowButton} className="generic-btn-color">
							BOOK NOW
						</Button>
						<h3 className="fw-bold" style={{ color: 'rgb(39 207 207)' }}>
							{`$${bookingPrice}`}
						</h3>
					</div>
				</Card.Footer>
			</Card>
		</Col>
	);
};

export default DestinationCard;
