import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { getSeries, mockData } from './Tools';
import { NavLink } from 'react-router-dom';

const DoubleAxis = () => {
	const chartRef = useRef({});
	const nameYAxi1 = 'Empty containers';
	const nameYAxi2 = 'Speed';
	const series = getSeries(mockData);

	const initChart = () => {
		const chartDom = chartRef.current;
		const myChart = echarts.init(chartDom);
		const option = {
			title: {
				text: 'Multiple Axis',
			},
			tooltip: {
				alwaysShowContent: false,
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999',
					},
				},
			},
			legend: {
				data: series.map((serie) => serie.name),
				bottom: 0,
				orient: 'vertical',
				x: 'left',
				padding: [0, 0, 0, 90],
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: 270,
				containLabel: true,
			},
			toolbox: {
				feature: {
					dataZoom: {},
					restore: {},
				},
			},
			xAxis: {
				type: 'time',
			},
			yAxis: [
				{
					type: 'value',
					name: 'Number',
					nameTextStyle: {
						fontWeight: 'bold',
					},
					nameLocation: 'middle',
					nameGap: 50,
					tooltip: {
						show: true,
						backgroundColor: 'black',
						formatter: function (params) {
							return `<p style="font-weight: bold;
		                            color: white;
		                            margin: 0px;"
		                  >${nameYAxi1}</p>`;
						},
					},
				},
				{
					type: 'value',
					name: 'Milliseconds',
					nameTextStyle: {
						fontWeight: 'bold',
					},
					nameLocation: 'middle',
					nameGap: 50,
					tooltip: {
						show: true,
						backgroundColor: 'black',
						formatter: (params) => `<p style="font-weight: bold;
		                            color: white;
		                            margin: 0px;"
		                  >${nameYAxi2}</p>`,
					},
				},
			],
			dataZoom: [
				{
					type: 'slider',
					start: 30,
					end: 50,
					bottom: 220,
				},
			],
			series: series,
		};

		myChart.setOption(option);
	};
	useEffect(() => {
		initChart();
	}, []);

	return <div ref={chartRef} style={{ width: '1000px', height: '600px' }} />;
};

export { DoubleAxis };
