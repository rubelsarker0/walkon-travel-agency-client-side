import React from 'react';
import { Col } from 'react-bootstrap';
import footerLogo from '../../../../assets/images/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Social = () => {
	return (
		<Col>
			<img
				className="img-fluid"
				src={footerLogo}
				alt=""
				style={{ height: '37px', width: '205px' }}
			/>
			<p className="text-white my-3 text-format">
				Walko is a rapidly-growing global online travel agency, walko is here to
				help you plan the perfect trip. Whether you're going on holiday, taking
				a business trip, or looking to set up a corporate travel account, walko
				is here to help you.
			</p>
			<div>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-icon-color"
						icon={faFacebook}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-icon-color"
						icon={faTwitter}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 generic-icon-color"
						icon={faYoutube}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x generic-icon-color"
						icon={faInstagram}
					/>
				</a>
			</div>
		</Col>
	);
};

export default Social;
