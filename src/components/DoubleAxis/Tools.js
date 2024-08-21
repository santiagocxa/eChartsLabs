export const generateValues = (base, range) => {
	const baseNumber = base;
	const upperRange = base % 1000 === 0 ? 1200 : 150;
	const lowerRange = 150;
	const randomList = [];

	for (let i = 0; i < range; i++) {
		const randomValue =
			Math.floor(
				Math.random() *
					(baseNumber + upperRange - (baseNumber - lowerRange) + 1)
			) +
			(baseNumber - lowerRange);
		randomList.push(randomValue);
	}
	return randomList;
};

export const getSeries = (data) => {
	const series = data.getMetricsAsTimeSeries.facts.dataSeries.map(
		(series, index) => {
			const selectorYAxis = (index + 2) % 2 === 0 ? 0 : 1;
			return {
				type: 'line',
				name: series.dims[0].value,
				tooltipName: selectorYAxis ? 'Speed' : 'Value',
				yAxisIndex: selectorYAxis,
				lineStyle: {
					type: selectorYAxis ? 'solid' : 'dotted',
				},
				symbol: selectorYAxis ? 'emptyCircle' : 'diamond',
				symbolSize: 8,
				smooth: true,
				data: series?.values?.map((value, index) =>
					value !== null
						? [
								new Date(
									data.getMetricsAsTimeSeries.facts?.timeValues[index]
								),
								series?.values[index],
						  ]
						: null
				),
			};
		}
	);
	return series;
};


export 	const mockData = {
  getMetricsAsTimeSeries: {
    facts: {
      timeValues: [
        '2024-02-02T10:00:00.000Z',
        '2024-02-02T10:05:00.000Z',
        '2024-02-02T10:10:00.000Z',
        '2024-02-02T10:15:00.000Z',
        '2024-02-02T10:20:00.000Z',
        '2024-02-02T10:25:00.000Z',
        '2024-02-02T10:30:00.000Z',
        '2024-02-02T10:35:00.000Z',
        '2024-02-02T10:40:00.000Z',
        '2024-02-02T10:45:00.000Z',
        '2024-02-02T10:50:00.000Z',
        '2024-02-02T10:55:00.000Z',
        '2024-02-02T11:00:00.000Z',
        '2024-02-02T11:05:00.000Z',
        '2024-02-02T11:10:00.000Z',
        '2024-02-02T11:15:00.000Z',
        '2024-02-02T11:20:00.000Z',
        '2024-02-02T11:25:00.000Z',
        '2024-02-02T11:30:00.000Z',
        '2024-02-02T11:35:00.000Z',
        '2024-02-02T11:40:00.000Z',
        '2024-02-02T11:45:00.000Z',
        '2024-02-02T11:50:00.000Z',
        '2024-02-02T11:55:00.000Z',
        '2024-02-02T12:00:00.000Z',
        '2024-02-02T12:05:00.000Z',
        '2024-02-02T12:10:00.000Z',
        '2024-02-02T12:15:00.000Z',
        '2024-02-02T12:20:00.000Z',
        '2024-02-02T12:25:00.000Z',
        '2024-02-02T12:30:00.000Z',
        '2024-02-02T12:35:00.000Z',
        '2024-02-02T12:40:00.000Z',
        '2024-02-02T12:45:00.000Z',
        '2024-02-02T12:50:00.000Z',
        '2024-02-02T12:55:00.000Z',
        '2024-02-02T13:00:00.000Z',
        '2024-02-02T13:05:00.000Z',
        '2024-02-02T13:10:00.000Z',
        '2024-02-02T13:15:00.000Z',
        '2024-02-02T13:20:00.000Z',
        '2024-02-02T13:25:00.000Z',
        '2024-02-02T13:30:00.000Z',
        '2024-02-02T13:35:00.000Z',
        '2024-02-02T13:40:00.000Z',
        '2024-02-02T13:45:00.000Z',
        '2024-02-02T13:50:00.000Z',
        '2024-02-02T13:55:00.000Z',
        '2024-02-02T14:00:00.000Z',
        '2024-02-02T14:05:00.000Z',
        '2024-02-02T14:10:00.000Z',
        '2024-02-02T14:15:00.000Z',
        '2024-02-02T14:20:00.000Z',
        '2024-02-02T14:25:00.000Z',
        '2024-02-02T14:30:00.000Z',
        '2024-02-02T14:35:00.000Z',
        '2024-02-02T14:40:00.000Z',
        '2024-02-02T14:45:00.000Z',
        '2024-02-02T14:50:00.000Z',
        '2024-02-02T14:55:00.000Z',
        '2024-02-02T15:00:00.000Z',
        '2024-02-02T15:05:00.000Z',
        '2024-02-02T15:10:00.000Z',
        '2024-02-02T15:15:00.000Z',
        '2024-02-02T15:20:00.000Z',
        '2024-02-02T15:25:00.000Z',
        '2024-02-02T15:30:00.000Z',
        '2024-02-02T15:35:00.000Z',
        '2024-02-02T15:40:00.000Z',
        '2024-02-02T15:45:00.000Z',
        '2024-02-02T15:50:00.000Z',
        '2024-02-02T15:55:00.000Z',
        '2024-02-02T16:00:00.000Z',
        '2024-02-02T16:05:00.000Z',
        '2024-02-02T16:10:00.000Z',
        '2024-02-02T16:15:00.000Z',
        '2024-02-02T16:20:00.000Z',
        '2024-02-02T16:25:00.000Z',
        '2024-02-02T16:30:00.000Z',
        '2024-02-02T16:35:00.000Z',
        '2024-02-02T16:40:00.000Z',
        '2024-02-02T16:45:00.000Z',
        '2024-02-02T16:50:00.000Z',
        '2024-02-02T16:55:00.000Z',
        '2024-02-02T17:00:00.000Z',
        '2024-02-02T17:05:00.000Z',
        '2024-02-02T17:10:00.000Z',
        '2024-02-02T17:15:00.000Z',
        '2024-02-02T17:20:00.000Z',
        '2024-02-02T17:25:00.000Z',
        '2024-02-02T17:30:00.000Z',
        '2024-02-02T17:35:00.000Z',
        '2024-02-02T17:40:00.000Z',
        '2024-02-02T17:45:00.000Z',
        '2024-02-02T17:50:00.000Z',
        '2024-02-02T17:55:00.000Z',
        '2024-02-02T18:00:00.000Z',
        '2024-02-02T18:05:00.000Z',
        '2024-02-02T18:10:00.000Z',
        '2024-02-02T18:15:00.000Z',
        '2024-02-02T18:20:00.000Z',
        '2024-02-02T18:25:00.000Z',
        '2024-02-02T18:30:00.000Z',
        '2024-02-02T18:35:00.000Z',
        '2024-02-02T18:40:00.000Z',
        '2024-02-02T18:45:00.000Z',
        '2024-02-02T18:50:00.000Z',
        '2024-02-02T18:55:00.000Z',
        '2024-02-02T19:00:00.000Z',
        '2024-02-02T19:05:00.000Z',
        '2024-02-02T19:10:00.000Z',
        '2024-02-02T19:15:00.000Z',
        '2024-02-02T19:20:00.000Z',
        '2024-02-02T19:25:00.000Z',
        '2024-02-02T19:30:00.000Z',
        '2024-02-02T19:35:00.000Z',
        '2024-02-02T19:40:00.000Z',
        '2024-02-02T19:45:00.000Z',
        '2024-02-02T19:50:00.000Z',
        '2024-02-02T19:55:00.000Z',
        '2024-02-02T20:00:00.000Z',
        '2024-02-02T20:05:00.000Z',
        '2024-02-02T20:10:00.000Z',
        '2024-02-02T20:15:00.000Z',
        '2024-02-02T20:20:00.000Z',
        '2024-02-02T20:25:00.000Z',
        '2024-02-02T20:30:00.000Z',
        '2024-02-02T20:35:00.000Z',
        '2024-02-02T20:40:00.000Z',
        '2024-02-02T20:45:00.000Z',
        '2024-02-02T20:50:00.000Z',
        '2024-02-02T20:55:00.000Z',
        '2024-02-02T21:00:00.000Z',
        '2024-02-02T21:05:00.000Z',
        '2024-02-02T21:10:00.000Z',
      ],
      dataSeries: [
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=ims.ne',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=ims.ne',
            },
          ],
          values: generateValues(200, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=ims.sos.ne',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=ims.sos.ne',
            },
          ],
          values: generateValues(3000, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=hrs.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=hrs.vivo.com.br',
            },
          ],
          values: generateValues(400, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=jerinat64.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=jerinat64.vivo.com.br',
            },
          ],
          values: generateValues(5000, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=bip.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=bip.vivo.com.br',
            },
          ],
          values: generateValues(600, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=eaqmovel.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=eaqmovel.vivo.com.br',
            },
          ],
          values: generateValues(7000, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=imsteste',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=imsteste',
            },
          ],
          values: generateValues(800, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=jeri.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=jeri.vivo.com.br',
            },
          ],
          values: generateValues(9000, 134),
        },
        {
          name: 'AGG{T:SUM/S:NONE}__E2E - Maximum Active Simultaneous Bearer per APN-nodeName=ugw, APN=zapblockall.vivo.com.br',
          dims: [
            {
              name: 'discovery.name',
              value: 'nodeName=ugw, APN=zapblockall.vivo.com.br',
            },
          ],
          values: generateValues(999, 134),
        },
      ],
    },
  },
};