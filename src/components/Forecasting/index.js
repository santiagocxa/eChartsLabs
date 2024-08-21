import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { NavLink } from 'react-router-dom';
import {
	metricsAsTimeSeries,
	metricsAsTimeSeriesPlus,
} from './utils/dataForecasting';
import { getSeriesForecasting } from './Tools';

const Forecasting = () => {
	const [view, setView] = useState(false);
	const [hidden, setHidden] = useState(false);
	const chartRef = useRef({});

	const initChart = (view, hidden) => {
		const chartDom = chartRef.current;
		const myChart = echarts.init(chartDom);

		const option = {
			title: {
				text: 'Forecasting ',
			},
			tooltip: {
				trigger: 'axis',
			},
			xAxis: {
				type: 'time',
			},
			yAxis: {
				type: 'value',
			},
			series: getSeriesForecasting(
				view ? metricsAsTimeSeriesPlus : metricsAsTimeSeries,
				!hidden
			),
		};
		myChart.setOption(option, true);
	};
	useEffect(() => {
		initChart(view, hidden);
	}, [view, hidden]);

	const onView = () => {
		setView(!view);
	};

	const onHidden = () => {
		setHidden(!hidden);
	};

	return (
		<>
			<div className='Forecasting'>
				<input
					onChange={() => onView()}
					checked={view}
					type='checkbox'
					id='element'
				/>
				<label for='element'>View 4 Elements</label>
				<input
					onChange={() => onHidden()}
					checked={hidden}
					type='checkbox'
					id='band'
				/>
				<label for='band'>Bands of trust hidden</label>
			</div>
			<div ref={chartRef} style={{ width: '1000px', height: '600px' }} />;
		</>
	);
};

export { Forecasting };
