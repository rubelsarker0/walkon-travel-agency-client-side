import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faEnvelopeOpen,
	faClock,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';

const ContactDetails = () => {
	return (
		<Col className="ps-5">
			<div className="ms-5">
				<h5 className="">Contact Details</h5>
				<hr className="text-info w-50 p-1" />
				<p>
					<FontAwesomeIcon
						className="fa-1x footer-icon-color me-3"
						icon={faLocationArrow}
					/>
					732 Despard St, Atlanta
				</p>
				<p>
					<FontAwesomeIcon
						className="fa-1x footer-icon-color me-3"
						icon={faEnvelopeOpen}
					/>
					support@walkon.com
				</p>
				<p>
					<FontAwesomeIcon
						className="fa-1x footer-icon-color me-3"
						icon={faClock}
					/>
					09.00 - 17.00
				</p>
				<p>
					<FontAwesomeIcon
						className="fa-1x footer-icon-color me-3"
						icon={faPhoneAlt}
					/>
					+1 234 567 890
				</p>
			</div>
		</Col>
	);
};

export default ContactDetails;
