import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
	return (
		<section className="py-5">
			<Container>
				<Row className="g-4">
					<Col lg={12} xs={12}>
						<h1 className="generic-text-color2 fw-bold">
							Frequently Asked Question
						</h1>
						<Accordion defaultActiveKey="0" className="mt-5">
							<Accordion.Item eventKey="0">
								<Accordion.Header>
									What are the most surreal places to visit?
								</Accordion.Header>
								<Accordion.Body>
									Some of the strangest places on earth are also the most
									sublime: from the UFO-like dragon's blood trees in Yemen to a
									rainbow-colored hot spring in Yellowstone to a bridge in
									Germany that looks like a leftover prop from Lord of the
									Rings.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="1">
								<Accordion.Header>
									Why do you need to turn off all your electronic devices before
									an airplane takes off and lands?
								</Accordion.Header>
								<Accordion.Body>
									We've been taught to fear the interference of our portable
									devices and an airplane's sensitive electronic systems. And
									despite being told to turn off our darn phones, four out of
									ten passengers, it seems, disregard these warnings, since
									there's little hard evidence behind claims that
									electromagnetic emissions from devices can muddle airplane
									computers. Still, there's ample anecdotal corroboration, like
									the flight where a 30-degree navigation error was rectified
									simply by asking a passenger to turn off a portable DVD
									player. The issue is still being debated, so if in doubt,
									flick that Off switch. We might, eventually, long for the days
									when a chatty seatmate couldn’t make an hour-long phone call.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="2">
								<Accordion.Header>
									Do you have to be rich to travel the world?
								</Accordion.Header>
								<Accordion.Body>
									The beauty of travel is that it’s accessible to everyone, in
									some form. You don't have to go far to experience a new
									culture. Plus there are several ways to make most flights
									affordable, whether by being flexible, searching on new
									websites like Skypicker and Fareness, or just by planning
									ahead. Know the best time to book a flight: 57 days in advance
									for domestic flights, 117 for international. Then again, you
									could just make traveling the world your 9-to-5.
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey="3">
								<Accordion.Header>
									What are some common items savvy travelers bring with them
									(that less-savvy travelers don’t)?
								</Accordion.Header>
								<Accordion.Body>
									Don’t forget a small power strip—ideal for sharing a crowded
									outlet in an airport, and a simple way to keep all devices
									close by once at a hotel. (Combine that with a Zolt—which
									powers a laptop and two devices with a charger the size of a
									lipstick—and it’s even handier.) Keep a photograph of your
									luggage and passport on your smartphone; lose either of them,
									and you’ll be grateful for the reference. Pack a scarf—always.
									And since calling Nespresso coffee is an insult to baristas
									everywhere, the best in-room alternate is the Aeropress, a
									nifty gizmo that’s portable, light, and makes killer morning
									joe almost anywhere.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="4">
								<Accordion.Header>
									What’s it really like to be a travel writer?
								</Accordion.Header>
								<Accordion.Body>
									"For every beautiful beach hideaway, there’s been a missed
									flight or delay; for every delicious meal, a nasty case of
									'Delhi belly," says Traveler contributing editor Krisanne
									Fordham in her story on this very topic. In short: Traveling
									for a living is equal parts rewarding and challenging,
									satisfying and smelly. It teaches you to live—not linger, but
									really live—outside your comfort zone, to always pack a
									portable Wi-Fi hotspot, and to never check your bag again.
								</Accordion.Body>
							</Accordion.Item>
							<Accordion.Item eventKey="5">
								<Accordion.Header>
									hat are some things airline pilots won’t tell you?
								</Accordion.Header>
								<Accordion.Body>
									There’s no better Bible of in-flight secrets than Air Babylon,
									a rollicking romp through 24 hours at an airport compiling
									anonymous tell-alls from a raft of staff. One sample tidbit:
									Aviation law decrees that after an onboard death (more common
									than you’d imagine), planes must land at the nearest airport.
									No airline wants to pay fines for being delayed, so no one is
									officially declared dead on board until the plane is landing
									at its destination.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default FAQ;
