import axios from 'axios';
import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const BookingForm = ({ destination }) => {
	const emailRef = useRef();
	const NameRef = useRef();
	const messageRef = useRef();
	const paymentRef = useRef();
	const phoneRef = useRef();
	const { user } = useAuth();

	const handleBooking = (e) => {
		e.preventDefault();
		const bookingData = {
			name: NameRef.current.value,
			email: emailRef.current.value,
			phone: phoneRef.current.value,
			message: messageRef.current.value,
			paymentMethod: paymentRef.current.value,
			status: 'Pending',
			uid: user.uid,
			price: destination.bookingPrice,
			place: destination.travelPlace,
			author: {
				name: user.displayName,
				email: user.email ? user.email : 'Not/Available',
				photo: user.photoURL
					? user.photoURL
					: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png',
			},
		};

		axios
			.post(
				'https://calm-woodland-45341.herokuapp.com/api/booking/newOrder',
				bookingData
			)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Successfully Placed your booking order');
					e.target.reset();
				}
			});
	};

	return (
		<section className="my-5 h-100 position-relative">
			<Card
				className=" mx-auto p-3 w-100 border-0 shadow-lg rounded position-lg-absolute "
				style={{ top: '-100px' }}
			>
				<h3 className="generic-icon-color2 text-center mb-4">
					Book your Order now!!
				</h3>
				<Form onSubmit={handleBooking}>
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							ref={emailRef}
							value={user.email}
							placeholder="Email"
							required
							disabled={user.email}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Name</Form.Label>
						<Form.Control
							ref={NameRef}
							type="text"
							placeholder="Name"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="number">
						<Form.Label>Phone Number</Form.Label>
						<Form.Control
							type="text"
							ref={phoneRef}
							placeholder="Number"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="method">
						<Form.Label>Payment Method</Form.Label>
						<Form.Control
							type="text"
							ref={paymentRef}
							placeholder="Method"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Message *</Form.Label>
						<Form.Control
							ref={messageRef}
							as="textarea"
							rows={3}
							placeholder="Got a question? send us a message"
						/>
					</Form.Group>

					<div className="text-center">
						<Button className=" generic-btn-color w-100 mx-auto" type="submit">
							Book Tour
						</Button>
					</div>
				</Form>
			</Card>
		</section>
	);
};
export default BookingForm;
