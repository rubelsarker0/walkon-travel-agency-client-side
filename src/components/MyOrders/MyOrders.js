import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
	const [orders, setOrders] = useState([]);
	const [load, setLoad] = useState(true);

	const { user } = useAuth();

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/Orders/${user.uid}`)
			.then((res) => {
				setOrders(res.data);
			})
			.catch((err) => console.log(err));
	}, [user, load]);

	const handleCancel = (id) => {
		const isCancel = window.confirm('Are you sure?');
		if (isCancel) {
			axios
				.put(`http://localhost:5000/api/order/cancel/${id}`)
				.then((res) => {
					console.log(res);
					if (res.data.modifiedCount > 0) {
						setLoad(!load);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<section>
			<div className="bg-primary py-5">
				<Container>
					<h1 className="text-white">My Booking</h1>
				</Container>
			</div>
			<Container className="my-5">
				{orders.length > 0 ? (
					<Table className="rounded-3" striped bordered hover variant="dark">
						<thead>
							<tr>
								<th>Author</th>
								<th>Name</th>
								<th>Email</th>
								<th>TravelPlace</th>
								<th>Booking Price</th>
								<th>Date</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr>
									<td>
										<img
											width="50px"
											className="rounded-circle bg-white"
											src={order.author.photo}
											alt=""
										/>
									</td>
									<td>
										{order.author.name ? order.author.name : 'Not/available'}
									</td>
									<td>{order.email}</td>
									<td>{order.place}</td>
									<td>$ {order.price}</td>
									<td>{order.date}</td>
									<td>
										<div
											className={`bg-${
												order.status === 'Cancelled' ? 'danger' : 'warning'
											}  rounded fw-bold text-center`}
										>
											{order.status}
										</div>
									</td>
									<td>
										<div className="text-center">
											<button
												onClick={() => handleCancel(order._id)}
												className="btn btn-danger w-75"
												disabled={order.status === 'Cancelled'}
											>
												Cancel
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<h1 className="text-center fw-bold text-danger">
						You have no order yet
					</h1>
				)}
			</Container>
		</section>
	);
};

export default MyOrders;
