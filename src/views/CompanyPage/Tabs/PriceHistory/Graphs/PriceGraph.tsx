import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true
};

const labels = ["2007", "2009", "2011", "2013", "2015", "2017", "2019", "2021", "2023", "2025", "2027", "2029", "2031", "2033", "2035", "2036"];

export const data = {
	labels,
	datasets: [
		{
			label: 'FMV',
			data: [88, 89, 90, 90, 91, 92, 93, 94, 95, 95, 94, 94, 95, 98, 98, 100],
			borderColor: '#0d6efd',
			backgroundColor: '#0d6efd'
		}
	]
};

const PriceGraph = () => {
	return <Line options={options} data={data} />;
}

export default PriceGraph;
