import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { NavLink } from 'react-router-dom';

const Thresholds = () => {
	const chartRef = useRef({});

	const initChart = () => {
		const chartDom = chartRef.current;
		const myChart = echarts.init(chartDom);
		const option = {
			title: {
				text: 'Thresholds Chart',
			},

			xAxis: {
				type: 'time',
			 
			},
			yAxis: {
				type: 'value',
 
			},
			series: [
				{
					name: 'Histórico',
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					showAllSymbol: true,
					data: [
						['2024-08-14 08:00:00', 50],
						['2024-08-14 08:30:00', 45],
						['2024-08-14 09:00:00', 48],
						['2024-08-14 09:30:00', 75],
						['2024-08-14 10:00:00', 60],
						['2024-08-14 10:30:00', 68],
						['2024-08-14 11:00:00', 57],
						['2024-08-14 11:30:00', 61],
						['2024-08-14 12:00:00', 60],
						['2024-08-14 12:30:00', 80],
						['2024-08-14 13:00:00', 60],
						['2024-08-14 13:30:00', 65],
						['2024-08-14 14:00:00', 55],
						['2024-08-14 14:30:00', 65],
						['2024-08-14 15:00:00', 60],
						['2024-08-14 15:30:00', 55],
						['2024-08-14 16:00:00', 60],
					],
					markLine: {
						symbol: 'none',
						data: [
							{
								type: 'average',
								yAxis: 73,
								label: {
									formatter: 'Limit 1',
									position: 'middle',
								},
								lineStyle: {
									color: 'green',
									width: 1,
								},
							},
							{
								yAxis: 62,
								label: {
									formatter: 'Limit 2',
									position: 'middle',
								},
								lineStyle: {
									color: 'orange',
									width: 1,
									type: 'dashed',
								},
							},
							{
								yAxis: 54,
								label: {
									formatter: 'Limit 3',
									position: 'middle',
								},
								lineStyle: {
									color: 'red',
									width: 1,
									type: 'dashed',
								},
							},
						],
					},
				},
			],
		};

		myChart.setOption(option);
	};
	useEffect(() => {
		initChart();
	}, []);

	return <div ref={chartRef} style={{ width: '1000px', height: '600px' }} />;
};

export { Thresholds };
