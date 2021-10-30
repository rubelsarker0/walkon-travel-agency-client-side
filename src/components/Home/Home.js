import React from 'react';
import Banner from './Banner/Banner';
import Destination from './Destination/Destination';
import FAQ from './FAQ/Faq';
import Reviews from './Reviews/Reviews';

const Home = () => {
	return (
		<>
			<Banner></Banner>
			<Destination></Destination>
			<Reviews></Reviews>
			<FAQ></FAQ>
		</>
	);
};

export default Home;
