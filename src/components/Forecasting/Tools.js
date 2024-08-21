export const getSeriesForecasting = (metrics, hidden) => {
	const facts = [];
	metrics.facts.dataSeries.map((element) =>
		facts.push({
			name: element.dims[0].value,
			data: element.values.map((value, index) => {
				return [metrics.facts.timeValues[index], value];
			}),
			type: 'line',
			symbol: 'circle',
			symbolSize: 5,
			showAllSymbol: true,
		})
	);

	const forecast = [];
	metrics.forecast.dataSeries.map((element) => {
		forecast.push(
			...(hidden
				? [
						{
							name: 'Lower limit',
							type: 'line',
							stack: element.name,
							data: element.fcstLower.map((value, index) => {
								return [metrics.forecast.timeValues[index], value];
							}),
							symbol: 'none',
							smooth: true,
							lineStyle: {
								opacity: 0,
							},
						},
						{
							name: 'Upper limit',
							type: 'line',
							stack: element.name,
							data: element.fcstUpper.map((value, index) => {
								return [
									metrics.forecast.timeValues[index],
									value - element.fcstLower[index],
								];
							}),
							areaStyle: {
								origin: Math.min(...element.fcstLower),
							},
							symbol: 'none',
							smooth: true,
							lineStyle: {
								opacity: 0,
							},
						},
				  ]
				: []),
			{
				name: 'Forecasting',
				type: 'line',
				data: element.values.map((value, index) => {
					return [metrics.forecast.timeValues[index], value];
				}),
				lineStyle: {
					width: 2,
					opacity: 1,
					type: 'dashed',
				},
				symbol: 'none',
				symbolSize: 5,
			}
		);
	});

	const series = [...facts, ...forecast];
	return series;
};
