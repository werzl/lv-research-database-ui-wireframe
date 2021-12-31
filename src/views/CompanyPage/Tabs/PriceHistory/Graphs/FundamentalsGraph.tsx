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
    responsive: true,
    maintainAspectRatio: false,

    scales: {
        y: {
            min: 0,
            max: 3,
            ticks: {
                stepSize: 1
            }
        }
    },
};

const labels = ["2007", "2009", "2011", "2013", "2015", "2017", "2019", "2021"];

export const data = {
    labels,
    datasets: [
        {
            label: 'Fundamentals',
            data: [0, 0, 0, 3, 3, 2, 2, 2],
            borderColor: '#0d6efd',
            backgroundColor: '#0d6efd'
        }
    ]
};

const FundamentalsGraph = () => {
    return <Line
        options={options}
        data={data} />;
}

export default FundamentalsGraph;
