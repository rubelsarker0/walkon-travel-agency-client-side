import React, { useRef } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card, Col, Row } from 'react-bootstrap';
import newDestinationImg from '../../assets/images/new-destination-img.svg';
import useAuth from '../../hooks/useAuth';

const AddDestination = () => {
	const placeAddressRef = useRef();
	const titleRef = useRef();
	const descriptionRef = useRef();
	const imgUrlRef = useRef();
	const durationRef = useRef();
	const groupSizeRef = useRef();
	const travelPriceRef = useRef();
	const startingTimeRef = useRef();

	const { user } = useAuth();

	const handleAddDestination = (e) => {
		e.preventDefault();

		const newDestination = {
			travelPlace: placeAddressRef.current.value,
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			duration: durationRef.current.value,
			groupSize: groupSizeRef.current.value,
			bookingPrice: travelPriceRef.current.value,
			destinationUrl: imgUrlRef.current.value,
			travelTime: startingTimeRef.current.value,
			author: {
				name: user.displayName,
				email: user.email ? user.email : 'Not/Available',
				photoUrl: user.photoURL
					? user.photoURL
					: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
			},
		};

		axios
			.post('http://localhost:5000/api/create/destinations', newDestination)
			.then((res) => {
				console.log(res);
				if (res.data.insertedId) {
					alert('Successfully added a new destination');
					e.target.reset();
				}
			});
		console.log(newDestination);
	};

	return (
		<section className="my-5">
			<Container>
				<h1 className="generic-text-color text-center py-4 fw-bold">
					Add Your Destination
					<hr className="w-50 mx-auto p-1" />
				</h1>
				<Row lg={2} xs={1} className="g-5">
					<Col>
						<img className="w-100" src={newDestinationImg} alt="" />
					</Col>

					<Col>
						<Card className="p-3 border-0 shadow-lg rounded">
							<Form onSubmit={handleAddDestination}>
								<Form.Group className="mb-3" controlId="formBasicTitle">
									<Form.Label>Place name</Form.Label>
									<Form.Control
										ref={titleRef}
										type="text"
										placeholder="Travel place name"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPlace">
									<Form.Label>Address</Form.Label>
									<Form.Control
										type="text"
										ref={placeAddressRef}
										placeholder="Travel place address"
										required
									/>
								</Form.Group>

								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlTextarea1"
								>
									<Form.Label>Descriptions</Form.Label>
									<Form.Control
										ref={descriptionRef}
										as="textarea"
										rows={3}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicImage Url">
									<Form.Label>Place image url</Form.Label>
									<Form.Control
										type="text"
										ref={imgUrlRef}
										placeholder="Travel image url"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="duration">
									<Form.Label>Duration</Form.Label>
									<Form.Control
										type="text"
										ref={durationRef}
										placeholder="Travel duration"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="size">
									<Form.Label>Group size</Form.Label>
									<Form.Control
										type="number"
										ref={groupSizeRef}
										placeholder="Travel group size"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="price">
									<Form.Label>Booking price $</Form.Label>
									<Form.Control
										type="number"
										ref={travelPriceRef}
										placeholder="Travel booking price"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="time">
									<Form.Label>Start time</Form.Label>
									<Form.Control
										type="date"
										ref={startingTimeRef}
										placeholder="Travel start time"
										required
									/>
								</Form.Group>
								<div className="text-center">
									<Button
										className="w-50 mx-auto generic-btn-color"
										type="submit"
									>
										Submit
									</Button>
								</div>
							</Form>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AddDestination;
