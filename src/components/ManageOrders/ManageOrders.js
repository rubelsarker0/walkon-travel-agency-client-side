import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/Orders`)
			.then((res) => {
				setOrders(res.data);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleDelete = (id) => {
		const isDelete = window.confirm('Are you sure for Delete your this order?');
		if (isDelete) {
			axios
				.delete(`http://localhost:5000/api/order/delete/${id}`)
				.then((res) => {
					console.log(res);
					if (res.data.deletedCount > 0) {
						const newAllOrders = orders.filter((order) => order._id !== id);
						setOrders(newAllOrders);
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
								<tr>
									<td>
										<img
											width="50px"
											className="rounded-circle bg-white"
											src={order.author.photo}
											alt=""
										/>
									</td>

									<td>{order.place}</td>
									<td>{order.price}</td>
									<td>{order.date}</td>
									<td>
										<div className="bg-warning  rounded fw-bold text-center">
											{order.status}
										</div>
									</td>
									<td>
										<div className="text-center">
											<button
												onClick={() => handleDelete(order._id)}
												className="btn btn-sm btn-danger w-75"
											>
												Delete
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

export default ManageOrders;
