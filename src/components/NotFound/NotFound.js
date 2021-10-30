import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import notFoundImg from '../../assets/images/404.png';
const NotFound = () => {
	const history = useHistory();
	const handleGoBack = () => {
		history.goBack();
	};
	return (
		<Container>
			<div className="text-center py-5 mt-4">
				<div>
					<img className="w-50" src={notFoundImg} alt="" />
				</div>
				<div className="pt-5">
					<Button
						onClick={handleGoBack}
						className=" generic-btn-color btn-login rounded px-5 fw-bold 5 mt-3"
					>
						Go back
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default NotFound;
