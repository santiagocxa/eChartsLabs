import React, { useRef, useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { NavLink } from 'react-router-dom';
import {
	metricsAsTimeSeries,
	metricsAsTimeSeriesPlus,
	metricsAsTimeSeriesPositiveForecast,
} from './utils/dataForecasting';
import { getSeriesForecasting } from './Tools';

const Forecasting = () => {
	const [view, setView] = useState(false);
	const [hidden, setHidden] = useState(false);
	const [positiveForecast, setPositiveForecast] = useState(true);
	const chartRef = useRef({});

	const getLimint = (data) => {
		const newLimits = [];

		data.forecast.dataSeries.map((element) => {
			newLimits.push(Math.min(...element.fcstLower));
		});
		const num = Math.min(...newLimits);
		const isNegativeLimit = Math.sign(num) === -1 ? true : false;
		const absNum = Math.abs(num);
		const magnitude = Math.pow(10, Math.floor(Math.log10(absNum)));
		const newLimit = isNegativeLimit
			? Math.floor(num / magnitude) * magnitude * -1
			: 1;
		return { newLimit, isNegativeLimit };
	};

	const { newLimit, isNegativeLimit } = getLimint(
		view
			? metricsAsTimeSeriesPlus
			: positiveForecast
			? metricsAsTimeSeriesPositiveForecast
			: metricsAsTimeSeries
	);

	const initChart = (view, hidden) => {
		const chartDom = chartRef.current;
		const myChart = echarts.init(chartDom);

		const option = {
			title: {
				text: 'Forecasting ',
			},
			tooltip: {
				trigger: 'item',
				axisPointer: {
					type: 'none',
				},
				formatter: function (params) {
					return `
          <div
          style="
            	background-color: #6ba389;
              margin: -20px;
              color: aliceblue;
              display: block;
              padding: 10px;
              border-radius: 5px;
              font-size: medium;
              font-weight: 600;
          "
        >
          Value:
          <br />
          ${(params.data[1] - params.data[2]?.negativeNumber).toLocaleString(
					'es-ES'
				)}
        </div>
          `;
				},
			},
			xAxis: {
				type: 'time',
			},

			series: getSeriesForecasting(
				view
					? metricsAsTimeSeriesPlus
					: positiveForecast
					? metricsAsTimeSeriesPositiveForecast
					: metricsAsTimeSeries,
				!hidden,
				newLimit,
				isNegativeLimit
			),
			yAxis: {
				type: 'value',
				axisLabel: {
					formatter: function (val) {
						return isNegativeLimit ? val - newLimit : val;
					},
				},
			},
		};
		myChart.setOption(option, true);
	};
	useEffect(() => {
		initChart(view, hidden);
	}, [view, hidden, positiveForecast]);

	const onView = () => {
		setView(!view);
	};

	const onHidden = () => {
		setHidden(!hidden);
	};

	const onChange = () => {
		setPositiveForecast(!positiveForecast);
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
				<input
					onChange={() => onChange()}
					checked={positiveForecast}
					type='checkbox'
					id='positive-element'
					disabled={view}
				/>
				<label
					style={{ color: view ? 'gray' : 'black' }}
					for='positive-element'
				>
					Show positive forecast
				</label>
			</div>
			<div ref={chartRef} style={{ width: '1000px', height: '600px' }} />;
		</>
	);
};

export { Forecasting };
