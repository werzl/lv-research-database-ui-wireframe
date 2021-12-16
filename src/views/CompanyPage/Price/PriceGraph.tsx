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
import { Link } from 'react-router-dom';

import { getCompanyNameFromUrl } from "../../../common/urlHelper";

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
	responsive: true,
	plugins: {
		title: {
			display: true,
			text: 'Approved FMV',
		},
	}
};

const labels = ["2007", "2009", "2011", "2013", "2015", "2017", "2019", "2021", "2023", "2025", "2027", "2029", "2031", "2033", "2035", "2036"];

export const data = {
	labels,
	datasets: [
		{
			label: 'FMV',
			data: [20, 22, 24, 25, 24, 25, 26, 27, 27, 28, 29, 30, 30, 31, 32, 33],
			borderColor: '#0d6efd',
			backgroundColor: '#0d6efd'
		}
	]
};

const PriceGraph = () => {
	return <Line options={options} data={data} />;
}

export default PriceGraph;
