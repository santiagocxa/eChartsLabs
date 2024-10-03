export const getSeriesForecasting = (
	metrics,
	hidden,
	limit,
	isNegativeLimit
) => {
	const getSeries = (metrics, limit, isNegativeLimit) => {
		const facts = [];
		metrics.facts.dataSeries.map((element) => {
			facts.push({
				name: element.dims[0].value,
				data: element.values.map((value, index) => {
					return [
						metrics.facts.timeValues[index],
						isNegativeLimit ? value + limit : value,
					];
				}),
				type: 'line',
				symbol: 'circle',
				symbolSize: 5,
				showAllSymbol: true,
				...(isNegativeLimit
					? {
							markLine: {
								silent: true,
								symbol: 'none',
								data: [
									{
										yAxis: limit,
										label: {
											formatter: '0',
											position: 'start',
										},
										lineStyle: {
											color: 'black',
											width: 1,
											type: 'solid',
											opacity: 1,
										},
									},
								],
							},
					  }
					: []),
			});
		});
		return facts;
	};

	const forecast = [];

	metrics.forecast.dataSeries.map((element) => {
    const harmonicColors = generateHarmonicColors();
		forecast.push(
			...(hidden
				? [
						{
							name: 'Lower limit',
							type: 'line',
							data: element.fcstLower.map((value, index) => {
								return [
									metrics.forecast.timeValues[index],
									isNegativeLimit ? value + limit : value,
									{ negativeNumber: limit },
								];
							}),
							lineStyle: {
								opacity: 0,
                color: 'red'
							},
							stack: `confidence-band - ${element.name}`,
							symbol: 'none',
						},
						{
							name: 'Upper limit',
							type: 'line',
							data: element.fcstUpper.map((value, index) => {
								return [
									metrics.forecast.timeValues[index],
									value - element.fcstLower[index] + limit,
									isNegativeLimit
										? value - element.fcstLower[index] + limit
										: value - element.fcstLower[index],
									{ negativeNumber: limit },
								];
							}),
							lineStyle: {
								opacity: 0,
							},
							areaStyle: {
                color: harmonicColors[0]
              },
							stack: `confidence-band - ${element.name}`,
							symbol: 'none',
						},
				  ]
				: []),
			{
				name: 'Forecasting',
				type: 'line',
				data: element.values.map((value, index) => {
					return [
						metrics.forecast.timeValues[index],
						isNegativeLimit ? value + limit : value,
						{ negativeNumber: limit, numerReal: value },
					];
				}),
				lineStyle: {
					width: 2,
					opacity: 1,
					type: 'dashed',
				},
        itemStyle: {
         color: harmonicColors[1]
        },
				symbol: 'circle',
				symbolSize: 5,
			},
			...getSeries(metrics, limit, isNegativeLimit)
		);
	});
	const series = forecast;
	return series;
};

export function generateHarmonicColors() {
  function generateRandomHSL() {
    return {
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 60) + 40, // 40-100%
      l: Math.floor(Math.random() * 40) + 30  // 30-70%
    };
  }

  function convertHslToRGB(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [
      Math.round(255 * f(0)),
      Math.round(255 * f(8)),
      Math.round(255 * f(4))
    ];
  }

  const getBaseColor = generateRandomHSL();

  // Generate harmonious colors
  const colors = [
    getBaseColor,
    { ...getBaseColor, h: (getBaseColor.h + 120) % 360 },
    { ...getBaseColor, h: (getBaseColor.h + 240) % 360 }
  ];

  return colors.map(color => {
    const [r, g, b] = convertHslToRGB(color.h, color.s, color.l);
    return `rgb(${r}, ${g}, ${b})`;
  });
}
