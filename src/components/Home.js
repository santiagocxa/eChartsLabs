import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div className='Menu'>
				<Link className='Button' to='/doubleAxis'>
					DoubleAxis
				</Link>
				<Link className='Button' to='/Thresholds'>
					Thresholds
				</Link>
				<Link className='Button' to='/forecasting'>
					forecasting
				</Link>
			</div>
			<Outlet/>
		</>
	);
};

export default Home;
