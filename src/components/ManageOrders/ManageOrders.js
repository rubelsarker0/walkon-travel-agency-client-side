import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
	const [orders, setOrders] = useState([]);
	const [reCall, setReCall] = useState(true);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/Orders`)
			.then((res) => {
				setOrders(res.data);
			})
			.catch((err) => console.log(err));
	}, [reCall]);

	const handleApproveOrder = (id) => {
		axios
			.put(`http://localhost:5000/api/order/update/status/${id}`)
			.then((res) => {
				if (res.data.modifiedCount > 0) {
					setReCall(!reCall);
				}
			})
			.catch((err) => console.log(err));
	};
	const handleRemove = (id) => {
		const isDelete = window.confirm(
			'You are removing your order are you sure?'
		);
		if (isDelete) {
			axios
				.delete(`http://localhost:5000/api/order/delete/${id}`)
				.then((res) => {
					if (res.data.deletedCount > 0) {
						const newAllOrders = orders.filter((order) => order._id !== id);
						setOrders(newAllOrders);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<section style={{ minHeight: '600px' }}>
			<Container className="my-5">
				<h1 className="generic-text-color2 text-center py-3">
					Manage your bookings
				</h1>
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
									<td>{order.author.name}</td>
									<td>{order.place}</td>
									<td>{order.price}</td>
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
										<button
											onClick={() => handleApproveOrder(order._id)}
											className="btn btn-sm btn-primary w-50"
											disabled={
												order.status === 'Cancelled' ||
												order.status === 'Approved'
											}
										>
											Approve
										</button>
										<button
											onClick={() => handleRemove(order._id)}
											className="btn btn-sm btn-danger w-50"
										>
											REMOVE
										</button>
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

export default ManageOrders;
