import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faUser,
	faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
	const {
		_id,
		travelPlace,
		title,
		description,
		duration,
		groupSize,
		bookingPrice,
		destinationUrl,
		travelTime,
	} = props.destination;
	return (
		<div className="py-5">
			<h1 className="text-orange mb-5">Overview</h1>
			<p className="fw-bolder fs-5">{description.slice(0, 500)}</p>
			<br />
			<p className="text-secondary">{description.slice(500, 1400)}</p>
			<div className="bg-light d-flex align-items-center justify-content-between border-3 rounded-3 py-5 px-3">
				<h5>
					<FontAwesomeIcon className="fa-1x text-info me-3" icon={faClock} />
					{duration}
				</h5>
				<h5>
					<FontAwesomeIcon className="fa-1x text-info me-3" icon={faUser} />
					15 Age +
				</h5>
				<h5>
					<FontAwesomeIcon
						className="fa-1x text-info me-3"
						icon={faAddressBook}
					/>
					{travelPlace}
				</h5>
			</div>
			<br />
			<p className="fw-bold">{description.slice(1400, description.length)}</p>
		</div>
	);
};

export default Details;
