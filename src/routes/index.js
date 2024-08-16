import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import { DoubleAxis } from '../components/DoubleAxis';
import { Thresholds } from '../components/Thresholds';
import { Forecasting } from '../components/Forecasting.js';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'doubleAxis',
				element: <DoubleAxis />,
			},
			{
				path: '/thresholds',
				element: <Thresholds />,
			},
			{
				path: '/forecasting',
				element: <Forecasting />,
			},
		],
	},
]);
