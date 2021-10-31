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
					if (res.data.modifiedCount > 0) {
						setLoad(!load);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<section style={{ minHeight: '600px' }}>
			<Container className="my-5">
				<h1 className=" text-center generic-text-color2 py-3">Your bookings</h1>
				{orders.length > 0 ? (
					<Table className="rounded-3" striped bordered hover variant="light">
						<thead>
							<tr>
								<th>Name</th>
								<th>Place</th>
								<th>Price</th>
								<th>Date</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>
										{order.author.name ? order.author.name : 'Not/available'}
									</td>
									<td>{order.place}</td>
									<td>$ {order.price}</td>
									<td>{order.date}</td>
									<td>
										<div
											className={`bg-${
												order.status === 'Approved' ? 'success' : 'warning'
											} rounded fw-bold text-center`}
										>
											{order.status}
										</div>
									</td>
									<td>
										<div className="text-center">
											<button
												onClick={() => handleCancel(order._id)}
												className="btn btn-danger w-75"
												disabled={
													order.status === 'Cancelled' ||
													order.status === 'Approved'
												}
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
					<h1 className="text-center fw-bold generic-text-color">
						No order found!!! Please place an order first.
					</h1>
				)}
			</Container>
		</section>
	);
};

export default MyOrders;
