import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faUser,
	faAddressBook,
} from '@fortawesome/free-solid-svg-icons';

const Details = (props) => {
	const { travelPlace, description, duration } = props.destination;
	return (
		<div className="py-5">
			<h1 className="generic-icon-color2 mb-5">Overview</h1>
			<p className="text-alignment">{description}</p>
			<br />
			<div className="bg-light d-flex align-items-center justify-content-between border-3 rounded-3 py-5 px-3">
				<h5>
					<FontAwesomeIcon
						className="fa-1x generic-icon-color2 me-3"
						icon={faClock}
					/>
					{duration}
				</h5>
				<h5>
					<FontAwesomeIcon
						className="fa-1x generic-icon-color2 me-3"
						icon={faUser}
					/>
					15 Age +
				</h5>
				<h5>
					<FontAwesomeIcon
						className="fa-1x generic-icon-color2 me-3"
						icon={faAddressBook}
					/>
					{travelPlace}
				</h5>
			</div>
			<br />
			<p className="">{description.slice(1400, description.length)}</p>
		</div>
	);
};

export default Details;
