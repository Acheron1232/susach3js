import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import {useEffect} from "react";


const LineChart = ({ data }) => {
    // console.log(data)
    useEffect(() => {
        console.log(data)
    }, [data]);
    const fixData = {
        labels: data.map(e=>e.date),
        datasets: [
            {
                label: 'min temperature',
                data: data.map(e1=>e1.minValue),
                fill: false,
                borderColor: 'red',
                tension: 0.1,
            },{
                label: 'max temperature',
                data: data.map(e1=>e1.maxValue),
                fill: false,
                borderColor: 'blue',
                tension: 0.1,
            },{
                label: 'avg temperature',
                data: data.map(e1=>e1.averageValue),
                fill: false,
                borderColor: 'black',
                tension: 0.1,
            },{
                label: 'min wind speed',
                data: data.map(e1=>e1.minWind),
                fill: false,
                borderColor: 'pink',
                tension: 0.1,
            },{
                label: 'max wind speed',
                data: data.map(e1=>e1.maxWind),
                fill: false,
                borderColor: 'green',
                tension: 0.1,
            },{
                label: 'avg wind speed',
                data: data.map(e1=>e1.averageWind),
                fill: false,
                borderColor: 'yellow',
                tension: 0.1,
            }
        ],
    };
    return (
        <>
            {fixData && <Line width='1100px' height='480px'  data={fixData} />}
        </>
    );
};

export default LineChart;