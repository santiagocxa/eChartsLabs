import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { NavLink } from 'react-router-dom';
import {
	metricsAsTimeSeries,
	metricsAsTimeSeriesPlus,
} from './utils/dataForecasting';
import { getSeriesForecasting } from './Tools';

const Forecasting = () => {
	const chartRef = useRef({});

	const initChart = () => {
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
			series: getSeriesForecasting(metricsAsTimeSeries),
		};
		myChart.setOption(option);
	};
	useEffect(() => {
		initChart();
	}, []);

	return <div ref={chartRef} style={{ width: '1000px', height: '600px' }} />;
};

export { Forecasting };
